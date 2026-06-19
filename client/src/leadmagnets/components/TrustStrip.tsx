import { Quote, ShieldCheck, Clock, MapPin, Cog } from "lucide-react";
import { Testimonial } from "@/leadmagnets/lib/testimonials";

interface TrustStripProps {
  /** Testimonials to display. If empty/undefined, shows an editable placeholder. */
  testimonials?: Testimonial[];
}

const MARKERS = [
  { icon: Clock, stat: "30 yrs", label: "IT experience" },
  { icon: Cog, stat: "Engineering", label: "Manufacturing & aerospace focus" },
  { icon: ShieldCheck, stat: "Cyber", label: "Security & resilience built in" },
  { icon: MapPin, stat: "South East", label: "Responsive local support" },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="relative flex flex-col rounded-lg border border-[#e3e8ee] bg-white p-6 shadow-sm">
      <Quote className="absolute -top-3 left-5 h-6 w-6 rounded-full bg-[#3fa90f] p-1.5 text-white" />
      <blockquote className="pt-2 text-[14px] leading-relaxed text-[#33445a]">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-4 border-t border-[#eef1f4] pt-3">
        <p className="text-[13.5px] font-semibold text-[#0d1b2a]">{t.name}</p>
        <p className="text-[12.5px] text-[#5a6b80]">{t.role}, {t.company}</p>
        <p className="mt-0.5 text-[11.5px] font-medium uppercase tracking-wider text-[#2f8f12]">
          {t.location} · {t.sector}
        </p>
      </figcaption>
    </figure>
  );
}

export default function TrustStrip({ testimonials }: TrustStripProps) {
  const list = testimonials ?? [];

  return (
    <section className="border-b border-[#e3e8ee] bg-[#f4f6f8]">
      <div className="container py-14 lg:py-16">
        {/* Credibility markers */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {MARKERS.map((m) => (
            <div key={m.label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#3fa90f]/12">
                <m.icon className="h-5 w-5 text-[#2f8f12]" />
              </div>
              <div>
                <p className="font-display text-[16px] font-bold leading-tight text-[#0d1b2a]">{m.stat}</p>
                <p className="text-[12.5px] leading-snug text-[#5a6b80]">{m.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <p className="eyebrow">What clients across the South East say</p>
          <h2 className="mt-3 max-w-2xl font-display text-[26px] font-extrabold leading-tight text-[#0d1b2a] sm:text-[32px]">
            Trusted by engineering, aerospace and technical firms.
          </h2>

          {list.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {list.map((t) => (
                <TestimonialCard key={t.company} t={t} />
              ))}
            </div>
          ) : (
            <figure className="mt-8 rounded-lg border border-dashed border-[#c7d0da] bg-white p-7">
              <blockquote className="text-[15px] italic leading-relaxed text-[#7a899c]">
                &ldquo;Add real, approved client testimonials here.&rdquo;
              </blockquote>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
