/*
  Design note: Precision Blueprint Modernism.
  The Services page should read like a structured engineering briefing: clear, restrained,
  commercially aware, and visually disciplined with industrial imagery and measured spacing.
*/
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/siteContent";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <SiteLayout
      eyebrow="Capabilities"
      title="Secure, resilient IT for engineering-led environments."
      intro="Engineer Solutions focuses on the capability areas that matter most to operational SMEs: stable infrastructure, practical cyber security, continuity, modernisation, and dependable support."
    >
      <section className="border-b border-slate-900/10 bg-slate-100 text-slate-950">
        <div className="container grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">How the offer is framed</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              This is business-critical IT, not a broad service catalogue.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-700">
              Each area is designed around operational continuity, resilience, reduced downtime, and stronger commercial confidence.
              The aim is to give engineering and aerospace SMEs dependable systems and clearer technical direction.
            </p>
          </div>

          <div className="relative overflow-hidden border border-slate-200 bg-slate-900 p-3 shadow-[0_24px_54px_rgba(2,12,22,0.18)]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/kmdkEddPrMedMhC5vbJdqs/engineer-solutions-services-grid-6KmrzBhC5T5LeUBZjYWioe.webp"
              alt="Precision engineering systems and secure infrastructure workspace"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-white text-slate-950">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-6">
            {siteContent.services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-8 border border-slate-200 bg-slate-50 p-8 lg:grid-cols-[0.22fr_0.46fr_0.32fr] lg:items-start"
              >
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">0{index + 1}</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{service.title}</h2>
                </div>
                <p className="text-base leading-8 text-slate-700">{service.summary}</p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-sky-700" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 text-white">
        <div className="container grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-20">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-cyan-200/80">Why the fit matters</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Designed for firms where weak IT has operational consequences.
            </h2>
          </div>
          <div className="grid gap-5">
            {[
              "Engineering workflows often depend on stable systems, dependable access, and controlled change rather than generic quick fixes.",
              "Customers, suppliers, and larger organisations increasingly expect resilience, security awareness, and continuity planning.",
              "The right approach combines technical credibility with commercial judgement, so infrastructure decisions support the wider business.",
            ].map((item) => (
              <div key={item} className="border border-white/10 bg-white/5 p-6">
                <p className="text-base leading-8 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 text-slate-950">
        <div className="container flex flex-col gap-8 py-14 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">Next step</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Speak to Dave about secure, reliable IT for your engineering environment.
            </h2>
          </div>
          <a href={`mailto:${siteContent.email}?subject=Speak%20to%20Dave%20about%20engineering%20IT`}>
            <Button className="h-12 rounded-none border border-slate-950 bg-slate-950 px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-slate-800">
              Speak to Dave
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
