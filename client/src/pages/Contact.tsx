/*
  Design note: Precision Blueprint Modernism.
  The Contact page should feel calm, direct, and conversion-led, with no generic form-heavy clutter.
  Use structured panels, strong typography, and specialist reassurance rather than sales pressure.
*/
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/lib/siteContent";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    details: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Engineering IT Review - ${formData.company || formData.name || "New enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nWhat would you like to discuss?\n${formData.details}`,
    );

    window.location.href = `mailto:${siteContent.email}?subject=${subject}&body=${body}`;
  };

  return (
    <SiteLayout
      eyebrow="Contact"
      title="Speak to our team today about secure, reliable IT for your business."
      intro="If your systems need to support continuity, resilience, and dependable day-to-day operations, start with a focused conversation about your current environment and where it may need attention."
    >
      <section className="border-b border-slate-900/10 bg-slate-100 text-slate-950">
        <div className="container grid gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div className="max-w-xl">
            <p className="text-[0.74rem] uppercase tracking-[0.34em] text-sky-800">What to expect</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              A direct conversation shaped around your operational reality.
            </h2>
            <div className="mt-8 space-y-4">
              {[
                "A practical discussion about reliability, resilience, and support requirements.",
                "Clear thinking about where weak systems may be creating risk or friction.",
                "An approach grounded in engineering and aerospace SME realities rather than broad generic advice.",
              ].map((item) => (
                <div key={item} className="flex gap-3 border border-slate-200 bg-white p-5">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-sky-700" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-slate-200 bg-slate-900 p-3 shadow-[0_24px_54px_rgba(2,12,22,0.18)]">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/kmdkEddPrMedMhC5vbJdqs/engineer-solutions-contact-scene-SoSvbvFgsq57shC7CE7Rhc.webp"
              alt="Engineering consultation workspace with technical drawings and infrastructure planning"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-900/10 bg-white text-slate-950">
        <div className="container grid gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:py-20">
          <div className="border border-slate-200 bg-slate-50 p-8">
            <p className="text-[0.72rem] uppercase tracking-[0.3em] text-slate-500">Request an IT Review</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Start the conversation</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              Share a few details below and your email application will open a pre-filled enquiry to our team. That keeps the site
              simple, direct, and ready for a live inbox workflow.
            </p>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Name
                  <input
                    required
                    value={formData.name}
                    onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                    className="h-12 border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-sky-700"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Company
                  <input
                    required
                    value={formData.company}
                    onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                    className="h-12 border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-sky-700"
                    placeholder="Company name"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Work email
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                  className="h-12 border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-sky-700"
                  placeholder="name@company.co.uk"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                What would you like to discuss?
                <textarea
                  required
                  value={formData.details}
                  onChange={(event) => setFormData((current) => ({ ...current, details: event.target.value }))}
                  className="min-h-36 border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-700"
                  placeholder="Current setup, reliability concerns, cyber security, continuity, cloud migration, or support challenges."
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="h-12 rounded-none border border-slate-950 bg-slate-950 px-6 text-[0.76rem] uppercase tracking-[0.2em] text-white hover:bg-slate-800">
                  Send Enquiry
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Link href="/services">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-12 rounded-none border-slate-300 bg-transparent px-6 text-[0.76rem] uppercase tracking-[0.2em] text-slate-950 hover:bg-slate-100"
                  >
                    Review Services
                  </Button>
                </Link>
              </div>
            </form>
          </div>

          <div className="grid gap-5">
            <div className="border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-slate-950">
                <Mail className="size-5 text-sky-800" />
                <h3 className="text-lg font-semibold tracking-[-0.02em]">Email</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                <a href={`mailto:${siteContent.email}`} className="font-medium text-slate-950 underline decoration-sky-700/40 underline-offset-4">
                  {siteContent.email}
                </a>
              </p>
            </div>
            <div className="border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-slate-950">
                <ShieldCheck className="size-5 text-sky-800" />
                <h3 className="text-lg font-semibold tracking-[-0.02em]">Best fit</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                UK engineering and aerospace SMEs that need secure, reliable, compliance-aware IT with stronger operational focus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
