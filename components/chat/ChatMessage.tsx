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
        className={`max-w-[85%] rounded-[22px] px-4 py-3 text-sm leading-7 shadow-sm ${
          isUser
            ? "bg-[linear-gradient(135deg,#f472b6,#a855f7)] text-white"
            : isError
              ? "border border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/50 dark:text-rose-200"
              : "theme-panel-solid theme-text border"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{content}</p>
      </div>
    </div>
  );
}
