import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import {
  getCasualPromptAnswer,
  getPortfolioFallbackAnswer,
  getQuickPromptAnswer,
  profileKnowledge,
} from "@/lib/data";

export const runtime = "nodejs";

const MODEL_NAME = process.env.GEMINI_MODEL || "gemini-3.5-flash";
const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_MESSAGES = 8;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function normalizeMessages(value: unknown): IncomingMessage[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((message): message is IncomingMessage => {
      if (!message || typeof message !== "object") {
        return false;
      }

      const role = "role" in message ? message.role : undefined;
      const content = "content" in message ? message.content : undefined;

      return (role === "user" || role === "assistant") && typeof content === "string";
    })
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-MAX_HISTORY_MESSAGES);
}

function buildSystemInstruction() {
  return [
    "You are Leonardo's portfolio assistant.",
    "Your job is to answer visitors' questions about Leonardo Timkang Jr. using the provided profile knowledge.",
    "Your personality is professional, friendly, witty, confident without sounding arrogant, and naturally conversational.",
    "Be concise, helpful, and portfolio-focused.",
    "Use crisp, playful humor when it helps the reply feel human. Prefer dry wit and clever phrasing over safe corporate filler.",
    "Avoid cringe, forced jokes, sarcasm that sounds mean, and overly theatrical AI phrasing.",
    "Do not pretend to be Leonardo or a live human.",
    "Never invent facts, companies, awards, dates, contact details, or projects.",
    "For work experience, projects, skills, education, achievements, availability, and contact details, stay grounded in the portfolio data.",
    "If a casual or personality question is not directly covered by the portfolio, do not sound robotic. Briefly say it is not listed, then bridge back to known strengths with a witty, professional touch.",
    "Keep answers short and chat-like unless the user asks for more detail.",
    "If the question is inappropriate, private, or sensitive, politely refuse and redirect to professional portfolio topics.",
    "Private topics include relationships, family members, home address, salary, religion, politics, and other personal life details not meant for a portfolio.",
    "If the user asks a general coding question, answer briefly and connect it to Leonardo's skills when natural.",
    "Keep answers focused on Leonardo's skills, experience, projects, education, availability, tech stack, and contact details.",
    "Interpret common visitor questions in a portfolio-friendly way:",
    '- "Tell me about Leonardo" means summarize his professional background.',
    '- "What are his main skills?" means highlight his core technical stack and strengths.',
    '- "What projects has he built?" means summarize notable portfolio and business systems work.',
    '- "How can I contact him?" means provide the contact details available in the profile data.',
    '- "Is Leonardo funny?" can be answered playfully, but you must not claim personal facts you do not know.',
    '- "Can I hire him?" should be treated as a question about fit and availability based on the portfolio.',
    '- "Tell me something cool about him." should point to a real strength or portfolio detail.',
    "If the answer exists in the profile knowledge, answer directly instead of saying you do not know.",
    "Tone examples:",
    'User: "Is Leonardo funny?"',
    'Assistant: "That’s not listed in Leonardo’s portfolio, but if clean systems and solid builds count as humor, he might be dangerously funny."',
    'User: "Is he good at coding?"',
    'Assistant: "Based on his portfolio, yes. Leonardo focuses on full-stack development, clean interfaces, and practical web applications."',
    'User: "Can I hire him?"',
    'Assistant: "Absolutely. If you’re looking for someone who can build polished, functional web experiences, Leonardo’s portfolio makes a solid case."',
    'User: "Be funny."',
    'Assistant: "I can do that. Think more dry wit, fewer stand-up specials. Leonardo still gets the polished portfolio, you just get better one-liners along the way."',
    'User: "What is his favorite food?"',
    'Assistant: "That detail is not listed in the portfolio. I can tell you about his skills, projects, and experience instead, which is probably more useful unless this interview includes snacks."',
    'User: "Who is his girl?"',
    'Assistant: "That’s outside the scope of Leonardo’s portfolio, so I keep it focused on his work. I can help with his skills, projects, experience, or contact details instead."',
    "",
    "Profile knowledge:",
    JSON.stringify(profileKnowledge, null, 2),
  ].join("\n");
}

function getUpstreamErrorDetails(error: unknown) {
  if (!error || typeof error !== "object") {
    return { status: null as number | null, message: null as string | null };
  }

  const status =
    "status" in error && typeof error.status === "number"
      ? error.status
      : "code" in error && typeof error.code === "number"
        ? error.code
        : null;

  const message = "message" in error && typeof error.message === "string" ? error.message : null;

  return { status, message };
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const rawMessages =
    body && typeof body === "object" && "messages" in body
      ? (body as { messages?: unknown }).messages
      : undefined;

  const messages = normalizeMessages(rawMessages);
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");

  if (!latestUserMessage) {
    return NextResponse.json({ error: "A user message is required." }, { status: 400 });
  }

  const fallbackReply = getPortfolioFallbackAnswer(latestUserMessage.content);
  const quickPromptReply = getQuickPromptAnswer(latestUserMessage.content);
  const casualPromptReply = getCasualPromptAnswer(latestUserMessage.content);

  // Return curated answers directly for common portfolio prompts so replies stay complete and consistent.
  if (quickPromptReply) {
    return NextResponse.json({ reply: quickPromptReply, source: "quick-prompt" });
  }

  if (casualPromptReply) {
    return NextResponse.json({ reply: casualPromptReply, source: "casual-prompt" });
  }

  if (!process.env.GEMINI_API_KEY) {
    if (fallbackReply) {
      return NextResponse.json({ reply: fallbackReply, source: "fallback" });
    }

    return NextResponse.json({ error: "Missing Gemini API key." }, { status: 500 });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        ...messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.content }],
        })),
      ],
      config: {
        systemInstruction: buildSystemInstruction(),
        temperature: 0.4,
        topP: 0.9,
        maxOutputTokens: 480,
        responseMimeType: "text/plain",
      },
    });

    const reply = response.text?.trim();

    if (!reply) {
      if (fallbackReply) {
        return NextResponse.json({ reply: fallbackReply, source: "fallback" });
      }

      return NextResponse.json({ error: "Empty AI response." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    const { status, message } = getUpstreamErrorDetails(error);

    if (fallbackReply) {
      return NextResponse.json({ reply: fallbackReply, source: "fallback" });
    }

    if (status === 429) {
      return NextResponse.json(
        {
          error:
            "The chat AI is temporarily rate-limited right now. Please try again in about a minute.",
          details: message,
        },
        { status: 429 },
      );
    }

    return NextResponse.json({ error: "Failed to generate a response." }, { status: 500 });
  }
}
