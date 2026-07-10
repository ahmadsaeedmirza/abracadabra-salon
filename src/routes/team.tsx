import { createFileRoute, Link } from "@tanstack/react-router";
import { stylists } from "@/lib/salon-data";
import { SparkleMark } from "@/components/site/SparkleMark";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Abracadabra Salon" },
      { name: "description", content: "The artists behind Abracadabra Salon — five stylists, one very warm room." },
      { property: "og:title", content: "Meet the Team — Abracadabra Salon" },
      { property: "og:description", content: "Meet the artists behind the magic." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">The team</div>
            <h1 className="display-xl">
              Meet the artists behind <span className="italic-accent text-terracotta">the magic.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-espresso/70 leading-relaxed">
              Five stylists, one very warm room. Each of us has a specialty — but we all
              share the same instinct for making people feel a little more themselves
              when they leave.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
          {stylists.map((s, i) => (
            <article
              key={s.slug}
              className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] grain">
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" width={800} height={1000} loading="lazy" />
                </div>
              </div>

              <div className="lg:col-span-6 lg:px-8">
                <div className="flex items-center gap-3 eyebrow mb-4">
                  <SparkleMark className="w-3 h-3 text-terracotta" />
                  0{i + 1} · {s.years} yrs behind the chair
                </div>
                <h2 className="display-lg">{s.name}</h2>
                <div className="text-terracotta font-display italic text-xl mt-2">{s.specialty}</div>

                <p className="mt-8 text-espresso/75 text-lg leading-relaxed max-w-lg">{s.bio}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="border border-border rounded-full px-4 py-1.5 text-xs text-espresso/70 bg-cream">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-6">
                  <Link
                    to="/book"
                    className="inline-flex items-center gap-2 bg-espresso text-ivory px-6 py-3 rounded-full text-sm hover:bg-terracotta transition-colors"
                  >
                    Book with {s.name} →
                  </Link>
                  <div className="flex items-center gap-4 text-espresso/60 text-xs">
                    <a href="#" className="hover:text-terracotta">Instagram</a>
                    <a href="#" className="hover:text-terracotta">Portfolio</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
