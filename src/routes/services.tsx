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

const categoryIntros: Record<string, string> = {
  "Hair": "Precision cuts, bespoke blowouts, and editorial finishes tailored to your texture, crafted to hold their organic shape.",
  "Color": "Lived-in dimensional balayage, highlight foils, and vibrant custom fantasy pigments created like a fine art canvas.",
  "Texture": "Curly texture methods, protective braids, and hand-tied extensions styled with meticulous patient care.",
  "Beauty": "Nourishing manicures, slow-paced hand treatments, gentle brow shaping, and bespoke permanent cosmetics.",
};

const getLuxuryLabel = (name: string): string => {
  const labels: Record<string, string> = {
    "Signature Haircut": "Signature",
    "Blowout & Style": "Essential",
    "Special Occasion Styling": "Occasion",
    "Balayage": "Most Requested",
    "Highlights": "Classic",
    "Fantasy & Vivid Color": "Creative Specialty",
    "Color Correction": "Bespoke Art",
    "Curly Cut": "Specialty Care",
    "Knotless Braids": "Protective Craft",
    "Hand-tied Extensions": "Custom Fit",
    "Manicure": "Slow Care",
    "Brow Shaping": "Fine Detail",
    "Waxing": "Essential",
    "Permanent Makeup": "Bespoke Art",
  };
  return labels[name] || "Bespoke";
};

function ServicesPage() {
  const [open, setOpen] = useState<string | null>(`${services[0].category}-${services[0].items[0].name}`);

  return (
    <>
      <section className="pt-40 pb-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="w-6 hairline" /> The Menu
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <h1 className="display-xl max-w-4xl">
                Services designed <span className="italic-accent text-terracotta">around you.</span>
              </h1>
              <p className="mt-8 max-w-xl text-espresso/70 text-lg leading-relaxed">
                Every appointment begins with an unhurried conversation. Pricing starts
                here — final quotes are set together, in person.
              </p>
            </div>
            <SparkleMark className="hidden lg:block w-12 h-12 text-terracotta/40 mr-12 animate-pulse" />
          </div>
        </div>
      </section>

      <section className="pb-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-28">
          {services.map((group, gi) => {
            const intro = categoryIntros[group.category] || "";
            return (
              <div key={group.category} className="space-y-12">
                {/* Category Header */}
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 eyebrow mb-4">
                    <SparkleMark className="w-3 h-3 text-terracotta" />
                    Category 0{gi + 1}
                  </div>
                  <h2 className="display-lg">{group.category}</h2>
                  <p className="mt-4 text-espresso/70 text-lg leading-relaxed max-w-xl">
                    {intro}
                  </p>
                  <div className="mt-8 hairline" />
                </div>

                {/* Service Cards Grid - Asymmetrical editorial alignment */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                  {group.items.map((item, i) => {
                    const key = `${group.category}-${item.name}`;
                    const isOpen = open === key;
                    
                    // Assign column spans dynamically for lookbook asymmetry
                    let gridSpanClass = "md:col-span-6";
                    if (group.items.length === 3) {
                      if (i === 0) gridSpanClass = "md:col-span-7";
                      else if (i === 1) gridSpanClass = "md:col-span-5";
                      else gridSpanClass = "md:col-span-12";
                    } else if (group.items.length === 4) {
                      if (i === 0) gridSpanClass = "md:col-span-6";
                      else if (i === 1) gridSpanClass = "md:col-span-6";
                      else if (i === 2) gridSpanClass = "md:col-span-7";
                      else gridSpanClass = "md:col-span-5";
                    }

                    return (
                      <div
                        key={key}
                        onClick={(e) => {
                          const target = e.target as HTMLElement;
                          if (!target.closest("a") && !target.closest("button.cta")) {
                            setOpen(isOpen ? null : key);
                          }
                        }}
                        className={`group bg-cream border transition-all duration-500 rounded-3xl p-8 flex flex-col justify-between hover:shadow-[0_15px_40px_-15px_rgba(167,109,91,0.12)] cursor-pointer ${
                          isOpen ? "border-terracotta/40 ring-1 ring-terracotta/5 shadow-[0_15px_30px_-10px_rgba(167,109,91,0.08)]" : "border-border/80 hover:border-terracotta/30"
                        } ${gridSpanClass}`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-6">
                            <span className={`eyebrow text-[10px] px-3 py-1 rounded-full border transition-colors ${
                              isOpen ? "bg-ivory text-terracotta border-terracotta/20" : "bg-cream text-espresso/50 border-border"
                            }`}>
                              {getLuxuryLabel(item.name)}
                            </span>
                            <button
                              onClick={() => setOpen(isOpen ? null : key)}
                              aria-label={isOpen ? "Collapse details" : "Expand details"}
                              className="cta shrink-0"
                            >
                              <SparkleMark className={`w-4 h-4 transition-all duration-500 ${isOpen ? "text-terracotta rotate-45 scale-110" : "text-espresso/25 group-hover:text-terracotta"}`} />
                            </button>
                          </div>

                          <div className="flex items-baseline justify-between gap-4">
                            <h3 className="font-display text-2xl lg:text-3xl leading-tight text-espresso transition-colors group-hover:text-terracotta duration-300">{item.name}</h3>
                            <div className="font-sans text-sm text-espresso/60 tracking-wider tabular-nums shrink-0">{item.price}</div>
                          </div>
                          
                          <p className={`mt-4 text-sm text-espresso/65 leading-relaxed transition-all duration-300 ${isOpen ? "opacity-0 max-h-0 overflow-hidden mt-0" : "opacity-100"}`}>
                            {item.desc}
                          </p>
                        </div>

                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="pt-6 border-t border-border/60 mt-6">
                              <p className="text-espresso/70 leading-relaxed text-sm">{item.desc}</p>
                              <div className="mt-6 flex items-center justify-between gap-4">
                                <Link
                                  to="/book"
                                  className="inline-flex items-center gap-2 bg-espresso text-ivory px-5 py-2.5 rounded-full text-xs font-medium hover:bg-terracotta transition-colors"
                                >
                                  Book this service <span aria-hidden>→</span>
                                </Link>
                                <button
                                  onClick={() => setOpen(null)}
                                  className="cta text-xs text-espresso/50 hover:text-terracotta border-b border-transparent hover:border-terracotta transition-colors py-1"
                                >
                                  Collapse
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-28 bg-espresso text-ivory">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <SparkleMark className="w-6 h-6 text-terracotta/60 mx-auto mb-6" />
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
