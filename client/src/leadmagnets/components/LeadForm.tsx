import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/leadmagnets/lib/brand";

interface LeadFormProps {
  resourceName: string;
  ctaLabel: string;
  note?: string;
}

export default function LeadForm({ resourceName, ctaLabel, note }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    location: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      toast.error("Please complete your name, work email and company.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `Lead magnet request: ${resourceName}`,
          lead_magnet: resourceName,
          source: "Engineer Solutions lead magnet page",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast.success("Thanks for getting in touch — we'll be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#3fa90f]/40 bg-white p-8 shadow-[0_12px_40px_-12px_rgba(13,27,42,0.18)]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3fa90f]/12">
          <CheckCircle2 className="h-7 w-7 text-[#3fa90f]" />
        </div>
        <h3 className="mt-5 font-display text-[22px] font-bold text-[#0d1b2a]">
          You&apos;re all set, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-[#44546a]">
          Thank you for getting in touch — someone will be in touch shortly!
        </p>
        <div className="mt-6 flex items-center gap-2 text-[13px] text-[#5a6b80]">
          <CheckCircle2 className="h-4 w-4" />
          A short, practical conversation — no hard sell, no jargon.
        </div>
      </div>
    );
  }

  const fields = [
    { key: "name", label: "Full name", type: "text", placeholder: "Jane Smith", req: true },
    { key: "email", label: "Work email", type: "email", placeholder: "jane@yourfirm.co.uk", req: true },
    { key: "company", label: "Company", type: "text", placeholder: "Precision Engineering Ltd", req: true },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#e3e8ee] bg-white p-7 shadow-[0_18px_50px_-18px_rgba(13,27,42,0.22)] sm:p-8"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex h-7 items-center rounded-full bg-[#3fa90f]/12 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2f8f12]">
          Free download
        </span>
      </div>
      <h3 className="mt-3 font-display text-[20px] font-bold leading-snug text-[#0d1b2a]">
        Get the {resourceName}
      </h3>
      <div className="mt-6 space-y-4">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="mb-1.5 block text-[12px] font-medium text-[#33445a]">
              {f.label} {f.req && <span className="text-[#dc2626]">*</span>}
            </label>
            <input
              type={f.type}
              placeholder={f.placeholder}
              value={(form as any)[f.key]}
              onChange={(e) => update(f.key, e.target.value)}
              className="w-full rounded-md border border-[#d4dbe3] bg-white px-3.5 py-2.5 text-[14px] text-[#0d1b2a] placeholder:text-[#9aa7b6] focus:border-[#3fa90f] focus:outline-none focus:ring-2 focus:ring-[#3fa90f]/20"
            />
          </div>
        ))}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-[12px] font-medium text-[#33445a]">Role</label>
            <input
              type="text"
              placeholder="Operations Director"
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
              className="w-full rounded-md border border-[#d4dbe3] bg-white px-3.5 py-2.5 text-[14px] text-[#0d1b2a] placeholder:text-[#9aa7b6] focus:border-[#3fa90f] focus:outline-none focus:ring-2 focus:ring-[#3fa90f]/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-medium text-[#33445a]">Location</label>
            <input
              type="text"
              placeholder="West Midlands"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className="w-full rounded-md border border-[#d4dbe3] bg-white px-3.5 py-2.5 text-[14px] text-[#0d1b2a] placeholder:text-[#9aa7b6] focus:border-[#3fa90f] focus:outline-none focus:ring-2 focus:ring-[#3fa90f]/20"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#3fa90f] px-6 py-3.5 text-[14px] font-semibold text-white transition-transform active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? "Sending…" : ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7d8da1]">
        <Lock className="h-3 w-3" />
        {note || "We respect your inbox. No spam, unsubscribe anytime."}
      </p>
    </form>
  );
}
