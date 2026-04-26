"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  Twitter,
  Check,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name must be under 80 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(160, "Email must be under 160 characters"),
  company: z
    .string()
    .trim()
    .max(120, "Company must be under 120 characters")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "A bit more detail helps (min 10 chars)")
    .max(2000, "Message must be under 2000 characters"),
});

type ContactInput = z.infer<typeof contactSchema>;

interface ContactHrefs {

  email: string;
  workEmail: string;
  linkedin: string;
  twitter: string;
  github: string;
}

export default function ContactClient({ contactHrefs }: { contactHrefs: ContactHrefs }) {
  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: contactHrefs.email,
      href: `mailto:${contactHrefs.email}`,
    },
    {
      icon: Mail,
      label: "Work email",
      value: contactHrefs.workEmail,
      href: `mailto:${contactHrefs.workEmail}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "James Adewara",
      href: contactHrefs.linkedin,
    },
    {
      icon: Twitter,
      label: "Twitter / X",
      value: "@jamesadewaradev",
      href: contactHrefs.twitter,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@jamesadewara",
      href: contactHrefs.github,
    },
  ];
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        let errorMessage = "Failed to send message";
        if (contentType?.includes("application/json")) {
          const errorData = await response.json();
          errorMessage = errorData.error ?? errorMessage;
        }
        throw new Error(errorMessage);
      }

      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="container-tight py-12 md:py-20">
      <SectionHeading
        eyebrow="Get in touch"
        title={
          <>
            Let&apos;s build <span className="text-gradient">something real.</span>
          </>
        }
        description="Currently available for MVP projects and freelance engagements. Tell me what you're building and I'll get back within 24 hours."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="card-premium rounded-2xl p-6 md:p-8 space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" error={errors.name?.message}>
              <input
                {...register("name")}
                type="text"
                autoComplete="name"
                placeholder="Jane Founder"
                maxLength={80}
                className="input-base"
              />
            </Field>

            <Field label="Email" error={errors.email?.message}>
              <input
                {...register("email")}
                type="email"
                autoComplete="email"
                placeholder="jane@startup.com"
                maxLength={160}
                className="input-base"
              />
            </Field>
          </div>

          <Field label="Company (optional)" error={errors.company?.message}>
            <input
              {...register("company")}
              type="text"
              autoComplete="organization"
              placeholder="Your startup"
              maxLength={120}
              className="input-base"
            />
          </Field>

          <Field label="Project details" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={6}
              placeholder="What are you building? Timeline, budget, anything important…"
              maxLength={2000}
              className="input-base resize-none"
            />
          </Field>

          {submitError && (
            <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {submitError}
            </div>
          )}

          <div className="flex items-center justify-between gap-3 pt-1">
            <p className="text-xs text-muted-foreground">
              I usually reply within{" "}
              <span className="text-foreground">24 hours</span>.
            </p>
            <button
              type="submit"
              disabled={isSubmitting || sent}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : sent ? (
                <>
                  <Check className="h-4 w-4" />
                  Sent!
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>

        {/* CHANNELS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-premium group flex items-center gap-4 rounded-2xl p-4"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated">
                <c.icon className="h-4 w-4" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </p>
                <p className="text-sm text-foreground truncate">{c.value}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Reusable input styles */}
      <style>{`
        .input-base {
          width: 100%;
          background: oklch(0.18 0.014 265 / 0.6);
          border: 1px solid var(--color-border);
          border-radius: 0.625rem;
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          transition: border-color 200ms, box-shadow 200ms, background 200ms;
          font-family: inherit;
        }
        .input-base::placeholder {
          color: var(--color-muted-foreground);
        }
        .input-base:focus {
          outline: none;
          border-color: var(--color-border-strong);
          background: oklch(0.2 0.016 265 / 0.85);
          box-shadow: 0 0 0 3px oklch(0.7 0.2 260 / 0.18);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-[oklch(0.72_0.18_25)]">{error}</span>
      )}
    </label>
  );
}
