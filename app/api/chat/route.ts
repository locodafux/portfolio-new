import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { profileKnowledge } from "@/lib/data";

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
    "You are Leonardo's portfolio AI assistant.",
    "Your job is to answer visitors' questions about Leonardo Timkang Jr. using only the provided profile knowledge.",
    "Be friendly, professional, short, helpful, and portfolio-focused.",
    "Do not pretend to be Leonardo or a live human.",
    "Never invent facts, companies, awards, dates, contact details, or projects.",
    "If information is missing, reply exactly: I don't have that detail in Leonardo's portfolio data yet, but you can contact him directly for more information.",
    "If the question is inappropriate, private, or sensitive, politely refuse and redirect to professional portfolio topics.",
    "If the user asks a general coding question, answer briefly and connect it to Leonardo's skills when natural.",
    "Keep answers focused on Leonardo's skills, experience, projects, education, availability, tech stack, and contact details.",
    "",
    "Profile knowledge:",
    JSON.stringify(profileKnowledge, null, 2),
  ].join("\n");
}

export async function POST(request: NextRequest) {
  if (!process.env.GEMINI_API_KEY) {
    return NextResponse.json({ error: "Missing Gemini API key." }, { status: 500 });
  }

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

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: messages.map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      })),
      config: {
        systemInstruction: buildSystemInstruction(),
        temperature: 0.4,
        topP: 0.9,
        maxOutputTokens: 220,
        responseMimeType: "text/plain",
      },
    });

    const reply = response.text?.trim();

    if (!reply) {
      return NextResponse.json({ error: "Empty AI response." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Failed to generate a response." }, { status: 500 });
  }
}
