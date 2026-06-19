import { ShieldCheck } from "lucide-react";

/**
 * Accreditation / trust banner shown directly below the hero.
 * NOTE: Engineer Solutions has confirmed it genuinely holds these accreditations.
 * These are clean text/icon badges (not the exact trademarked logo files) — swap in
 * the official badge image assets when available.
 */
export default function AccreditationBanner() {
  return (
    <section className="border-b border-[#e3e8ee] bg-white">
      <div className="container py-7">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#5a6b80]">
            Accredited &amp; certified
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {/* Cyber Essentials */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#0d1b2a]">
                <ShieldCheck className="h-6 w-6 text-[#58c020]" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-[15px] font-bold text-[#0d1b2a]">Cyber Essentials</p>
                <p className="text-[12px] text-[#5a6b80]">Certified</p>
              </div>
            </div>

            <div className="hidden h-9 w-px bg-[#e3e8ee] sm:block" />

            {/* Microsoft Partner */}
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 grid-cols-2 grid-rows-2 gap-0.5 rounded-md bg-[#0d1b2a] p-2">
                <span className="bg-[#f25022]" />
                <span className="bg-[#7fba00]" />
                <span className="bg-[#00a4ef]" />
                <span className="bg-[#ffb900]" />
              </div>
              <div className="leading-tight">
                <p className="font-display text-[15px] font-bold text-[#0d1b2a]">Microsoft Partner</p>
                <p className="text-[12px] text-[#5a6b80]">Solutions Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
