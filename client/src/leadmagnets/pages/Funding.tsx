import PageShell from "@/leadmagnets/components/PageShell";
import LandingHero from "@/leadmagnets/components/LandingHero";
import LeadForm from "@/leadmagnets/components/LeadForm";
import TrustStrip from "@/leadmagnets/components/TrustStrip";
import AccreditationBanner from "@/leadmagnets/components/AccreditationBanner";
import { TESTIMONIALS } from "@/leadmagnets/lib/testimonials";
import { HERO } from "@/leadmagnets/lib/brand";
import { Server, ShieldCheck, Cloud, Workflow, BarChart3, PhoneCall } from "lucide-react";

const AREAS = [
  { icon: Server, title: "IT Infrastructure", text: "Ageing servers, unreliable systems, weak backups and poor resilience." },
  { icon: ShieldCheck, title: "Cyber Security", text: "Security gaps that affect client trust, continuity and supply-chain confidence." },
  { icon: Cloud, title: "Cloud & Migration", text: "Modernising systems without unnecessary disruption to day-to-day operations." },
  { icon: Workflow, title: "ERP, MRP & Workflow", text: "Replacing spreadsheets and disconnected processes with reliable digital workflows." },
  { icon: BarChart3, title: "Dashboards & Automation", text: "Improving visibility, productivity and operational decision-making." },
  { icon: PhoneCall, title: "20-minute readiness call", text: "A practical follow-up to see what could be improved — and how to fund it." },
];

export default function Home() {
  return (
    <PageShell>
      <LandingHero
        image={HERO.funding}
        eyebrow="Free Checklist for Engineering & Manufacturing Firms"
        title="Could your engineering firm use funding to modernise its IT?"
        intro="A practical readiness checklist for IT, cyber, cloud and digital workflow upgrades. Find out in minutes whether your firm may be ready for a funded technology improvement project."
        bullets={[
          "Built specifically for engineering, manufacturing and aerospace SMEs",
          "Takes under 10 minutes to complete",
          "No cost, no obligation — just a clear picture of where you stand",
        ]}
      >
        <LeadForm resourceName="Engineering IT Funding Readiness Checklist" ctaLabel="Send me the checklist" />
      </LandingHero>

      <AccreditationBanner />

      <TrustStrip testimonials={[TESTIMONIALS[3], TESTIMONIALS[0], TESTIMONIALS[7]]} />

      {/* Why it matters */}
      <section className="container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why it matters</p>
            <h2 className="mt-4 font-display text-[30px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[36px]">
              Most firms know their systems need work. Few know where to start.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#44546a]">
              Cost concerns, fear of disruption and limited internal IT resource keep good engineering
              businesses on ageing servers and disconnected spreadsheets for years. This checklist gives
              you a clear, honest baseline — and shows whether funding routes may help you act sooner.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#e3e8ee] shadow-sm">
            <img src={HERO.map} alt="Engineering systems planning" className="h-72 w-full object-cover" />
          </div>
        </div>
      </section>

      {/* What it assesses */}
      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="container">
          <p className="eyebrow">What the checklist assesses</p>
          <h2 className="mt-4 max-w-2xl font-display text-[30px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[36px]">
            Five common improvement areas — plus your next step.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <div key={a.title} className="rounded-lg border border-[#e3e8ee] bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#3fa90f]/12">
                  <a.icon className="h-5 w-5 text-[#2f8f12]" />
                </div>
                <p className="mt-4 font-condensed text-[13px] font-medium uppercase tracking-wider text-[#ff6b00]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-[17px] font-bold text-[#0d1b2a]">{a.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#5a6b80]">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container py-16 lg:py-20">
        <div className="rounded-xl border border-[#e3e8ee] bg-[#0d1b2a] p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl font-display text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
            Get your free IT funding readiness checklist
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#aebccd]">
            Download it, complete it in minutes, then book a short, practical call to see what could be
            improved and whether funding routes may be relevant to your firm.
          </p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-[#3fa90f] px-7 py-3.5 text-[14px] font-semibold text-white transition-transform active:scale-[0.98]"
          >
            Send me the checklist
          </a>
        </div>
      </section>
    </PageShell>
  );
}
