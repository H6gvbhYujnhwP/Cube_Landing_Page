import PageShell from "@/leadmagnets/components/PageShell";
import LandingHero from "@/leadmagnets/components/LandingHero";
import LeadForm from "@/leadmagnets/components/LeadForm";
import TrustStrip from "@/leadmagnets/components/TrustStrip";
import AccreditationBanner from "@/leadmagnets/components/AccreditationBanner";
import { TESTIMONIALS } from "@/leadmagnets/lib/testimonials";
import { HERO } from "@/leadmagnets/lib/brand";
import { MapPin, Layers, GitBranch, Gauge, CheckCircle2 } from "lucide-react";

const STAGES = [
  { n: "01", title: "Where you are now", text: "Map your current systems, infrastructure, data and the gaps holding you back." },
  { n: "02", title: "What good looks like", text: "Define a realistic target state for secure, connected, modern engineering IT." },
  { n: "03", title: "Sequencing the work", text: "Prioritise changes so you fix the highest-impact issues first, without disruption." },
  { n: "04", title: "Funding & rollout", text: "Plan delivery in phases — and see where funding routes could support the project." },
];

const INCLUDES = [
  "A one-page current-state assessment template",
  "A prioritised modernisation roadmap framework",
  "A simple risk vs. impact scoring grid",
  "A phased rollout planner you can reuse",
];

export default function ModernisationMap() {
  return (
    <PageShell>
      <LandingHero
        image={HERO.map}
        eyebrow="Free Worksheet for Engineering & Manufacturing Firms"
        title="Your engineering systems modernisation map"
        intro="A practical worksheet to map where your IT, data and digital workflows are today — and chart a realistic, phased route to secure, modern, connected systems."
        bullets={[
          "Turn a vague 'we should modernise' into a clear, ordered plan",
          "Designed around real engineering operations and constraints",
          "Free to download and reuse across your team",
        ]}
      >
        <LeadForm resourceName="Systems Modernisation Map" ctaLabel="Send me the map" />
      </LandingHero>

      <AccreditationBanner />

      <TrustStrip testimonials={[TESTIMONIALS[2], TESTIMONIALS[7], TESTIMONIALS[8]]} />

      <section className="container py-16 lg:py-20">
        <p className="eyebrow">How the map works</p>
        <h2 className="mt-4 max-w-2xl font-display text-[30px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[36px]">
          Four steps from where you are to where you want to be.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((s) => (
            <div key={s.n} className="rounded-lg border border-[#e3e8ee] bg-white p-6 shadow-sm">
              <span className="font-condensed text-[28px] font-medium text-[#3fa90f]">{s.n}</span>
              <h3 className="mt-2 font-display text-[17px] font-bold text-[#0d1b2a]">{s.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[#5a6b80]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">What&apos;s inside</p>
            <h2 className="mt-4 font-display text-[28px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[34px]">
              Everything you need to build the plan.
            </h2>
            <ul className="mt-7 space-y-3">
              {INCLUDES.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#33445a]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3fa90f]" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-5 text-[13px] font-medium text-[#5a6b80]">
              <span className="inline-flex items-center gap-1.5"><Layers className="h-4 w-4 text-[#2f8f12]" /> Systems</span>
              <span className="inline-flex items-center gap-1.5"><GitBranch className="h-4 w-4 text-[#2f8f12]" /> Workflows</span>
              <span className="inline-flex items-center gap-1.5"><Gauge className="h-4 w-4 text-[#2f8f12]" /> Performance</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[#2f8f12]" /> Roadmap</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#e3e8ee] shadow-sm">
            <img src={HERO.map} alt="Engineering blueprint and digital workflow" className="h-80 w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-20">
        <div className="rounded-xl bg-[#0d1b2a] p-10 text-center sm:p-14">
          <h2 className="mx-auto max-w-2xl font-display text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
            Get your free modernisation map
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#aebccd]">
            Map your systems, prioritise the work, and build a phased plan your whole team can stand behind.
          </p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-[#3fa90f] px-7 py-3.5 text-[14px] font-semibold text-white transition-transform active:scale-[0.98]"
          >
            Send me the map
          </a>
        </div>
      </section>
    </PageShell>
  );
}
