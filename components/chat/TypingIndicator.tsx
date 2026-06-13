export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="theme-panel-solid flex items-center gap-2 rounded-[22px] border px-4 py-3 shadow-sm">
        <span className="sr-only">Leonardo is typing</span>
        <span className="h-2.5 w-2.5 animate-[chatPulse_1s_ease-in-out_infinite] rounded-full bg-[var(--muted-soft)]" />
        <span className="h-2.5 w-2.5 animate-[chatPulse_1s_ease-in-out_0.15s_infinite] rounded-full bg-[var(--muted-soft)]" />
        <span className="h-2.5 w-2.5 animate-[chatPulse_1s_ease-in-out_0.3s_infinite] rounded-full bg-[var(--muted-soft)]" />
      </div>
    </div>
  );
}
