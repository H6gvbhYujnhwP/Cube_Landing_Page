export const siteContent = {
  brand: "Engineer Solutions",
  domain: "engineersolutions.co.uk",
  email: "team@engineersolutions.co.uk",
  primaryCta: "Speak to Our Team Today",
  secondaryCta: "View Services",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  trustPoints: [
    "30 Years of IT Experience",
    "Engineering-Led SME Focus",
    "Secure Infrastructure, Cyber Security & Cloud",
    "Built Around Reliability and Continuity",
  ],
  services: [
    {
      title: "Secure Infrastructure",
      summary:
        "Build and maintain dependable systems that support operational teams, reduce instability, and create a stronger foundation for growth.",
      bullets: [
        "Stable core systems for day-to-day operations",
        "Infrastructure planning shaped around uptime and resilience",
        "A stronger technical base for growth and customer confidence",
      ],
    },
    {
      title: "Cyber Security & Resilience",
      summary:
        "Protect critical systems, reduce exposure, and improve confidence across the business and wider supply chain.",
      bullets: [
        "Practical controls for operational businesses",
        "Reduced risk around business-critical systems and data",
        "Security thinking that supports commercial credibility",
      ],
    },
    {
      title: "Cloud Migration & Modernisation",
      summary:
        "Modernise without disruption and move systems forward in a way that supports engineering workflows.",
      bullets: [
        "Planned migration rather than rushed replacement",
        "Modern platforms that fit operational requirements",
        "Improved flexibility without avoidable upheaval",
      ],
    },
    {
      title: "Backup & Disaster Recovery",
      summary:
        "Strengthen continuity and reduce the business impact of outages, failures, or attacks.",
      bullets: [
        "Better continuity planning for operational environments",
        "Reduced recovery risk after failure or disruption",
        "Clearer resilience for leadership teams and customers",
      ],
    },
    {
      title: "Dependable Support",
      summary:
        "Responsive, practical support for firms where downtime and weak systems carry real cost.",
      bullets: [
        "Support shaped around operational consequences",
        "Clearer decisions and practical next steps",
        "Less generic advice and more commercially useful action",
      ],
    },
  ],
  sectorProof: [
    {
      company: "ESL Engineers",
      text: "Specialist engineering environments need dependable systems, not generic support language.",
    },
    {
      company: "Third Dimension",
      text: "Engineering-led businesses benefit from IT that supports continuity, client confidence, and secure day-to-day delivery.",
    },
    {
      company: "SurvaTec",
      text: "For operational SMEs, resilience and system reliability matter well beyond the server room.",
    },
  ],
} as const;
