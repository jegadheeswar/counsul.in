import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe2, Mail, MapPin } from "lucide-react";
import { navLinks, profile } from "@/lib/profile";
import { cn } from "@/lib/utils";
import cloudmasaLogo from "@/assets/cloudmasa-logo.png";

const contactEmail = "sowkathaliabdulkhader@counsul.in";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-border shadow-[0_2px_20px_-12px_rgba(11,45,69,0.25)]"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--navy)] text-[var(--ivory)] font-serif text-lg">
            S
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base md:text-lg text-[var(--navy)] tracking-tight">
              {profile.shortName}
            </span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[var(--slate)]">
              Diplomatic Profile
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  active ? "text-[var(--maroon)]" : "text-[var(--navy)] hover:text-[var(--maroon)]"
                )}
              >
                {l.label}
                <span
                  className={cn(
                    "absolute left-3 right-3 -bottom-0.5 h-[2px] bg-[var(--maroon)] origin-left transition-transform",
                    active ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--maroon)] transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-[var(--navy)] hover:bg-[var(--ivory)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium",
                    active
                      ? "bg-[var(--ivory)] text-[var(--maroon)]"
                      : "text-[var(--navy)] hover:bg-[var(--ivory)]"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--ivory)]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-[var(--navy)]">{profile.name}</h3>
          <div className="gold-divider mt-3" />
          <p className="mt-4 text-sm text-[var(--slate)] max-w-sm">
            {profile.tagline}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--navy)]">
            Navigate
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[var(--slate)] hover:text-[var(--maroon)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--navy)]">
            Office
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-[var(--slate)]">
            <li className="flex items-start gap-2">
              <Globe2 className="h-4 w-4 mt-0.5 text-[var(--maroon)]" />
              Global engagements across Asia, Africa, Europe & the Pacific
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--maroon)]" />
              India - Jakarta - Honolulu
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-[var(--maroon)]" />
              <div className="space-y-1">
                <Link to="/contact" className="block hover:text-[var(--maroon)]">
                  Send a WhatsApp message
                </Link>
                <a href={`mailto:${contactEmail}`} className="block break-all hover:text-[var(--maroon)]">
                  {contactEmail}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4 py-5 text-sm text-[var(--slate)]">
          <p>&copy; {new Date().getFullYear()} Office of H.E. Abdul Khader Sowkath Ali. All rights reserved.</p>
          <a
            href="https://cloudmasa.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[var(--slate)] transition-colors hover:text-[var(--maroon)]"
            aria-label="Built by CloudMaSa"
          >
            <span className="font-medium">Built by</span>
            <img src={cloudmasaLogo} alt="CloudMaSa" className="h-14 w-auto object-contain sm:h-16" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-[var(--ivory)] border-b border-border">
      <div className="container-page py-16 md:py-24 fade-in-up">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--maroon)] font-semibold">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-[var(--navy)]">
          {title}
        </h1>
        <div className="gold-divider mt-5" />
        {description && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[var(--slate)] leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
