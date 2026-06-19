import { BRAND } from "@/leadmagnets/lib/brand";
import { Phone } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e3e8ee] bg-white/90 backdrop-blur-md">
      <div className="container flex h-[68px] items-center justify-between">
        <a href={`https://${BRAND.url}`} className="flex items-center gap-3">
          <img src={BRAND.logo} alt="Engineer Solutions logo" className="h-9 w-9 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight text-[#0d1b2a]">
              Engineer Solutions
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#2f8f12]">
              Specialist IT for Engineering SMEs
            </span>
          </span>
        </a>

        <a
          href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#0d1b2a] hover:text-[#2f8f12]"
        >
          <Phone className="h-4 w-4 text-[#3fa90f]" />
          <span className="hidden sm:inline">{BRAND.phone}</span>
        </a>
      </div>
    </header>
  );
}
