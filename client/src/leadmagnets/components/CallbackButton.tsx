import { useState } from "react";
import { toast } from "sonner";
import { Phone, X, CheckCircle2, ArrowRight } from "lucide-react";
import { BRAND, FORMSPREE_ENDPOINT } from "@/leadmagnets/lib/brand";

export default function CallbackButton() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", time: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please add your name and phone number.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: "Callback request (lead magnet page)",
          request_type: "Callback request",
          source: "Engineer Solutions lead magnet page",
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      toast.success("Thanks — we'll call you back shortly.");
    } catch {
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  const close = () => {
    setOpen(false);
    // reset after the panel closes
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", time: "" });
    }, 250);
  };

  return (
    <>
      {/* Floating trigger */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#3fa90f] px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_12px_30px_-8px_rgba(63,169,15,0.6)] transition-transform active:scale-[0.97] sm:bottom-6 sm:right-6"
          aria-label="Request a callback"
        >
          <Phone className="h-4.5 w-4.5" />
          <span className="hidden sm:inline">Request a Callback</span>
          <span className="sm:hidden">Call me back</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[360px] rounded-xl border border-[#e3e8ee] bg-white shadow-[0_24px_60px_-12px_rgba(13,27,42,0.35)] sm:bottom-6 sm:right-6">
          <div className="flex items-center justify-between rounded-t-xl bg-[#0d1b2a] px-5 py-4">
            <div className="flex items-center gap-2.5">
              <Phone className="h-5 w-5 text-[#58c020]" />
              <p className="font-display text-[15px] font-bold text-white">Request a callback</p>
            </div>
            <button onClick={close} aria-label="Close" className="text-[#9fb0c3] transition-colors hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-5">
            {submitted ? (
              <div className="py-2 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3fa90f]/12">
                  <CheckCircle2 className="h-7 w-7 text-[#3fa90f]" />
                </div>
                <h4 className="mt-4 font-display text-[17px] font-bold text-[#0d1b2a]">
                  Thanks, {form.name.split(" ")[0]}.
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-[#44546a]">
                  One of our engineers will call you back{form.time ? ` ${form.time.toLowerCase()}` : " shortly"}.
                  Prefer to talk now? Call us on{" "}
                  <a href={`tel:${BRAND.phone.replace(/\s/g, "")}`} className="font-semibold text-[#2f8f12]">
                    {BRAND.phone}
                  </a>
                  .
                </p>
                <button
                  onClick={close}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-md border border-[#d4dbe3] px-4 py-2.5 text-[13px] font-semibold text-[#0d1b2a] transition-colors hover:bg-[#f4f6f8]"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <p className="text-[13px] leading-relaxed text-[#44546a]">
                  Leave your details and a specialist will call you back — no hard sell, no jargon.
                </p>
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#33445a]">
                    Your name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full rounded-md border border-[#d4dbe3] bg-white px-3.5 py-2.5 text-[14px] text-[#0d1b2a] placeholder:text-[#9aa7b6] focus:border-[#3fa90f] focus:outline-none focus:ring-2 focus:ring-[#3fa90f]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#33445a]">
                    Phone number <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="07000 000000"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full rounded-md border border-[#d4dbe3] bg-white px-3.5 py-2.5 text-[14px] text-[#0d1b2a] placeholder:text-[#9aa7b6] focus:border-[#3fa90f] focus:outline-none focus:ring-2 focus:ring-[#3fa90f]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-[12px] font-medium text-[#33445a]">Best time to call</label>
                  <select
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className="w-full rounded-md border border-[#d4dbe3] bg-white px-3.5 py-2.5 text-[14px] text-[#0d1b2a] focus:border-[#3fa90f] focus:outline-none focus:ring-2 focus:ring-[#3fa90f]/20"
                  >
                    <option value="">Any time</option>
                    <option value="This morning">This morning</option>
                    <option value="This afternoon">This afternoon</option>
                    <option value="Tomorrow">Tomorrow</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#3fa90f] px-5 py-3 text-[14px] font-semibold text-white transition-transform active:scale-[0.98] disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Request my callback"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
