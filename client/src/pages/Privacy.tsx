/*
  Design note: Precision Blueprint Modernism.
  Even legal content should feel deliberate and high-trust, with clear hierarchy,
  strong spacing, and restrained industrial styling rather than plain default prose.
*/
import { SiteLayout } from "@/components/SiteLayout";

const sections = [
  {
    title: "Who this policy applies to",
    body: "This privacy policy explains how Engineer Solutions may collect and use information provided through this website. Engineer Solutions is a marketing website for Cube 6 IT.",
  },
  {
    title: "Information you may provide",
    body: "If you contact Engineer Solutions by email, information such as your name, company, contact details, and enquiry content may be used to respond to your request and continue the conversation.",
  },
  {
    title: "How information may be used",
    body: "Information submitted through this website may be used to reply to enquiries, discuss services, arrange calls, and maintain relevant business records connected to the enquiry.",
  },
  {
    title: "Data sharing",
    body: "Information will not be sold. It may be shared only where reasonably necessary to operate the website, manage communications, or meet legal obligations.",
  },
  {
    title: "Data retention",
    body: "Enquiry information may be retained for as long as reasonably necessary to manage the relationship, meet legal requirements, and maintain business records.",
  },
  {
    title: "Your rights",
    body: "You may request access to, correction of, or deletion of personal information where applicable. To make a request, contact the business using the website contact details.",
  },
  {
    title: "Updates",
    body: "This policy may be updated from time to time to reflect operational, legal, or website changes.",
  },
];

export default function Privacy() {
  return (
    <SiteLayout
      eyebrow="Privacy Policy"
      title="Clear, straightforward handling of enquiry information."
      intro="This page provides a simple privacy statement for a compact brochure-style website. It should be reviewed and adapted with final legal wording before launch if needed."
    >
      <section className="bg-slate-100 text-slate-950">
        <div className="container py-14 lg:py-20">
          <div className="grid gap-5">
            {sections.map((section) => (
              <article key={section.title} className="border border-slate-200 bg-white p-8">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">{section.title}</h2>
                <p className="mt-4 max-w-4xl text-base leading-8 text-slate-700">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
