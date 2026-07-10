import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/lib/salon-data";
import { SparkleMark } from "@/components/site/SparkleMark";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Abracadabra Salon" },
      { name: "description", content: "Haircuts, custom color, fantasy color, braids, nails, and beauty — designed around you." },
      { property: "og:title", content: "Services — Abracadabra Salon" },
      { property: "og:description", content: "Services designed around you." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [open, setOpen] = useState<string | null>(services[0].items[0].name);

  return (
    <>
      <section className="pt-40 pb-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-6">The menu</div>
          <h1 className="display-xl max-w-4xl">
            Services designed <span className="italic-accent text-terracotta">around you.</span>
          </h1>
          <p className="mt-8 max-w-xl text-espresso/70 text-lg leading-relaxed">
            Every appointment begins with an unhurried consultation. Pricing starts
            here — final quotes are set together, in person.
          </p>
        </div>
      </section>

      <section className="pb-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-24">
          {services.map((group, gi) => (
            <div key={group.category} className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                <div className="eyebrow mb-4">0{gi + 1}</div>
                <h2 className="display-lg">{group.category}</h2>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-border">
                  {group.items.map((item) => {
                    const key = `${group.category}-${item.name}`;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="border-b border-border">
                        <button
                          onClick={() => setOpen(isOpen ? null : key)}
                          className="w-full flex items-baseline justify-between gap-6 py-7 text-left group"
                        >
                          <div className="flex items-baseline gap-4 flex-1">
                            <SparkleMark className={`w-3 h-3 shrink-0 translate-y-1 transition-colors ${isOpen ? "text-terracotta" : "text-espresso/25 group-hover:text-terracotta"}`} />
                            <span className="font-display text-3xl lg:text-4xl leading-tight">{item.name}</span>
                          </div>
                          <div className="text-sm text-espresso/60 shrink-0 tabular-nums">{item.price}</div>
                        </button>
                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pb-8 pl-7 pr-4 max-w-2xl">
                              <p className="text-espresso/70 leading-relaxed">{item.desc}</p>
                              <Link to="/book" className="inline-block mt-5 text-sm border-b border-espresso pb-0.5 hover:text-terracotta hover:border-terracotta">
                                Book this →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-espresso text-ivory">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="display-lg text-ivory">Not sure where to start?</h2>
          <p className="mt-6 text-ivory/70 max-w-md mx-auto">
            Book a complimentary 15-minute consultation and we'll build the right
            appointment together.
          </p>
          <Link to="/book" className="mt-10 inline-flex items-center gap-2 bg-terracotta text-ivory px-7 py-4 rounded-full text-sm hover:bg-ivory hover:text-espresso transition-colors">
            Start a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
