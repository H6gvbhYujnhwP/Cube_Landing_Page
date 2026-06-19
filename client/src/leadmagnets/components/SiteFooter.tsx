import { BRAND } from "@/leadmagnets/lib/brand";
import { Phone, Mail, Globe } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e3e8ee] bg-[#0d1b2a]">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={BRAND.logo} alt="Engineer Solutions" className="h-9 w-9 object-contain" />
              <span className="font-display text-[16px] font-bold text-white">Engineer Solutions</span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[#9fb0c3]">
              Secure, reliable IT for engineering and aerospace firms — built around uptime,
              cyber resilience and dependable support.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#58c020]">Get in touch</p>
            <ul className="space-y-2.5 text-[14px] text-[#cdd7e2]">
              <li>
                <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-[#58c020]">
                  <Phone className="h-4 w-4 text-[#58c020]" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-[#58c020]">
                  <Mail className="h-4 w-4 flex-shrink-0 text-[#58c020]" /> {BRAND.email}
                </a>
              </li>
              <li>
                <a href={`https://${BRAND.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#58c020]">
                  <Globe className="h-4 w-4 text-[#58c020]" /> {BRAND.url}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#58c020]">Focus</p>
            <ul className="space-y-2.5 text-[14px] text-[#cdd7e2]">
              <li>Secure Infrastructure</li>
              <li>Cyber Security &amp; Resilience</li>
              <li>Cloud Migration &amp; Modernisation</li>
              <li>Backup &amp; Disaster Recovery</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-[#7d8da1] md:flex-row md:items-center">
          <p className="text-[#7d8da1]">© {new Date().getFullYear()} Engineer Solutions. 30 years of IT experience.</p>
          <p className="text-[#7d8da1]">Engineering &amp; Aerospace SME focus.</p>
        </div>
      </div>
    </footer>
  );
}
