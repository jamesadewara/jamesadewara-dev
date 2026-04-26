"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

const services = [
  {
    icon: Layers,
    title: "Build MVPs",
    description:
      "Production-grade web apps from scratch. React / Next.js on the frontend, FastAPI on the backend, PostgreSQL for data.",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
  },
  {
    icon: Cloud,
    title: "Deploy to Cloud",
    description:
      "AWS infrastructure with proper CI/CD pipelines, environment isolation, and monitoring. Production-ready from day one.",
    tags: ["AWS", "Docker", "GitHub Actions"],
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description:
      "One developer who handles everything end-to-end. No coordination overhead, no handoff bugs, no agency markup.",
    tags: ["Solo dev", "Weekly demos", "No fluff"],
  },
];

const caseStudies = [
  {
    name: "Ventunna Bespoke Fashion",
    tag: "UK Client",
    description:
      "Full e-commerce platform for a UK fashion brand. Built with Next.js, FastAPI, Stripe payments, and Supabase storage. From product catalog to checkout.",
    stack: ["Next.js", "FastAPI", "Stripe", "Supabase"],
    href: "https://ventunnabespokefashion.com",
    accent: "from-[oklch(0.7_0.18_250)] to-[oklch(0.65_0.22_310)]",
  },
  {
    name: "Dwyzmax Electronics",
    tag: "Live Store",
    description:
      "Full-stack electronics store for a Nigerian retailer. Django backend with admin product management, Next.js storefront, cart and checkout flow.",
    stack: ["Django", "Next.js", "PostgreSQL", "Tailwind"],
    href: "https://dwyzmax.com",
    accent: "from-[oklch(0.72_0.18_155)] to-[oklch(0.7_0.18_250)]",
  },
];

const stack = [
  "React",
  "Next.js",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Supabase",
  "Docker",
  "GitHub Actions",
  "Tailwind CSS",
  "Cloudflare",
  "Netlify",
  "Render",
  "Terraform",
  "Ansible",
];

export default function HomeClient({ contactHrefs }: { contactHrefs: { phone: string } }) {
  return (
    <>
      {/* HERO */}
      <section className="container-tight relative pt-10 md:pt-20 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--success)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
            </span>
            Available for new MVP projects

          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-center font-display text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.03em] leading-[1.02] text-balance"
        >
          I Build &amp; Ship{" "}
          <span className="text-gradient-brand stroke-text">Full-Stack Products</span>
          <br className="hidden md:block" /> for Founders.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-muted-foreground text-pretty"
        >
          From idea to deployed product — frontend, backend, and cloud. One developer,
          faster and cheaper than hiring a team or agency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-6 py-3 text-sm font-medium hover:bg-accent transition-colors backdrop-blur"
          >
            Let&apos;s talk
            <Sparkles className="h-4 w-4 text-[oklch(0.78_0.16_280)]" />
          </Link>
        </motion.div>

        {/* Floating product mock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-4xl"
        >
          <div className="absolute inset-x-10 -top-8 h-40 rounded-full bg-[image:var(--gradient-brand)] opacity-30 blur-3xl" />
          <div className="relative card-premium rounded-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.2_25)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.18_155)]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                ~/ship.sh
              </span>
            </div>
            <div className="p-6 md:p-8 font-mono text-xs md:text-sm leading-relaxed">
              <p className="text-muted-foreground">$ idea → product</p>
              <p className="mt-2">
                <span className="text-[oklch(0.78_0.16_280)]">→</span>{" "}
                <span className="text-foreground">Designing data model</span>{" "}
                <span className="text-muted-foreground">…done</span>
              </p>
              <p>
                <span className="text-[oklch(0.78_0.16_280)]">→</span>{" "}
                <span className="text-foreground">Building API (FastAPI)</span>{" "}
                <span className="text-muted-foreground">…done</span>
              </p>
              <p>
                <span className="text-[oklch(0.78_0.16_280)]">→</span>{" "}
                <span className="text-foreground">Crafting UI (Next.js)</span>{" "}
                <span className="text-muted-foreground">…done</span>
              </p>
              <p>
                <span className="text-[oklch(0.78_0.16_280)]">→</span>{" "}
                <span className="text-foreground">Deploying to AWS</span>{" "}
                <span className="text-muted-foreground">…done</span>
              </p>
              <p className="mt-3">
                <span className="text-[var(--success)]">✓</span>{" "}
                <span className="text-foreground">Live in production</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHAT I DO */}
      <section className="container-tight py-24 md:py-32">
        <SectionHeading
          eyebrow="What I do"
          title={<>One developer, <span className="text-gradient">end-to-end.</span></>}
          description="No handoffs between designer, frontend, backend, and DevOps. I do all four — properly."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-6 group"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-foreground transition-colors group-hover:border-border-strong">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface-elevated/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container-tight py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Shipped. <span className="text-gradient">In production.</span></>}
            description="Real products, real customers, real revenue. Not side projects."
          />
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <motion.a
              key={cs.name}
              href={cs.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium group relative rounded-2xl p-7 block overflow-hidden"
            >
              <div
                className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${cs.accent} opacity-25 blur-3xl transition-opacity group-hover:opacity-40`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-border bg-surface-elevated/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {cs.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                  {cs.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {cs.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cs.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-elevated/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="container-tight py-24 md:py-32">
        <SectionHeading
          eyebrow="Tech stack"
          title={<>The tools <span className="text-gradient">I ship with.</span></>}
          description="Battle-tested, modern, and boring where it matters. Boring infrastructure means more time on your product."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5"
        >
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground/90 backdrop-blur transition-all hover:border-border-strong hover:bg-surface-elevated cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* HIRE ME CTA */}
      <section className="container-tight py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border-strong p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.02 265 / 0.9) 0%, oklch(0.18 0.014 265 / 0.6) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Currently available
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight text-balance">
              You have the idea. <br className="hidden sm:block" />
              <span className="text-gradient-brand">I&apos;ll build and ship it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground text-pretty">
              Open for MVP projects and freelance engagements. Let&apos;s talk about what
              you&apos;re building.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${contactHrefs.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-6 py-3 text-sm font-medium hover:bg-accent transition-colors"
              >
                Message on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
