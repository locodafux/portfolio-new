"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { MailIcon } from "@/components/ui/icons";
import { ScrollProgress } from "@/components/ui/scroll-effects";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-24% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("#", "");
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    event.preventDefault();
    setActiveSection(id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <>
      <ScrollProgress />
      <header className="sticky top-0 z-40 border-b border-transparent bg-[color:color-mix(in_srgb,var(--background)_78%,transparent)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#" className="theme-text text-sm font-semibold uppercase tracking-[0.2em]">
            LT
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)] ${
                    isActive
                      ? "theme-accent-bg shadow-sm"
                      : "theme-text-muted hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button href="mailto:leonardotimkangjr@gmail.com" variant="primary" ariaLabel="Send Leonardo an email">
              <MailIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Let&apos;s talk</span>
              <span className="sm:hidden">Email</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
