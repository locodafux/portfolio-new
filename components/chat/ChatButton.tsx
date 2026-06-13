"use client";

import { ChatIcon } from "@/components/ui/icons";

type ChatButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export function ChatButton({ isOpen, onClick }: ChatButtonProps) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Open Leonardo AI chat" : "Chat with Leonardo"}
      aria-expanded={isOpen}
      aria-controls="portfolio-chat-window"
      onClick={onClick}
      className={`group inline-flex min-h-11 items-center gap-3 rounded-full border border-white/70 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
        isOpen ? "scale-[0.98] opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-900">
        <ChatIcon className="h-4.5 w-4.5" />
      </span>
      <span>Chat with Leonardo</span>
    </button>
  );
}
