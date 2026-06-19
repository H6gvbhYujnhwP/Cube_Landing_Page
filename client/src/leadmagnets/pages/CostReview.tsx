import PageShell from "@/leadmagnets/components/PageShell";
import LandingHero from "@/leadmagnets/components/LandingHero";
import LeadForm from "@/leadmagnets/components/LeadForm";
import TrustStrip from "@/leadmagnets/components/TrustStrip";
import AccreditationBanner from "@/leadmagnets/components/AccreditationBanner";
import { TESTIMONIALS } from "@/leadmagnets/lib/testimonials";
import { HERO } from "@/leadmagnets/lib/brand";
import { AlertTriangle, Clock, ShieldOff, TrendingDown, Users, FileWarning } from "lucide-react";

const COSTS = [
  { icon: Clock, title: "Unplanned downtime", text: "Every hour a line or design system is down has a direct, measurable cost to delivery." },
  { icon: ShieldOff, title: "Cyber exposure", text: "Weak security puts contracts, client data and supply-chain approvals at risk." },
  { icon: TrendingDown, title: "Lost productivity", text: "Slow, unreliable systems quietly drain hours from engineers and operators every week." },
  { icon: Users, title: "Stretched people", text: "Without proper IT support, your best people end up firefighting instead of engineering." },
  { icon: FileWarning, title: "Compliance gaps", text: "Missing backups, audit trails and controls can stall tenders and accreditations." },
  { icon: AlertTriangle, title: "Reputation risk", text: "One outage or breach in front of a key client can undo years of trust." },
];

export default function HiddenCost() {
  return (
    <PageShell>
      <LandingHero
        image={HERO.risk}
        eyebrow="Free Guide for Engineering & Manufacturing Leaders"
        title="The hidden cost of weak IT in engineering firms"
        intro="Downtime, cyber gaps and ageing systems rarely show up as a single bill — they leak out across delivery, productivity and client trust. This short guide helps you spot and quantify the real cost before it bites."
        bullets={[
          "A simple framework to estimate what weak IT is really costing you",
          "Written for engineering and manufacturing operations, not generic offices",
          "Free, practical and jargon-free",
        ]}
      >
        <LeadForm resourceName="Hidden Cost of Weak IT Guide" ctaLabel="Send me the guide" />
      </LandingHero>

      <AccreditationBanner />

      <TrustStrip testimonials={[TESTIMONIALS[9], TESTIMONIALS[4], TESTIMONIALS[0]]} />

      <section className="container py-16 lg:py-20">
        <p className="eyebrow">Where the cost hides</p>
        <h2 className="mt-4 max-w-2xl font-display text-[30px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[36px]">
          Six places weak IT quietly drains your business.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COSTS.map((c) => (
            <div key={c.title} className="rounded-lg border border-[#e3e8ee] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#ff6b00]/12">
                <c.icon className="h-5 w-5 text-[#ff6b00]" />
              </div>
              <h3 className="mt-4 font-display text-[17px] font-bold text-[#0d1b2a]">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5a6b80]">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="overflow-hidden rounded-lg border border-[#e3e8ee] shadow-sm">
            <img src={HERO.risk} alt="Server infrastructure" className="h-72 w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">Why it&apos;s worth knowing</p>
            <h2 className="mt-4 font-display text-[28px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[34px]">
              You can&apos;t fix what you haven&apos;t measured.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#44546a]">
              Once you can put a number on downtime, lost hours and risk, the case for modernising
              becomes obvious — and far easier to justify internally. The guide gives you a simple,
              defensible way to do exactly that.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-20">
        <div className="rounded-xl bg-[#0d1b2a] p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl font-display text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
            Download the hidden cost guide
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#aebccd]">
            Understand what weak IT is really costing your firm — then decide what&apos;s worth fixing first.
          </p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-[#3fa90f] px-7 py-3.5 text-[14px] font-semibold text-white transition-transform active:scale-[0.98]"
          >
            Send me the guide
          </a>
        </div>
      </section>
    </PageShell>
  );
}
