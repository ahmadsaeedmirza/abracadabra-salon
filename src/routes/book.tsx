import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { services } from "@/lib/salon-data";
import { SparkleMark } from "@/components/site/SparkleMark";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Your Appointment — Abracadabra Salon" },
      { name: "description", content: "Reserve a service, a stylist, and a time — all in under a minute." },
      { property: "og:title", content: "Book Your Appointment — Abracadabra Salon" },
      { property: "og:description", content: "Reserve online in under a minute." },
    ],
  }),
  component: BookPage,
});

const times = ["9:30", "10:15", "11:00", "12:30", "1:15", "2:00", "3:45", "4:30", "5:15", "6:00"];
const faqs = [
  { q: "How early should I book?", a: "For color and specialty services, 2–3 weeks in advance is ideal. Cuts often open up within the week." },
  { q: "Do vivid colors require a consultation?", a: "Yes — vivids, corrections, and extensions always start with a complimentary 15-minute consultation, in person or by video." },
  { q: "What is the cancellation policy?", a: "Life happens. We just ask for 24 hours' notice; last-minute cancellations may be subject to a 50% fee." },
  { q: "What should I bring?", a: "Yourself, and a few reference images if you have them. Skip the freshly-washed hair for color days." },
];

function BookPage() {
  const [service, setService] = useState<string>("");
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const allServices = useMemo(() => services.flatMap((g) => g.items.map((i) => `${g.category} · ${i.name}`)), []);
  const days = useMemo(() => {
    const arr: { d: number; label: string; dow: string }[] = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const dt = new Date(today);
      dt.setDate(today.getDate() + i);
      arr.push({
        d: i,
        label: dt.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        dow: dt.toLocaleDateString("en-US", { weekday: "short" }),
      });
    }
    return arr;
  }, []);

  const ready = service && day !== null && time;

  return (
    <>
      <section className="pt-40 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-6">Booking</div>
          <h1 className="display-xl max-w-4xl">
            Book your next <span className="italic-accent text-terracotta">appointment.</span>
          </h1>
        </div>
      </section>

      <section className="pb-24 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-10">
            {/* Step 1 */}
            <div className="bg-cream border border-border rounded-3xl p-8 lg:p-10">
              <StepHeader n="01" title="Choose a service" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-6 w-full bg-ivory border border-border rounded-2xl px-5 py-4 font-display text-xl text-espresso focus:outline-none focus:border-terracotta"
              >
                <option value="">Select a service…</option>
                {allServices.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Step 2 — calendar */}
            <div className="bg-cream border border-border rounded-3xl p-8 lg:p-10">
              <StepHeader n="02" title="Pick a day" />
              <div className="mt-6 grid grid-cols-4 sm:grid-cols-7 gap-2">
                {days.map((dd) => (
                  <button
                    key={dd.d}
                    onClick={() => setDay(dd.d)}
                    className={`rounded-2xl p-3 text-center border transition-all ${
                      day === dd.d
                        ? "bg-espresso text-ivory border-espresso"
                        : "bg-ivory border-border hover:border-terracotta text-espresso"
                    }`}
                  >
                    <div className="text-[10px] uppercase tracking-widest opacity-70">{dd.dow}</div>
                    <div className="font-display text-xl mt-1">{dd.label.split(" ")[1]}</div>
                    <div className="text-[10px] opacity-60">{dd.label.split(" ")[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 — times */}
            <div className="bg-cream border border-border rounded-3xl p-8 lg:p-10">
              <StepHeader n="03" title="Choose a time" />
              <div className="mt-6 flex flex-wrap gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`px-5 py-3 rounded-full text-sm border transition-all ${
                      time === t
                        ? "bg-terracotta text-ivory border-terracotta"
                        : "bg-ivory border-border hover:border-terracotta text-espresso"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 bg-espresso text-ivory rounded-3xl p-8 lg:p-10">
              <div className="flex items-center gap-3 eyebrow text-terracotta mb-6">
                <SparkleMark className="w-3 h-3" /> Your appointment
              </div>
              <dl className="space-y-5 text-sm">
                <Row label="Service" value={service || "—"} />
                <Row label="Day" value={day ? days[day - 1].label : "—"} />
                <Row label="Time" value={time || "—"} />
              </dl>
              <div className="mt-8 pt-6 border-t border-ivory/15 text-ivory/70 text-sm leading-relaxed">
                Deposits are only required for vivid color, extensions, and corrections.
              </div>
              <button
                disabled={!ready}
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition-colors ${
                  ready
                    ? "bg-terracotta text-ivory hover:bg-ivory hover:text-espresso"
                    : "bg-ivory/10 text-ivory/40 cursor-not-allowed"
                }`}
              >
                {ready ? "Confirm booking →" : "Complete the steps above"}
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-sand/40">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-4">Before you book</div>
          <h2 className="display-lg mb-12">
            A few good <span className="italic-accent text-terracotta">questions.</span>
          </h2>
          <div className="border-t border-border">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-2xl">{f.q}</span>
                  <span className={`text-terracotta text-2xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-500 ${openFaq === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-12 text-espresso/70 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function StepHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display italic text-terracotta text-2xl">{n}</span>
      <h2 className="font-display text-3xl lg:text-4xl">{title}</h2>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6">
      <dt className="text-ivory/50 uppercase tracking-widest text-[10px]">{label}</dt>
      <dd className="font-display text-lg text-right">{value}</dd>
    </div>
  );
}
