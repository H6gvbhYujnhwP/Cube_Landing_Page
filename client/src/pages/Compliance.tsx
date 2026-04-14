/*
  Design note: Precision Blueprint Modernism.
  This page should feel like an executive engineering briefing: disciplined blocks,
  dark-to-light material shifts, industrial clarity, and calm authority rather than alarm.
*/
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/siteContent";
import { ArrowRight, ShieldCheck, Radar, Workflow, FileCheck2 } from "lucide-react";

const pressurePoints = [
  {
    title: "Awareness is no longer enough",
    text:
      "Many companies are already aware of the Cyber Security and Resilience Bill, but going forward the real issue is whether leadership teams, suppliers, and operational systems are actually prepared for the higher expectations that follow.",
    icon: Radar,
  },
  {
    title: "Technology businesses carry connected risk",
    text:
      "In engineering, aerospace, software, and specialist technical environments, one weak supplier, unmanaged service, or poorly handled incident can affect delivery, continuity, customer confidence, and commercial credibility.",
    icon: Workflow,
  },
  {
    title: "Compliance affects commercial opportunity",
    text:
      "Requirements linked to resilience, reporting, supplier assurance, and security maturity increasingly influence tenders, customer due diligence, partnership decisions, and board-level risk conversations.",
    icon: FileCheck2,
  },
];

const whyItMatters = [
  "The direction of regulation is clear: resilience, faster reporting, stronger oversight, and greater scrutiny of critical suppliers are becoming more important in technology-led markets.",
  "Firms operating in the technology space often sit inside wider supply chains, which means expectations can reach them even when they are not the primary regulated entity.",
  "Waiting until a customer, regulator, or insurer asks hard questions usually makes the work more expensive, more urgent, and more disruptive than it needed to be.",
];

const supportAreas = [
  "Assess current infrastructure, cyber posture, backup strategy, and continuity readiness against practical business risk.",
  "Identify where the Cyber Security and Resilience Bill, customer expectations, or supply-chain obligations may create pressure on the business going forward.",
  "Prioritise sensible improvements in secure infrastructure, resilience, cloud, backup, and operational support without unnecessary complexity.",
  "Give leadership teams a clearer route from general awareness to practical action and better commercial confidence.",
];

export default function Compliance() {
  return (
    <SiteLayout
      eyebrow="Regulation & Readiness"
      title="Why awareness of cyber and resilience requirements now matters in the technology space."
      intro="Many companies have already heard of the Cyber Security and Resilience Bill. The issue now is not simple awareness, but whether the business is ready for the standards, scrutiny, and supply-chain expectations that are likely to matter more going forward."
    >
      <section className="border-b border-slate-900/10 bg-slate-100 text-slate-950">
        <div className="container grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">Why this deserves board attention</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              The businesses that respond early are usually in a stronger position commercially and operationally.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700">
              For technology-led companies, security and resilience are no longer just technical concerns. They influence client trust,
              supplier acceptance, continuity planning, and how confidently a business can support larger organisations in regulated or
              security-sensitive environments.
            </p>
          </div>

          <div className="relative overflow-hidden border border-slate-200 bg-slate-900 p-3 shadow-[0_24px_54px_rgba(2,12,22,0.18)]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/bPzD5K8zDKUGNyZZGEdPa6/engineer-solutions-contact-scene-7RjXQ9wqK95dLeSndq1b9f.webp"
              alt="Engineering leadership reviewing cyber resilience and compliance priorities"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-white text-slate-950">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {pressurePoints.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-slate-200 bg-slate-50 p-8">
                  <div className="flex items-center gap-3 text-sky-800">
                    <Icon className="size-5" />
                    <p className="text-[0.72rem] uppercase tracking-[0.28em]">Key point</p>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-700">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 text-white">
        <div className="container grid gap-8 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:py-20">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-cyan-200/80">What it means in practice</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Going forward, firms need clearer readiness rather than vague reassurance.
            </h2>
          </div>
          <div className="grid gap-5">
            {whyItMatters.map((item) => (
              <div key={item} className="border border-white/10 bg-white/5 p-6">
                <p className="text-base leading-8 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-slate-100 text-slate-950">
        <div className="container grid gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:py-20">
          <div className="max-w-xl">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">How Dave can assist</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Engineer Solutions helps turn compliance pressure into a practical action plan.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700">
              Dave’s company supports engineering and technology-focused SMEs with clear, commercially grounded advice. The aim is not
              to add noise or unnecessary complexity, but to help the business understand where the exposure sits, what needs attention
              first, and how to strengthen resilience in a realistic way.
            </p>
          </div>

          <div className="grid gap-4">
            {supportAreas.map((item) => (
              <div key={item} className="flex gap-4 border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(2,12,22,0.06)]">
                <ShieldCheck className="mt-1 size-5 shrink-0 text-sky-800" />
                <p className="text-sm leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-950">
        <div className="container flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-3xl">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">Call to action</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              If the Cyber Security and Resilience Bill is already on your radar, now is the right time to turn awareness into action.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Speak to Dave about reviewing your current position, identifying likely pressure points, and putting a more resilient,
              more credible compliance path in place.
            </p>
          </div>
          <a href={`mailto:${siteContent.email}?subject=Cyber%20Security%20and%20Resilience%20Bill%20readiness`}>
            <Button className="h-12 rounded-none border border-slate-950 bg-slate-950 px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-slate-800">
              Speak to Dave About Readiness
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
