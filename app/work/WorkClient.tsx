"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";



const projects = [
  {
    name: "Ventunna Bespoke Fashion",
    tag: "UK Client",
    summary:
      "Full e-commerce platform for a UK fashion brand. Custom product configurator, secure checkout, and an admin dashboard for inventory and orders.",
    role: "Fullstack engineer · Sole developer",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Stripe", "Supabase Storage", "AWS"],
    highlights: [
      "Designed data model and REST API from scratch",
      "Implemented Stripe payments with order lifecycle webhooks",
      "Built admin tools for catalog, inventory, and fulfilment",
      "Deployed to AWS with CI/CD via GitHub Actions",
    ],
    href: "https://ventunnabespokefashion.com",
    accent: "from-[oklch(0.7_0.18_250)] to-[oklch(0.65_0.22_310)]",
  },
  {
    name: "Dwyzmax Electronics",
    tag: "Live Store",
    summary:
      "Full-stack electronics store for a Nigerian retailer. Catalog, cart, checkout, and a Django admin powering day-to-day operations.",
    role: "Fullstack engineer · Sole developer",
    stack: ["Django", "Next.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    highlights: [
      "Django backend with custom admin for product management",
      "Next.js storefront with optimised product pages",
      "Cart, checkout and order tracking flows",
      "Containerised deployment with Docker",
    ],
    href: "https://dwyzmax.com",
    accent: "from-[oklch(0.72_0.18_155)] to-[oklch(0.7_0.18_250)]",
  },
];

function WorkClient() {
  return (
    <section className="container-tight py-12 md:py-20">
      <SectionHeading
        eyebrow="Selected work"
        title={<>Real products. <span className="text-gradient">Shipped end-to-end.</span></>}
        description="Each project below was designed, built, deployed and maintained by one person — me. From data model to pixel."
      />

      <div className="mt-14 space-y-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-premium group relative block overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div
              className={`absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-3xl transition-opacity group-hover:opacity-40`}
            />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border bg-surface-elevated/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {new URL(p.href).hostname}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-base text-muted-foreground max-w-2xl text-pretty">
                  {p.summary}
                </p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground/80">
                  {p.role}
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-foreground/90"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[image:var(--gradient-brand)]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-elevated/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:self-start">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface/60 px-4 py-2 text-sm font-medium backdrop-blur transition-colors group-hover:bg-accent">
                  Visit live site
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default WorkClient;