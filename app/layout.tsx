import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Leonardo Timkang Jr. — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Laravel, Vue, PHP, enterprise systems, ERP integrations, internal tools, and database-driven business applications.",
  openGraph: {
    title: "Leonardo Timkang Jr. — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel, Vue, PHP, enterprise systems, ERP integrations, internal tools, and database-driven business applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Timkang Jr. — Full Stack Developer",
    description:
      "Full Stack Developer specializing in Laravel, Vue, PHP, enterprise systems, ERP integrations, internal tools, and database-driven business applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const storageKey = "theme";
            const root = document.documentElement;
            const storedTheme = window.localStorage.getItem(storageKey);
            const preference = storedTheme === "light" || storedTheme === "dark" || storedTheme === "system"
              ? storedTheme
              : "system";
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            const resolvedTheme = preference === "system" ? systemTheme : preference;
            root.classList.toggle("dark", resolvedTheme === "dark");
            root.setAttribute("data-theme", resolvedTheme);
            root.setAttribute("data-theme-preference", preference);
          })();`}
        </Script>
      </head>
      <body className={`${manrope.variable} min-h-screen font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
