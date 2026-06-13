type ChatMessageProps = {
  role: "user" | "assistant" | "error";
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";
  const isError = role === "error";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-[22px] border px-4 py-3 text-sm leading-7 shadow-sm ${
          isUser
            ? "theme-accent-bg border-transparent"
            : isError
              ? "bg-[color:color-mix(in_srgb,var(--surface-solid)_82%,rgba(120,53,15,0.14))] text-[var(--foreground)] border-[color:color-mix(in_srgb,var(--line-strong)_72%,rgba(120,53,15,0.34))]"
              : "theme-panel-solid theme-text"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
}
