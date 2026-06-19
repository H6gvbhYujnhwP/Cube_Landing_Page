import PageShell from "@/leadmagnets/components/PageShell";
import LandingHero from "@/leadmagnets/components/LandingHero";
import LeadForm from "@/leadmagnets/components/LeadForm";
import TrustStrip from "@/leadmagnets/components/TrustStrip";
import AccreditationBanner from "@/leadmagnets/components/AccreditationBanner";
import { TESTIMONIALS } from "@/leadmagnets/lib/testimonials";
import { HERO } from "@/leadmagnets/lib/brand";
import { ShieldCheck, Server, HardDriveDownload, Lock, Activity, CheckCircle2 } from "lucide-react";

const CHECKS = [
  { icon: ShieldCheck, title: "Cyber security posture", text: "Where you stand against the most common threats facing engineering firms today." },
  { icon: Server, title: "Infrastructure health", text: "How resilient your servers, network and core systems really are." },
  { icon: HardDriveDownload, title: "Backup & recovery", text: "Whether your backups would actually get you running again after an incident." },
  { icon: Lock, title: "Access & data control", text: "Who can reach what — and whether sensitive client and design data is protected." },
  { icon: Activity, title: "Performance & reliability", text: "Where slow, ageing systems are quietly costing you time every day." },
];

const OUTCOMES = [
  "A clear, RAG-rated snapshot of your IT and cyber health",
  "The three issues most worth fixing first",
  "Plain-English findings — no scare tactics, no jargon",
  "A short, no-obligation review of the results",
];

export default function FundingReadiness() {
  return (
    <PageShell>
      <LandingHero
        image={HERO.funding}
        eyebrow="Free Health Check for Engineering & Manufacturing Firms"
        title="How healthy is your engineering firm's IT and cyber security?"
        intro="A fast, no-cost health check that scores your infrastructure, cyber security, backups and reliability — and shows you exactly where the biggest risks and quick wins are."
        bullets={[
          "Built for engineering, manufacturing and aerospace operations",
          "Takes minutes to request — clear results, not a sales pitch",
          "Completely free, with no obligation",
        ]}
      >
        <LeadForm resourceName="Free IT & Cyber Health Check" ctaLabel="Request my health check" />
      </LandingHero>

      <AccreditationBanner />

      <TrustStrip testimonials={[TESTIMONIALS[1], TESTIMONIALS[6], TESTIMONIALS[4]]} />

      <section className="container py-16 lg:py-20">
        <p className="eyebrow">What we check</p>
        <h2 className="mt-4 max-w-2xl font-display text-[30px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[36px]">
          Five areas that decide whether your IT helps or holds you back.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHECKS.map((c, i) => (
            <div key={c.title} className="rounded-lg border border-[#e3e8ee] bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#3fa90f]/12">
                <c.icon className="h-5 w-5 text-[#2f8f12]" />
              </div>
              <p className="mt-4 font-condensed text-[13px] font-medium uppercase tracking-wider text-[#ff6b00]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-[17px] font-bold text-[#0d1b2a]">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5a6b80]">{c.text}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center rounded-lg border border-[#3fa90f]/30 bg-[#3fa90f]/8 p-6">
            <p className="font-display text-[17px] font-bold text-[#0d1b2a]">Then: a short results review</p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#44546a]">
              We walk you through the findings and the few changes that would make the biggest difference.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">What you get back</p>
            <h2 className="mt-4 font-display text-[28px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[34px]">
              A clear, honest picture — and a sensible place to start.
            </h2>
            <ul className="mt-7 space-y-3">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-[15px] text-[#33445a]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3fa90f]" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#e3e8ee] shadow-sm">
            <img src={HERO.funding} alt="Engineering IT environment" className="h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-20">
        <div className="rounded-xl bg-[#0d1b2a] p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl font-display text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
            Request your free IT &amp; cyber health check
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#aebccd]">
            Find out exactly where your firm stands — and what&apos;s worth fixing first — with no cost and no obligation.
          </p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-[#3fa90f] px-7 py-3.5 text-[14px] font-semibold text-white transition-transform active:scale-[0.98]"
          >
            Request my health check
          </a>
        </div>
      </section>
    </PageShell>
  );
}
