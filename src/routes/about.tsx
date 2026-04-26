import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Languages, Briefcase, Rocket } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — James Adewara" },
      {
        name: "description",
        content:
          "Computer Science student at the University of Ilorin. C1 Advanced English. Currently interning at Access Bank. Building real products for real clients since 2024.",
      },
      { property: "og:title", content: "About — James Adewara" },
      {
        property: "og:description",
        content:
          "Fullstack developer building real products for real clients since 2024. CS at University of Ilorin, intern at Access Bank.",
      },
    ],
  }),
  component: AboutPage,
});

const facts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Science · University of Ilorin",
  },
  {
    icon: Languages,
    label: "English",
    value: "C1 Advanced — certified",
  },
  {
    icon: Briefcase,
    label: "Currently",
    value: "Interning at Access Bank",
  },
  {
    icon: Rocket,
    label: "Shipping since",
    value: "2024 · Real clients, real products",
  },
];

function AboutPage() {
  return (
    <section className="container-tight py-12 md:py-20">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            Hi, I'm James. <br />
            <span className="text-gradient">I ship products.</span>
          </>
        }
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/90"
        >
          <p>
            I'm a fullstack developer focused on one thing: turning early-stage ideas into
            live, paying products. I work across the whole stack so founders don't have to
            stitch together three contractors and a project manager.
          </p>
          <p>
            I'm currently studying Computer Science at the University of Ilorin and
            interning at <span className="text-foreground">Access Bank</span>, where I work
            inside real engineering processes on production systems.
          </p>
          <p>
            On the side — and weekends, and nights — I build commercial products for
            clients in the UK and Nigeria. From a UK fashion brand's e-commerce platform to
            a Nigerian electronics store, I handle frontend, backend, and cloud
            infrastructure as a single point of contact.
          </p>
          <p>
            I'm <span className="text-foreground">C1 Advanced English certified</span>, so
            communication never becomes the bottleneck. You'll get clear updates, weekly
            demos, and shipped code — not status meetings.
          </p>

          <div className="pt-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Work with me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card-premium rounded-2xl p-6 h-fit"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Quick facts
          </p>
          <ul className="mt-5 space-y-4">
            {facts.map((f) => (
              <li key={f.label} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-elevated">
                  <f.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </p>
                  <p className="text-sm text-foreground">{f.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
