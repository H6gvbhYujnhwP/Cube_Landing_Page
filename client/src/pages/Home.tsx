/*
  Design note: Precision Blueprint Modernism.
  The homepage should sell through strong hierarchy, asymmetric sections, dark-to-light contrast,
  and industrial credibility. Every block must reinforce specialist positioning for engineering SMEs.
*/
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/siteContent";
import {
  ArrowRight,
  CheckCircle2,
  CircleGauge,
  CloudCog,
  ShieldCheck,
  TimerReset,
  Wrench,
} from "lucide-react";
import { Link } from "wouter";
import { SiteLayout } from "@/components/SiteLayout";

const serviceIcons = [CircleGauge, ShieldCheck, CloudCog, TimerReset, Wrench] as const;

export default function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="container grid gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-24">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-[0.74rem] uppercase tracking-[0.34em] text-cyan-200/80">
              IT for Engineering &amp; Aerospace SMEs
            </p>
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              Secure, reliable IT for firms that cannot afford weak systems.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Engineer Solutions helps engineering and aerospace SMEs build secure, compliance-aware IT that supports uptime,
              resilience, continuity, and growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${siteContent.email}?subject=Request%20an%20IT%20Review`}>
                <Button className="h-12 rounded-none border border-cyan-300/45 bg-cyan-300/12 px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-cyan-300/24">
                  Request an IT Review
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </a>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="h-12 rounded-none border-white/20 bg-white/0 px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-white/8 hover:text-white"
                >
                  Explore Capabilities
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {siteContent.trustPoints.map((point) => (
                <div key={point} className="border border-white/10 bg-white/4 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm leading-6 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-10">
            <div className="absolute -left-6 top-10 hidden h-36 w-36 border border-cyan-300/20 lg:block" />
            <div className="absolute -bottom-6 right-0 hidden h-24 w-56 border border-white/10 lg:block" />
            <div className="relative overflow-hidden border border-white/10 bg-slate-900/60 p-3 shadow-[0_20px_70px_rgba(2,12,22,0.55)] backdrop-blur-md">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/kmdkEddPrMedMhC5vbJdqs/engineer-solutions-hero-reference-aRU6uvegEL7ZaVp6ymfbCN.webp"
                alt="Advanced engineering manufacturing environment with secure technical infrastructure"
                className="aspect-[16/11] w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 border border-cyan-300/15 bg-slate-950/78 p-5 backdrop-blur-md">
                <p className="text-[0.7rem] uppercase tracking-[0.28em] text-cyan-200/80">Operational Reality</p>
                <p className="mt-3 text-base leading-7 text-slate-200">
                  In specialist engineering environments, IT affects delivery, continuity, security, and customer confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-slate-100 text-slate-950">
        <div className="container grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">Why generic support falls short</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              For engineering businesses, IT is not a background function.
            </h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-slate-700 sm:grid-cols-2">
            <p>
              It affects uptime, delivery, customer confidence, data security, supply-chain expectations, and the ability to keep
              operations moving without avoidable disruption.
            </p>
            <p>
              Broad, reactive support models often lack the operational focus needed by firms where system weakness creates real
              commercial consequences. Engineer Solutions is built for that reality.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-white text-slate-950">
        <div className="container py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">What Engineer Solutions does</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Capability areas framed around business outcomes.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-slate-700">
              The offer is not a generic list of tools. It is focused on secure infrastructure, resilience, continuity, and practical
              support for operational businesses that need systems to stand up under pressure.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {siteContent.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article key={service.title} className="group relative flex min-h-[20rem] flex-col border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">0{index + 1}</span>
                    <Icon className="size-5 text-sky-800" />
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-700">{service.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-sky-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-950 text-white">
        <div className="container grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-cyan-200/80">Why Engineer Solutions</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Specialist market focus instead of broad MSP positioning.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Engineer Solutions is built around the needs of engineering and aerospace SMEs. The focus is secure, reliable,
              operationally dependable IT that supports resilience, continuity, and growth.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              "Engineering and aerospace SME focus, not general-purpose support messaging.",
              "Practical cyber security and resilience for businesses with operational consequences.",
              "Commercially useful thinking shaped around uptime, stability, and supply-chain confidence.",
              "Infrastructure decisions that support growth without losing sight of day-to-day reliability.",
            ].map((item) => (
              <div key={item} className="border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
                <p className="text-base leading-8 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-slate-100 text-slate-950">
        <div className="container grid gap-12 py-16 lg:grid-cols-[0.6fr_0.6fr_0.8fr] lg:items-center lg:py-24">
          <div className="lg:col-span-2">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">Why Engineer Solutions</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Experienced specialist thinking, presented in a calm and commercially useful way.
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                "30 years of experience across multiple IT environments.",
                "A practical understanding of uptime, continuity, and operational risk.",
                "Broader technical and commercial experience, now focused on engineering and aerospace SMEs.",
                "Clearer thinking than generic support-led positioning.",
              ].map((item) => (
                <div key={item} className="border border-slate-200 bg-white p-5">
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-slate-200 bg-slate-900 p-3 shadow-[0_24px_54px_rgba(2,12,22,0.18)]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/kmdkEddPrMedMhC5vbJdqs/engineer-solutions-dave-portrait-scene-NU77uGYEbgAKpf3osGBXRr.webp"
              alt="Experienced IT specialist reviewing engineering systems and operational dashboards"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-white text-slate-950">
        <div className="container py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">Sector relevance</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Evidence that supports the specialist claim.
              </h2>
            </div>
            <p className="text-base leading-8 text-slate-700">
              The goal is not to overstate. It is to show relevant experience, credible sector alignment, and a stronger fit for
              engineering-led organisations than broad-market support providers typically offer.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {siteContent.sectorProof.map((item) => (
              <article key={item.company} className="border border-slate-200 bg-slate-50 p-7">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-slate-500">Sector proof</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.company}</h3>
                <p className="mt-4 text-base leading-8 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="container grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-cyan-200/80">Final call to action</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Build IT that supports growth, resilience, and continuity.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              If your business depends on stable systems, secure operations, and dependable support, speak to our team today about
              where your current environment is strong and where it may be exposed.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="h-12 rounded-none border border-cyan-300/45 bg-cyan-300/12 px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-cyan-300/24">
                  Book a Strategy Call
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="h-12 rounded-none border-white/20 bg-transparent px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-white/8 hover:text-white"
                >
                  See How We Help
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-white/4 p-3 backdrop-blur-md">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/kmdkEddPrMedMhC5vbJdqs/engineer-solutions-services-grid-6KmrzBhC5T5LeUBZjYWioe.webp"
              alt="High-spec engineering systems and secure infrastructure visual"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
