import { createFileRoute } from "@tanstack/react-router";
import { SparkleMark } from "@/components/site/SparkleMark";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abracadabra Salon" },
      { name: "description", content: "Visit us in Virginia. Address, hours, phone, and parking information." },
      { property: "og:title", content: "Contact — Abracadabra Salon" },
      { property: "og:description", content: "We'd love to see you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow mb-6">Come find us</div>
          <h1 className="display-xl max-w-4xl">
            We'd love to <span className="italic-accent text-terracotta">see you.</span>
          </h1>
        </div>
      </section>

      <section className="pb-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          {/* Map */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-auto lg:min-h-[560px] border border-border">
            <iframe
              title="Salon location map"
              className="w-full h-full grayscale-[30%] contrast-95 sepia-[15%]"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-77.6710%2C38.0290%2C-77.3710%2C38.2290&layer=mapnik"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 bg-ivory rounded-2xl px-5 py-4 shadow-lg max-w-[240px]">
              <div className="flex items-center gap-2 eyebrow mb-1">
                <SparkleMark className="w-3 h-3 text-terracotta" /> Visit
              </div>
              <div className="font-display text-lg leading-snug">128 Willow Lane, Suite 3</div>
              <div className="text-xs text-espresso/60 mt-1">Virginia, USA</div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-10">
            <Block label="Address">
              128 Willow Lane, Suite 3<br />
              Virginia, USA
            </Block>
            <Block label="Hours">
              <ul className="space-y-1">
                <li className="flex justify-between"><span>Tuesday – Friday</span><span className="tabular-nums">10 – 8</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="tabular-nums">9 – 6</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="tabular-nums">11 – 4</span></li>
                <li className="flex justify-between text-espresso/40"><span>Monday</span><span>Closed</span></li>
              </ul>
            </Block>
            <Block label="Contact">
              <a href="tel:+15555550100" className="block hover:text-terracotta">(555) 555-0100</a>
              <a href="mailto:hello@abracadabra-salon.com" className="block hover:text-terracotta">hello@abracadabra-salon.com</a>
            </Block>
            <Block label="Social">
              <div className="flex flex-wrap gap-3">
                {["Instagram", "Facebook", "Pinterest"].map((s) => (
                  <a key={s} href="#" className="border border-border rounded-full px-4 py-2 text-sm hover:border-terracotta hover:text-terracotta transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </Block>
            <Block label="Parking">
              Free two-hour street parking on Willow Lane, plus a small lot behind the
              building shared with the bakery next door.
            </Block>
          </div>
        </div>
      </section>

      <section className="py-24 bg-espresso text-ivory">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <SparkleMark className="w-6 h-6 text-terracotta mx-auto mb-6" />
          <h2 className="display-lg text-ivory">
            The kettle's <span className="italic-accent text-terracotta">on.</span>
          </h2>
          <p className="mt-6 text-ivory/70">
            Come in for a walk-through, meet your stylist, and see if we're the right fit.
          </p>
        </div>
      </section>
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-3">{label}</div>
      <div className="font-display text-2xl text-espresso leading-snug">{children}</div>
    </div>
  );
}
