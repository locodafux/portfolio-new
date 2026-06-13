"use client";

import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  id?: string;
  once?: boolean;
  threshold?: number;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

export function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  duration = 620,
  distance = 24,
  id,
  once = true,
  threshold = 0.18,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, prefersReducedMotion, threshold]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
    "--reveal-distance": `${distance}px`,
  } as CSSProperties;

  return (
    <Component
      id={id}
      ref={ref}
      style={style}
      className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

export function ScrollProgress() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll <= 0 ? 0 : Math.min(scrollTop / maxScroll, 1);
      setProgress(nextProgress);
    };

    const handleScroll = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="scroll-progress-shell">
      <div
        className={`scroll-progress-bar ${prefersReducedMotion ? "motion-reduce:transition-none" : ""}`}
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
