/**
 * SAMPLE / ILLUSTRATIVE testimonials only.
 * Companies, names and quotes below are FICTIONAL and intended as drafts/placeholders.
 * Do NOT publish as genuine verified client reviews without real client sign-off.
 * Replace each entry with a real, approved client quote before going live.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  sector: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our ageing servers used to fall over mid-shift and stall the whole line. Since the migration we've had zero unplanned downtime, and the team finally trusts the systems they rely on.",
    name: "Daniel Whitaker",
    role: "Operations Director",
    company: "Maidstone Precision Components Ltd",
    location: "Maidstone, Kent",
    sector: "Manufacturing",
  },
  {
    quote:
      "As an aerospace supplier, our customers audit our cyber security hard. The health check showed exactly where we fell short, and the fixes helped us pass our next supply-chain assessment first time.",
    name: "Priya Nair",
    role: "Quality & Compliance Manager",
    company: "Farnborough Aerostructures",
    location: "Farnborough, Hampshire",
    sector: "Aerospace",
  },
  {
    quote:
      "We were running the business on spreadsheets and goodwill. They mapped our systems, prioritised the mess, and rolled out a proper workflow without ever stopping production.",
    name: "Mark Trevelyan",
    role: "Managing Director",
    company: "Crawley CNC Engineering",
    location: "Crawley, West Sussex",
    sector: "Engineering",
  },
  {
    quote:
      "The funding readiness checklist gave us the push we needed. We finally understood what 'good' looked like and built a phased plan the board could actually sign off on.",
    name: "Sarah Bennett",
    role: "Finance Director",
    company: "Reading Tool & Die Co.",
    location: "Reading, Berkshire",
    sector: "Manufacturing",
  },
  {
    quote:
      "Backups we thought were running hadn't worked in months. They caught it before it cost us, set up proper disaster recovery, and now I sleep at night.",
    name: "Gary Holmes",
    role: "Site Manager",
    company: "Medway Sheet Metal Ltd",
    location: "Rochester, Kent",
    sector: "Manufacturing",
  },
  {
    quote:
      "Responsive, local, and they actually understand engineering operations. No jargon, no upselling — just dependable IT that keeps the workshop moving.",
    name: "Laura Chen",
    role: "Operations Manager",
    company: "Guildford Advanced Manufacturing",
    location: "Guildford, Surrey",
    sector: "Manufacturing",
  },
  {
    quote:
      "Our design data and IP are everything. They locked down access controls and tightened our security without making life harder for the engineers. Exactly the balance we needed.",
    name: "Tom Ashworth",
    role: "Engineering Lead",
    company: "Brighton Composites & Tooling",
    location: "Brighton, East Sussex",
    sector: "Aerospace",
  },
  {
    quote:
      "We modernised in sensible phases instead of one disruptive 'big bang'. Each step paid for itself, and the dashboards now give us visibility we never had before.",
    name: "Rebecca Powell",
    role: "Director",
    company: "Basingstoke Automation Systems",
    location: "Basingstoke, Hampshire",
    sector: "SME Technical",
  },
  {
    quote:
      "As a small technical firm we don't have an internal IT team. Having a partner who treats our uptime as seriously as we do has been a genuine relief.",
    name: "James O'Connor",
    role: "Founder",
    company: "Oxford Precision Instruments",
    location: "Oxford, Oxfordshire",
    sector: "SME Technical",
  },
  {
    quote:
      "The cost review opened our eyes — slow systems and constant little failures were quietly costing us a fortune in lost hours. Fixing them was the easiest ROI we've ever had.",
    name: "Hannah Reid",
    role: "General Manager",
    company: "Slough Industrial Electronics",
    location: "Slough, Berkshire",
    sector: "SME Technical",
  },
];
