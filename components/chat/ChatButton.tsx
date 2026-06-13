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
      aria-label={isOpen ? "Open Leonardo portfolio chat" : "Chat with Leonardo"}
      aria-expanded={isOpen}
      aria-controls="portfolio-chat-window"
      onClick={onClick}
      className={`theme-panel inline-flex min-h-11 items-center gap-3 rounded-full border px-5 py-3 text-sm font-semibold theme-text backdrop-blur hover:-translate-y-1 hover:bg-[var(--surface-solid)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
        isOpen ? "scale-[0.98] opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="theme-panel-muted theme-text flex h-9 w-9 items-center justify-center rounded-full border">
        <ChatIcon className="h-4.5 w-4.5" />
      </span>
      <span>Chat with Leonardo</span>
    </button>
  );
}
