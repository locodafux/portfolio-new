"use client";

import { FormEvent, KeyboardEvent, RefObject } from "react";
import { profileKnowledge } from "@/lib/data";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { TypingIndicator } from "@/components/chat/TypingIndicator";

type Message = {
  id: string;
  role: "user" | "assistant" | "error";
  content: string;
};

type ChatWindowProps = {
  isOpen: boolean;
  inputValue: string;
  isLoading: boolean;
  messages: Message[];
  textareaRef: RefObject<HTMLTextAreaElement | null>;
  onInputChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
  onClear: () => void;
  onStarterClick: (prompt: string) => void;
};

const starterPrompts = [
  "Tell me about Leonardo",
  "What are his main skills?",
  "What projects has he built?",
  "How can I contact him?",
];

export function ChatWindow({
  isOpen,
  inputValue,
  isLoading,
  messages,
  textareaRef,
  onInputChange,
  onClose,
  onSubmit,
  onClear,
  onStarterClick,
}: ChatWindowProps) {
  const canSend = inputValue.trim().length > 0 && !isLoading;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <section
      id="portfolio-chat-window"
      aria-label={`${profileKnowledge.assistantName} chat`}
      className={`fixed bottom-3 left-3 right-3 z-50 flex max-h-[calc(100vh-24px)] origin-bottom-right flex-col rounded-[28px] border border-white/10 bg-[color:color-mix(in_srgb,var(--background-secondary)_88%,rgba(10,12,18,0.92))] shadow-[0_30px_80px_rgba(2,6,23,0.4)] backdrop-blur-xl transition duration-300 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[380px] ${
        isOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[var(--foreground)]">{profileKnowledge.assistantName}</p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Ask about Leonardo&apos;s skills, projects, experience, or tech stack.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onClear}
            className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-secondary)]"
          >
            Clear
          </button>
          <button
            type="button"
            aria-label="Close Leonardo AI chat"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-secondary)]"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 sm:px-5">
        {messages.length === 1 ? (
          <div className="flex flex-wrap gap-2">
            {starterPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => onStarterClick(prompt)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-xs font-medium text-[var(--foreground)] transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-secondary)]"
              >
                {prompt}
              </button>
            ))}
          </div>
        ) : null}

        {messages.map((message) => (
          <ChatMessage key={message.id} role={message.role} content={message.content} />
        ))}

        {isLoading ? <TypingIndicator /> : null}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-white/10 px-4 py-4 sm:px-5">
        <label htmlFor="portfolio-chat-input" className="sr-only">
          Ask Leonardo AI a question
        </label>
        <div className="rounded-[24px] border border-white/10 bg-black/10 p-2 shadow-inner">
          <textarea
            id="portfolio-chat-input"
            ref={textareaRef}
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            maxLength={1200}
            placeholder="Ask about Leonardo's work, stack, or experience..."
            aria-label="Ask Leonardo AI a question"
            className="min-h-[96px] w-full resize-none bg-transparent px-3 py-2 text-sm leading-7 text-[var(--foreground)] outline-none placeholder:text-[var(--muted-soft)]"
          />
          <div className="flex items-center justify-between gap-3 px-2 pb-2 pt-1">
            <p className="text-xs text-[var(--muted-soft)]">{inputValue.length}/1200</p>
            <button
              type="submit"
              disabled={!canSend}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background-secondary)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
