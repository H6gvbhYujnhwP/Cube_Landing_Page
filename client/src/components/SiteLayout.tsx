/*
  Design note: Precision Blueprint Modernism.
  This layout should feel engineered, calm, and premium, with strong edge alignment,
  restrained surfaces, and discreet blueprint-style detailing rather than generic SaaS chrome.
*/
import { siteContent } from "@/lib/siteContent";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const [location] = useLocation();
  const isActive = location === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group relative text-sm font-medium tracking-[0.16em] uppercase transition-colors duration-300",
        isActive ? "text-white" : "text-slate-300 hover:text-white",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-2 left-0 h-px bg-cyan-300 transition-all duration-300",
          isActive ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}

export function SiteLayout({
  children,
  eyebrow,
  title,
  intro,
}: {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#05101c_0%,#081626_18%,#091a29_42%,#f3f6f8_42.1%,#f3f6f8_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(125,211,252,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(148,163,184,0.12),transparent_22%)]" />

      <header className="relative z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-5">
          <Link href="/" className="max-w-[16rem]">
            <span className="block text-[0.7rem] uppercase tracking-[0.38em] text-cyan-200/80">Specialist IT for Engineering SMEs</span>
            <span className="mt-1 block text-xl font-semibold tracking-[0.08em] text-white">{siteContent.brand}</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {siteContent.nav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact#enquiry-form">
              <Button className="h-11 rounded-none border border-cyan-300/40 bg-cyan-300/10 px-5 text-[0.72rem] uppercase tracking-[0.22em] text-white hover:bg-cyan-300/20">
                {siteContent.primaryCta}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center border border-white/15 bg-white/5 p-3 text-white transition hover:bg-white/10 lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Menu className="size-5" />
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
            <div className="container flex flex-col gap-6 py-6">
              {siteContent.nav.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setMobileOpen(false)} />
              ))}
              <Link href="/contact#enquiry-form" className="w-full" onClick={() => setMobileOpen(false)}>
                <Button className="h-11 w-full rounded-none border border-cyan-300/40 bg-cyan-300/10 text-[0.72rem] uppercase tracking-[0.22em] text-white hover:bg-cyan-300/20">
                  {siteContent.primaryCta}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      {(eyebrow || title || intro) && (
        <section className="relative z-10 border-b border-white/8 bg-transparent">
          <div className="container py-16 lg:py-20">
            {eyebrow ? (
              <p className="mb-4 text-[0.72rem] uppercase tracking-[0.34em] text-cyan-200/80">{eyebrow}</p>
            ) : null}
            {title ? <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h1> : null}
            {intro ? <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{intro}</p> : null}
          </div>
        </section>
      )}

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 mt-24 border-t border-slate-900/10 bg-slate-950 text-slate-300">
        <div className="container grid gap-12 py-14 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <div className="max-w-xl">
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-cyan-200/70">Engineer Solutions</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Specialist IT for firms where operational reliability, security, resilience, and continuity matter.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Engineer Solutions is a marketing website for Cube 6 IT.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white">Navigation</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              {siteContent.nav.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white">Contact</h2>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <p className="text-slate-300">{siteContent.email}</p>
              <p>
                <Link href="/contact#enquiry-form" className="transition-colors text-white underline decoration-cyan-300/50 underline-offset-4 hover:text-cyan-100">
                  Use the contact form
                </Link>
              </p>
              <p>{siteContent.domain}</p>
              <p>Built for UK engineering and aerospace SMEs.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
