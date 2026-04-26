import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-tight">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-5 h-14 transition-all duration-500 ${
            scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] text-[11px] font-bold text-white shadow-[0_4px_16px_-4px_oklch(0.6_0.22_270/0.5)]">
              JA
            </span>
            <span className="hidden sm:inline font-display text-sm font-semibold tracking-tight">
              James Adewara
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Hire me
              <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden mt-2 glass rounded-2xl p-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm rounded-lg hover:bg-accent transition-colors"
                  activeProps={{ className: "bg-accent text-foreground" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center rounded-lg bg-foreground px-3 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Hire me →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
