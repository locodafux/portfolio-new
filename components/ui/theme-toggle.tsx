"use client";

import { useEffect, useState } from "react";

const storageKey = "theme";

type ThemePreference = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(preference: ThemePreference) {
  const root = document.documentElement;
  const resolvedTheme = preference === "system" ? getSystemTheme() : preference;
  root.classList.toggle("dark", resolvedTheme === "dark");
  root.setAttribute("data-theme", resolvedTheme);
  root.setAttribute("data-theme-preference", preference);
}

function getStoredPreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedTheme = window.localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
    return storedTheme;
  }

  return "system";
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.75v2.5M12 18.75v2.5M21.25 12h-2.5M5.25 12h-2.5M18.54 5.46l-1.77 1.77M7.23 16.77l-1.77 1.77M18.54 18.54l-1.77-1.77M7.23 7.23 5.46 5.46" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path d="M20.2 14.2A8.5 8.5 0 1 1 9.8 3.8a7 7 0 0 0 10.4 10.4Z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <rect x="3.5" y="5" width="17" height="11.5" rx="2.5" />
      <path d="M9 19h6M12 16.5V19" />
    </svg>
  );
}

export function ThemeToggle() {
  const [themePreference, setThemePreference] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const preferredTheme = getStoredPreference();
    applyTheme(preferredTheme);
    setThemePreference(preferredTheme);
    setResolvedTheme(preferredTheme === "system" ? getSystemTheme() : preferredTheme);
    setMounted(true);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "dark") {
        return;
      }

      const nextTheme: ResolvedTheme = event.matches ? "dark" : "light";
      applyTheme("system");
      setThemePreference("system");
      setResolvedTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const nextTheme: ThemePreference =
    themePreference === "system" ? "light" : themePreference === "light" ? "dark" : "system";

  const handleToggle = () => {
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
    setThemePreference(nextTheme);
    setResolvedTheme(nextTheme === "system" ? getSystemTheme() : nextTheme);
  };

  const title = mounted
    ? `Theme: ${themePreference}. Next: ${nextTheme}.`
    : "Toggle theme";

  const icon =
    !mounted || themePreference === "system" ? (
      <SystemIcon />
    ) : resolvedTheme === "dark" ? (
      <SunIcon />
    ) : (
      <MoonIcon />
    );

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle theme"
      title={title}
      className="theme-panel inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border text-[var(--muted)] shadow-sm backdrop-blur hover:-translate-y-0.5 hover:bg-[var(--surface-solid)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
    >
      <span className="sr-only">{title}</span>
      {icon}
    </button>
  );
}
