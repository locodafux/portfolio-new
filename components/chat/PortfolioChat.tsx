"use client";

import { useEffect, useRef, useState } from "react";
import { ChatButton } from "@/components/chat/ChatButton";
import { ChatWindow } from "@/components/chat/ChatWindow";
import { getPortfolioFallbackAnswer } from "@/lib/data";

type StoredMessage = {
  id: string;
  role: "user" | "assistant" | "error";
  content: string;
};

const STORAGE_KEY = "portfolio-chat-history";
const MAX_HISTORY_ITEMS = 20;

const welcomeMessage: StoredMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi! I’m Leonardo’s portfolio assistant. Ask me about his skills, projects, experience, or tech stack.",
};

function createMessage(role: StoredMessage["role"], content: string): StoredMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    content,
  };
}

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<StoredMessage[]>([welcomeMessage]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored) as StoredMessage[];
      if (!Array.isArray(parsed) || parsed.length === 0) {
        return;
      }

      const safeMessages = parsed.filter(
        (message) =>
          message &&
          typeof message.id === "string" &&
          (message.role === "user" || message.role === "assistant" || message.role === "error") &&
          typeof message.content === "string",
      );

      setMessages(safeMessages.length > 0 ? safeMessages : [welcomeMessage]);
    } catch {
      setMessages([welcomeMessage]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_HISTORY_ITEMS)));
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const frame = window.requestAnimationFrame(() => textareaRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const submitMessage = async (rawMessage?: string) => {
    const nextInput = (rawMessage ?? inputValue).trim().slice(0, 1200);

    if (!nextInput || isLoading) {
      return;
    }

    const nextUserMessage = createMessage("user", nextInput);
    const nextMessages = [...messages, nextUserMessage];

    setMessages(nextMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.role === "user" || message.role === "assistant")
            .map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = (await response.json()) as { answer?: string; reply?: string; message?: string; error?: string };
      const fallbackAnswer = getPortfolioFallbackAnswer(nextInput);
      const answer =
        data.answer?.trim() ||
        data.reply?.trim() ||
        data.message?.trim() ||
        data.error?.trim() ||
        fallbackAnswer ||
        "Sorry, I couldn’t generate an answer. Please try again.";

      if (!response.ok && !data.reply?.trim() && !fallbackAnswer) {
        throw new Error(data.error || "Request failed");
      }

      setMessages((currentMessages) => [...currentMessages, createMessage("assistant", answer)]);
    } catch {
      const fallbackAnswer = getPortfolioFallbackAnswer(nextInput);
      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage(
          fallbackAnswer ? "assistant" : "error",
          fallbackAnswer || "Sorry, I couldn’t respond right now. Please try again.",
        ),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    const resetMessages = [welcomeMessage];
    setMessages(resetMessages);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(resetMessages));
    setInputValue("");
  };

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex items-end justify-end sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <ChatWindow
          isOpen={isOpen}
          inputValue={inputValue}
          isLoading={isLoading}
          messages={messages}
          textareaRef={textareaRef}
          onInputChange={setInputValue}
          onClose={() => setIsOpen(false)}
          onSubmit={() => void submitMessage()}
          onClear={clearHistory}
          onStarterClick={(prompt) => {
            setIsOpen(true);
            void submitMessage(prompt);
          }}
        />
        <ChatButton isOpen={isOpen} onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
}
