import Link from "next/link";
import {
  achievements,
  experienceItems,
  galleryItems,
  highlights,
  projects,
  techCategories,
} from "@/lib/site-data";
import { SiteHeader } from "@/components/layout/site-header";
import {
  ArrowUpRightIcon,
  ChatIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  SparkIcon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/scroll-effects";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Timkang Jr.",
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Metro Manila",
    addressCountry: "Philippines",
  },
  email: "mailto:leonardotimkangjr@gmail.com",
  telephone: "09606152206",
  sameAs: [
    "https://github.com/locodafux",
    "https://www.linkedin.com/in/leonardo-timkang-jr-276230257/",
  ],
};

function getStaggerDelay(index: number, step = 90) {
  return index * step;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-3">
        {eyebrow ? (
          <p className="theme-text-soft text-xs font-semibold uppercase tracking-[0.24em]">{eyebrow}</p>
        ) : null}
        <div className="space-y-2">
          <h2 className="theme-text text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">{title}</h2>
          {description ? (
            <p className="theme-text-muted max-w-2xl text-sm leading-7 sm:text-base">{description}</p>
          ) : null}
        </div>
      </div>
      {action}
    </div>
  );
}

function Surface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`theme-panel rounded-[28px] border backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <SiteHeader />

      <div className="mx-auto w-full max-w-7xl px-4 pb-28 pt-8 sm:px-6 md:pt-10 lg:px-8">
        <section className="py-12 md:py-16 lg:py-24">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Reveal className="relative mb-8 hero-float" delay={40} distance={18}>
              <div className="theme-hero-glow absolute inset-0 rounded-full blur-2xl" />
              <div className="theme-hero-panel relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 text-3xl font-semibold text-[var(--accent-contrast)] shadow-xl shadow-neutral-950/15">
                LT
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal
                className="theme-panel inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium theme-text-muted shadow-sm"
                delay={80}
                distance={18}
              >
                <SparkIcon className="theme-text-soft h-3.5 w-3.5" />
                Building internal systems used across 100+ branches
              </Reveal>
              <Reveal delay={120} distance={18}>
                <h1 className="theme-text text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                  Leonardo Timkang Jr.
                </h1>
              </Reveal>
              <Reveal delay={200} distance={18}>
                <p className="theme-text-soft text-sm font-medium uppercase tracking-[0.24em]">
                  Metro Manila, Philippines
                </p>
              </Reveal>
              <Reveal delay={260} distance={18}>
                <p className="theme-text-muted mx-auto max-w-3xl text-balance text-base leading-8 md:text-lg">
                  Full Stack Developer \\ Laravel \\ Vue \\ Enterprise Systems
                </p>
              </Reveal>
              <Reveal delay={340} distance={18}>
                <p className="theme-text-muted mx-auto max-w-2xl text-base leading-8">
                  Full-stack developer focused on practical, database-driven business systems, approval workflows,
                  ERP-connected applications, and enterprise software solutions.
                </p>
              </Reveal>
            </div>
            <Reveal className="mt-10 flex w-full flex-wrap items-center justify-center gap-3" delay={420} distance={18}>
              <Button href="mailto:leonardotimkangjr@gmail.com" variant="primary" ariaLabel="Send Leonardo an email">
                <MailIcon className="h-4 w-4" />
                Send Email
              </Button>
              <Button href="https://github.com/locodafux" external ariaLabel="Open Leonardo's GitHub profile">
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/leonardo-timkang-jr-276230257/"
                external
                ariaLabel="Open Leonardo's LinkedIn profile"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button href="/resume.pdf" ariaLabel="Download Leonardo's resume">
                <ArrowUpRightIcon className="h-4 w-4" />
                Download Resume
              </Button>
            </Reveal>
          </div>
        </section>

        <Reveal as="section" id="about" className="py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <Reveal delay={40}>
              <Surface className="p-6 sm:p-8">
                <SectionHeading eyebrow="Profile" title="About" />
                <div className="theme-text-muted mt-6 space-y-5 text-base leading-8">
                  <p>
                    I&apos;m a full-stack developer focused on building practical, database-driven systems that improve
                    business operations. My work centers around Laravel, Vue, PHP, JavaScript, MySQL, IBM DB2, and
                    Infor M3 integrations.
                  </p>
                  <p>
                    I have experience developing internal enterprise systems, approval workflows, customer order
                    tracking, payment monitoring tools, replenishment systems, and operational dashboards. I enjoy
                    turning complex business requirements into clean, reliable, and user-friendly applications.
                  </p>
                  <p>
                    Currently, I work as a Full Stack Developer at CF Outsourcing Philippines Inc., where I started on
                    May 4, 2026.
                  </p>
                </div>
              </Surface>
            </Reveal>

            <Reveal delay={140}>
              <Surface className="relative overflow-hidden p-6 sm:p-8">
                <div className="theme-section-glow absolute inset-0" />
                <div className="theme-gallery-panel relative flex h-full flex-col justify-between gap-10 rounded-[24px] border p-6 theme-border">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="theme-text-soft text-xs font-semibold uppercase tracking-[0.28em]">
                        Enterprise Systems
                      </p>
                      <p className="theme-text mt-3 text-2xl font-semibold tracking-tight">Access Card</p>
                    </div>
                    <div className="theme-panel-muted theme-text-soft rounded-full border px-3 py-1 text-xs">
                      Active
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="theme-text-soft text-sm font-medium uppercase tracking-[0.22em]">
                      Full Stack Developer
                    </p>
                    <div className="space-y-1">
                      <p className="theme-text text-3xl font-semibold tracking-tight">LEONARDO</p>
                      <p className="theme-text-soft text-base">Developer</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-7 gap-1.5">
                      {Array.from({ length: 28 }).map((_, index) => (
                        <span
                          key={index}
                          className={`h-6 rounded-sm ${index % 5 === 0 ? "bg-[var(--accent)]" : "bg-[var(--accent-muted)]"}`}
                        />
                      ))}
                    </div>
                    <div className="theme-text-soft flex items-center justify-between text-xs uppercase tracking-[0.2em]">
                      <span>LT-2026</span>
                      <span>Metro Manila</span>
                    </div>
                  </div>
                </div>
              </Surface>
            </Reveal>
          </div>
        </Reveal>

        <Reveal as="section" id="experience" className="py-12 md:py-16 lg:py-24">
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="A compact timeline of the enterprise systems, tools, and product work shaping Leonardo’s portfolio."
          />
          <Surface className="theme-border mt-8 divide-y overflow-hidden">
            {experienceItems.map((item, index) => (
              <Reveal
                key={`${item.title}-${item.company}`}
                as="article"
                delay={getStaggerDelay(index)}
                className="group grid grid-cols-1 gap-5 p-6 transition duration-200 hover:bg-[var(--surface-muted)] md:grid-cols-[1fr_auto] md:items-start md:p-8"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="theme-text text-lg font-semibold">{item.title}</h3>
                    <p className="theme-text-soft text-sm">{item.company}</p>
                  </div>
                  <ul className="theme-text-muted space-y-2 text-sm leading-7">
                    {item.description.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
                <p className="theme-text-soft text-sm font-medium md:pt-1">{item.meta}</p>
              </Reveal>
            ))}
          </Surface>
        </Reveal>

        <Reveal as="section" id="skills" className="py-12 md:py-16 lg:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="Tech Stack"
            description="A focused toolkit for building internal tools, business-critical workflows, and ERP-connected systems."
            action={
              <Link
                href="#contact"
                className="theme-text-muted inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--foreground)]"
              >
                View All
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techCategories.map((category, index) => (
              <Reveal key={category.title} delay={getStaggerDelay(index)}>
                <Surface className="p-6 transition duration-200 hover:-translate-y-1 hover:bg-[var(--surface-solid)]">
                  <div className="space-y-4">
                    <h3 className="theme-text text-lg font-semibold">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="theme-panel-muted theme-text-muted rounded-full border px-3 py-2 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Surface>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="projects" className="py-12 md:py-16 lg:py-24">
          <SectionHeading
            eyebrow="Selected Work"
            title="Recent Projects"
            description="Recent internal products and workflow systems designed for financial operations, branch activity, and order visibility."
            action={
              <Link
                href="#gallery"
                className="theme-text-muted inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--foreground)]"
              >
                View All
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={getStaggerDelay(index)}>
                <Surface className="group p-6 transition duration-200 hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-lg sm:p-7">
                  <div className="flex h-full flex-col gap-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="theme-text-soft text-xs font-semibold uppercase tracking-[0.24em]">{project.date}</p>
                        <h3 className="theme-text text-xl font-semibold tracking-tight">{project.title}</h3>
                      </div>
                      <span className="theme-accent-muted theme-text-muted rounded-full p-2 transition group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-contrast)]">
                        <ArrowUpRightIcon className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="theme-text-muted text-sm leading-7">{project.description}</p>
                    <ul className="theme-text-muted space-y-2 text-sm leading-7">
                      {project.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="theme-text-soft theme-border rounded-full border px-3 py-1.5 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Surface>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="py-12 md:py-16 lg:py-24">
          <SectionHeading
            eyebrow="Proof"
            title="Achievements"
            description="Operational wins and delivery milestones behind Leonardo’s recent systems work."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.title} delay={getStaggerDelay(index, 85)}>
                <Surface className="p-5 transition duration-200 hover:-translate-y-1 hover:bg-[var(--surface-solid)]">
                  <p className="theme-text text-sm font-semibold">{achievement.title}</p>
                  <p className="theme-text-muted mt-3 text-sm leading-7">{achievement.text}</p>
                </Surface>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="py-12 md:py-16 lg:py-24">
          <SectionHeading
            eyebrow="Highlights"
            title="Professional Highlights"
            description="Recommendation-style cards adapted into first-party statements about Leonardo’s practice and strengths."
          />
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={getStaggerDelay(index, 95)}>
                <Surface className="p-6 sm:p-7">
                  <div className="space-y-4">
                    <p className="text-4xl leading-none text-[var(--line-strong)]">&ldquo;</p>
                    <div className="space-y-3">
                      <h3 className="theme-text text-lg font-semibold">{highlight.title}</h3>
                      <p className="theme-text-muted text-sm leading-7">{highlight.text}</p>
                    </div>
                  </div>
                </Surface>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="py-12 md:py-16 lg:py-24">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Reveal delay={40}>
              <Surface className="p-6 sm:p-8">
                <SectionHeading eyebrow="Network" title="Connect" />
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="theme-text-soft text-sm font-semibold uppercase tracking-[0.24em]">Social Links</h3>
                    <div className="space-y-3">
                      {[
                        {
                          label: "LinkedIn",
                          href: "https://www.linkedin.com/in/leonardo-timkang-jr-276230257/",
                        },
                        { label: "GitHub", href: "https://github.com/locodafux" },
                        { label: "Email", href: "mailto:leonardotimkangjr@gmail.com" },
                      ].map((item, index) => (
                        <Reveal key={item.label} as="div" delay={getStaggerDelay(index, 90)} distance={18}>
                          <Link
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            className="theme-text-muted theme-border flex items-center justify-between rounded-2xl border px-4 py-3 text-sm transition hover:border-[var(--line-strong)] hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                          >
                            {item.label}
                            <ArrowUpRightIcon className="h-4 w-4" />
                          </Link>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="theme-text-soft text-sm font-semibold uppercase tracking-[0.24em]">Available For</h3>
                    <ul className="theme-text-muted space-y-3 text-sm leading-7">
                      <li>Full-stack development</li>
                      <li>Internal business systems</li>
                      <li>ERP-connected tools</li>
                      <li>Backend/frontend improvements</li>
                    </ul>
                  </div>
                </div>
              </Surface>
            </Reveal>

            <Reveal delay={140}>
              <Surface className="p-6 sm:p-8">
                <SectionHeading eyebrow="Open To Work" title="Available for Projects" />
                <p className="theme-text-muted mt-6 max-w-xl text-base leading-8">
                  Available for full-stack development work focused on business systems, internal tools, dashboards,
                  approval workflows, and ERP-connected applications.
                </p>
                <div className="mt-8">
                  <Button href="mailto:leonardotimkangjr@gmail.com" variant="primary" ariaLabel="Get in touch with Leonardo">
                    <MailIcon className="h-4 w-4" />
                    Get in touch
                  </Button>
                </div>
              </Surface>
            </Reveal>
          </div>
        </Reveal>

        <Reveal as="section" id="gallery" className="py-12 md:py-16 lg:py-24">
          <SectionHeading
            eyebrow="Snapshots"
            title="Gallery"
            description="Abstract, interface-inspired mock panels representing the systems, workflows, and dashboards behind Leonardo’s projects."
          />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <Reveal key={item} delay={getStaggerDelay(index, 70)} distance={18}>
                <Surface className="group overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="theme-gallery-panel theme-border aspect-[4/3] rounded-[22px] border p-4 transition duration-300 group-hover:scale-[1.02]">
                    <div className="flex h-full flex-col">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="h-2 w-14 rounded-full bg-[var(--line-strong)]" />
                          <div className="h-2 w-24 rounded-full bg-[var(--line)]" />
                        </div>
                        <div className="flex gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line-strong)]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
                        </div>
                      </div>
                      <div className="grid flex-1 grid-cols-[1.2fr_0.8fr] gap-3">
                        <div className="theme-panel-solid theme-border space-y-3 rounded-2xl border p-3">
                          <div className="theme-gallery-hero h-20 rounded-xl opacity-90" />
                          <div className="space-y-2">
                            <div className="h-2 w-full rounded-full bg-[var(--line)]" />
                            <div className="h-2 w-4/5 rounded-full bg-[var(--line)]" />
                            <div className="h-2 w-3/5 rounded-full bg-[var(--accent-muted)]" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="theme-panel-solid theme-border rounded-2xl border p-3">
                            <div className="flex h-20 items-end gap-2">
                              {[32, 52, 68, 45].map((height, barIndex) => (
                                <span
                                  key={`${item}-${barIndex}`}
                                  className="w-full rounded-t-md bg-[color:color-mix(in_srgb,var(--accent)_80%,transparent)]"
                                  style={{ height }}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="theme-panel-solid theme-border rounded-2xl border p-3">
                            <div className="space-y-2">
                              {Array.from({ length: 3 }).map((_, rowIndex) => (
                                <div key={`${item}-${rowIndex}-row`} className="flex gap-2">
                                  <span className="h-8 w-8 rounded-lg bg-[var(--line)]" />
                                  <span
                                    className={`h-8 rounded-lg ${rowIndex === index % 3 ? "w-20 bg-[color:color-mix(in_srgb,var(--accent)_80%,transparent)]" : "w-16 bg-[var(--line)]"}`}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="theme-text-muted mt-4 text-sm font-medium">{item}</p>
                    </div>
                  </div>
                </Surface>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="contact" className="py-12 md:py-16 lg:py-24">
          <Surface className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="space-y-4">
                <p className="theme-text-soft text-xs font-semibold uppercase tracking-[0.24em]">Contact</p>
                <h2 className="theme-text text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                  Get in touch
                </h2>
                <div className="theme-text-muted space-y-2 text-base leading-8">
                  <p>
                    Email:{" "}
                    <Link
                      href="mailto:leonardotimkangjr@gmail.com"
                      className="theme-text font-medium underline decoration-[var(--line-strong)] underline-offset-4"
                    >
                      leonardotimkangjr@gmail.com
                    </Link>
                  </p>
                  <p>Phone: 09606152206</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="mailto:leonardotimkangjr@gmail.com" variant="primary" ariaLabel="Send Leonardo an email">
                  <MailIcon className="h-4 w-4" />
                  Send Email
                </Button>
                <Button href="https://github.com/locodafux" external ariaLabel="Open Leonardo's GitHub profile">
                  <GitHubIcon className="h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  href="https://www.linkedin.com/in/leonardo-timkang-jr-276230257/"
                  external
                  ariaLabel="Open Leonardo's LinkedIn profile"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </Surface>
        </Reveal>
      </div>

      <footer className="theme-border border-t pb-28">
        <div className="theme-text-soft mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:px-6 md:flex-row lg:px-8">
          <p>© 2026 Leonardo Timkang Jr. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/leonardo-timkang-jr-276230257/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--foreground)]"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/locodafux"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--foreground)]"
            >
              GitHub
            </Link>
            <Link href="mailto:leonardotimkangjr@gmail.com" className="transition hover:text-[var(--foreground)]">
              Email
            </Link>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <Button
          href="mailto:leonardotimkangjr@gmail.com?subject=Portfolio%20Inquiry"
          variant="primary"
          ariaLabel="Chat with Leonardo via email"
        >
          <ChatIcon className="h-4 w-4" />
          Chat with Leonardo
        </Button>
      </div>
    </main>
  );
}
