import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="container-tight py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-1 ring-border-strong">
                <img src={profileImg} alt="James Adewara" className="h-full w-full object-cover" />
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
                <Link to="/" className="hover:text-foreground text-muted-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-foreground text-muted-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground text-muted-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground text-muted-foreground transition-colors">
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
                href="mailto:jamesadewara1@gmail.com"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/jamesadewara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/james-adewara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border-strong hover:bg-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/jamesadewaradev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
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
          <p className="font-mono">built & shipped — solo.</p>
        </div>
      </div>
    </footer>
  );
}
