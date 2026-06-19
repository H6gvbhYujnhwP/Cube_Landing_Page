import { CheckCircle2 } from "lucide-react";

interface LandingHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  intro: string;
  bullets?: string[];
  children?: React.ReactNode;
}

export default function LandingHero({ image, eyebrow, title, intro, bullets, children }: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#e3e8ee] bg-[#f4f6f8]">
      <div className="container grid items-start gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-2xl font-display text-[34px] font-extrabold leading-[1.08] text-[#0d1b2a] sm:text-[46px]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#44546a]">{intro}</p>

          {bullets && (
            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[15px] text-[#33445a]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3fa90f]" />
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9 overflow-hidden rounded-md border border-[#e3e8ee] shadow-sm">
            <img src={image} alt="" className="h-56 w-full object-cover sm:h-64" />
          </div>
        </div>
        <div className="lg:pt-2">{children}</div>
      </div>
    </section>
  );
}
