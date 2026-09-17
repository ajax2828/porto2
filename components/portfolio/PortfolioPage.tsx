"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import {
  achievements,
  articles,
  experiences,
  profile,
  projects,
  skills,
  tools,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const navItems = [
  ["Karya", "#karya"],
  ["Tentang", "#tentang"],
  ["Pengalaman", "#pengalaman"],
  ["Tulisan", "#tulisan"],
  ["Kontak", "#kontak"],
] as const;

const accentStyles = {
  blue: "bg-brand-blue-soft text-brand-blue",
  yellow: "bg-brand-yellow-soft text-brand-yellow-ink",
  purple: "bg-brand-purple-soft text-brand-purple",
  green: "bg-brand-green-soft text-brand-green",
  pink: "bg-brand-pink-soft text-brand-pink",
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 font-display text-sm font-semibold text-primary">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-[22px] border border-surface-line bg-background/90 px-4 py-3 shadow-nav backdrop-blur-xl md:px-5">
        <a href="#beranda" className="flex items-center gap-3" aria-label="Kembali ke beranda">
          <span className="grid size-10 place-items-center rounded-[14px] bg-primary font-display text-sm font-bold text-primary-foreground">
            MI
          </span>
          <span className="hidden font-display text-sm font-semibold text-foreground sm:block">
            Muhammad Ihsanzaki
          </span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button asChild variant="tonal" size="sm" className="hidden md:inline-flex">
            <a href="#kontak">
              <Mail />
              Mari bicara
            </a>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="mx-auto mt-2 grid max-w-6xl gap-1 rounded-[22px] border border-surface-line bg-background p-3 shadow-elevated md:hidden">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-[14px] px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pb-14 pt-28 md:px-8 md:pb-20"
    >
      <div className="mesh-bg absolute inset-0 -z-10" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-green-soft px-4 py-2 text-sm font-semibold text-brand-green">
            <span className="size-2 rounded-full bg-brand-green pulse-dot" />
            {profile.availability}
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Halo, saya <span className="text-primary">Ihsan.</span>
            <br />
            Software Engineer yang membangun ide jadi nyata.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a href="#karya">
                Lihat karya saya <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#kontak">
                Hubungi saya <ArrowUpRight />
              </a>
            </Button>
          </div>
          <p className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {profile.location}
          </p>
        </Reveal>
        <Reveal className="relative mx-auto w-full max-w-[500px]">
          <div className="creative-canvas relative aspect-square overflow-hidden rounded-[40px] border border-surface-line shadow-float">
            <div className="shape shape-blue" />
            <div className="shape shape-yellow" />
            <div className="shape shape-pink" />
            <div className="shape shape-green" />
            <div className="absolute inset-[19%] grid place-items-center rounded-full bg-background/85 shadow-elevated backdrop-blur-md">
              <div className="text-center">
                <Sparkles className="mx-auto size-9 text-brand-purple" />
                <p className="mt-3 font-display text-xl font-semibold text-foreground">
                  Code × Design × AI
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Curious by default.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="section-pad bg-section-soft">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Tentang saya"
            title="Empati di depan. Detail di setiap sudut."
            description="Saya percaya produk terbaik lahir saat rasa ingin tahu, ketelitian, dan kolaborasi bertemu."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="surface-card p-6 md:p-8 lg:col-span-2">
            <div className="grid gap-7 sm:grid-cols-[auto_1fr] sm:items-center">
              <div className="avatar-art grid size-28 place-items-center rounded-full font-display text-3xl font-bold text-primary-foreground shadow-elevated md:size-36">
                MI
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold">Membangun dengan tujuan.</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{profile.bio}</p>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="surface-card bg-primary p-6 text-primary-foreground md:p-8">
            <p className="font-display text-sm font-semibold opacity-75">Dalam angka</p>
            <div className="mt-7 grid gap-7">
              {achievements.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-4xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm opacity-75">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="surface-card p-6 md:p-8 lg:col-span-3">
            <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-center">
              <div>
                <p className="font-display text-sm font-semibold text-primary">Toolkit favorit</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Dari sketsa hingga produk jadi.
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {tools.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-[18px] bg-secondary p-4"
                  >
                    <Icon className="size-5 text-primary" />
                    <span className="text-sm font-semibold">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="karya" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Karya pilihan"
            title="Produk yang bergerak dari ide ke dampak."
            description="Beberapa proyek pilihan yang mempertemukan strategi, desain, dan teknologi."
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Reveal
                key={project.title}
                className={cn(
                  "project-card group",
                  index === 0 && "md:col-span-2 md:grid md:grid-cols-[.9fr_1.1fr]",
                )}
              >
                <div
                  className={cn(
                    "project-visual min-h-64",
                    accentStyles[project.accent as keyof typeof accentStyles],
                  )}
                >
                  <div className="project-grid" />
                  <Icon className="relative size-20 stroke-[1.25] md:size-24" />
                  <span className="relative mt-5 rounded-full bg-background/80 px-4 py-2 text-sm font-bold text-foreground shadow-soft backdrop-blur">
                    {project.metric}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold text-primary">{project.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-2">
                    <Button variant="ghost" size="sm">
                      Studi kasus <ArrowUpRight />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label={`Repositori ${project.title}`}>
                      <Github />
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="pengalaman" className="section-pad bg-section-soft">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Perjalanan"
            title="Belajar, memimpin, lalu belajar lagi."
            description="Pengalaman lintas disiplin yang membentuk cara saya bekerja hari ini."
          />
        </Reveal>
        <div className="relative ml-3 border-l-2 border-brand-blue-soft pl-8 md:ml-5 md:pl-12">
          {experiences.map((item, index) => (
            <Reveal key={item.company} className="relative pb-7 last:pb-0">
              <span
                className={cn(
                  "absolute -left-[43px] top-7 size-5 rounded-full border-4 border-section-soft md:-left-[59px]",
                  index === 0 ? "bg-primary" : "bg-brand-purple",
                )}
              />
              <div className="surface-card grid gap-4 p-6 md:grid-cols-[180px_1fr] md:p-8">
                <p className="text-sm font-semibold text-primary">{item.period}</p>
                <div>
                  <h3 className="font-display text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">{item.company}</p>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="tulisan" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Catatan"
            title="Hal yang saya pelajari di sepanjang jalan."
            description="Tulisan tentang desain produk, sistem, teknologi, dan proses kreatif."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Reveal key={article.title} className="article-card group">
              <div
                className={cn("h-2", accentStyles[article.accent as keyof typeof accentStyles])}
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase text-muted-foreground">{article.date}</p>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Baca artikel{" "}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <section id="kontak" className="section-pad bg-contact text-contact-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <p className="font-display text-sm font-semibold text-contact-accent">
            Mari berkolaborasi
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Punya ide bagus? Mari kita wujudkan.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-contact-muted">
            Saya terbuka untuk proyek produk digital, sistem desain, dan eksperimen AI yang
            bermakna.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 font-semibold text-contact-foreground"
          >
            <Mail className="size-5" />
            {profile.email}
          </a>
          <div className="mt-8 flex gap-3">
            <Button variant="contactIcon" size="iconLg" aria-label="LinkedIn">
              <Linkedin />
            </Button>
            <Button variant="contactIcon" size="iconLg" aria-label="GitHub">
              <Github />
            </Button>
            <Button variant="contactIcon" size="iconLg" aria-label="X / Twitter">
              𝕏
            </Button>
          </div>
        </Reveal>
        <Reveal>
          <form
            onSubmit={submit}
            className="rounded-[28px] bg-background p-6 text-foreground shadow-float md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="field-label">
                Nama
                <input required name="name" className="material-input" placeholder="Nama Anda" />
              </label>
              <label className="field-label">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  className="material-input"
                  placeholder="anda@email.com"
                />
              </label>
            </div>
            <label className="field-label mt-5">
              Pesan
              <textarea
                required
                name="message"
                rows={5}
                className="material-input resize-none"
                placeholder="Ceritakan sedikit tentang ide Anda…"
              />
            </label>
            <Button type="submit" variant="hero" size="xl" className="mt-6 w-full sm:w-auto">
              {sent ? (
                <>
                  <Check /> Pesan siap dikirim
                </>
              ) : (
                <>
                  Kirim pesan <Send />
                </>
              )}
            </Button>
            {sent && (
              <p className="mt-4 text-sm text-brand-green" role="status">
                Terima kasih! Ini adalah formulir demo—hubungkan layanan email untuk menerima pesan.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <footer className="border-t border-contact-line bg-contact px-5 py-7 text-contact-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Muhammad Ihsanzaki. Dibuat dengan rasa ingin tahu.</p>
          <p className="font-semibold text-contact-accent">Think it. Make it. Share it.</p>
        </div>
      </footer>
    </div>
  );
}
