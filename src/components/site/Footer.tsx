"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

interface FooterProps {
  contactHrefs: {
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export function Footer({ contactHrefs }: FooterProps) {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="container-tight py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-1 ring-border-strong">
                <Image
                  src="/favicon.ico"
                  alt="James Adewara"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-display font-semibold tracking-tight">James Adewara</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Fullstack developer shipping production-ready products for early-stage founders.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-foreground text-muted-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-foreground text-muted-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground text-muted-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground text-muted-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`mailto:${contactHrefs.email}`}
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={contactHrefs.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={contactHrefs.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={contactHrefs.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Based in Nigeria · Working worldwide
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} James Adewara. All rights reserved.</p>
          <p className="font-mono">built &amp; shipped — solo.</p>
        </div>
      </div>
    </footer>
  );
}
