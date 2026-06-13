import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  ariaLabel?: string;
  download?: boolean | string;
};

const variants = {
  primary:
    "theme-accent-bg hover:-translate-y-0.5 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-[var(--background)]",
  secondary:
    "bg-[var(--surface-solid)] theme-text ring-1 ring-inset theme-border hover:-translate-y-0.5 theme-accent-muted-hover focus-visible:ring-[var(--focus)] focus-visible:ring-offset-[var(--background)]",
  ghost:
    "bg-transparent theme-text-muted ring-1 ring-inset theme-border hover:-translate-y-0.5 hover:bg-[var(--surface-solid)] hover:text-[var(--foreground)] focus-visible:ring-[var(--focus)] focus-visible:ring-offset-[var(--background)]",
};

export function Button({
  href,
  children,
  variant = "secondary",
  external,
  ariaLabel,
  download,
}: ButtonProps) {
  const props: AnchorHTMLAttributes<HTMLAnchorElement> = external
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      download={download}
      {...props}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
