import { createFileRoute, Link } from "@tanstack/react-router";
import heroSalon from "@/assets/new-hero.png";
import galleryVivid from "@/assets/gallery-vivid.jpg";
import salonDetail from "@/assets/salon-detail.jpg";
import productsImg from "@/assets/products.jpg";
import { SparkleMark } from "@/components/site/SparkleMark";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Our Studio — Abracadabra Salon" },
      { name: "description", content: "Learn about the story, space, creative philosophy, and collective expertise behind Abracadabra Salon." },
      { property: "og:title", content: "Our Studio — Abracadabra Salon" },
      { property: "og:description", content: "A space for creative transformation and collective craft." },
    ],
  }),
  component: StudioPage,
});

const studioSections = [
  {
    slug: "our-story",
    subtitle: "Est. 2011",
    title: "The Story of Abracadabra",
    focus: "A Decade of Handcrafted Design",
    bio: "Abracadabra was founded in 2011 as an alternative to clinical, high-stress salon environments. Our vision was simple: to construct a home-like sanctuary where guests feel completely themselves. Over the years, we have grown into a cozy destination for creative self-expression and relaxed hair transformation in Virginia.",
    photo: heroSalon,
    tags: ["Est. 2011", "Handcrafted Space", "Community Focus"],
  },
  {
    slug: "philosophy",
    subtitle: "Bespoke Artistry",
    title: "Hair as a Creative Canvas",
    focus: "From Precision Cuts to Vivid Melts",
    bio: "We believe hair styling is a form of fine art and self-expression. Our approach combines modern techniques with your individual aesthetic, specializing in lived-in dimensional color, custom-tailored curls, protective texture styling, and vivid fantasy highlights. We don't use cookie-cutter formulas — every appointment starts with an unhurried consultation.",
    photo: galleryVivid,
    tags: ["Creative Color", "Texture Specialists", "Bespoke Consulting"],
  },
  {
    slug: "environment",
    subtitle: "A Warm Retreat",
    title: "Designed to Feel Like Home",
    focus: "Terracotta, Greenery & Natural Light",
    bio: "A premium service requires a peaceful setting. Our studio features warm terracotta tones, natural sunlight, organic textures, lush greenery, and calming music. From the comfortable seating to the curated coffee and tea selection, every detail is considered to make your visit feel like a relaxing retreat.",
    photo: salonDetail,
    tags: ["Bohemian Design", "Relaxed Vibes", "Sensory Comfort"],
  },
  {
    slug: "collective-expertise",
    subtitle: "Collective Craft",
    title: "A Shared Creative Passion",
    focus: "Continuous Learning & Mastery",
    bio: "Our studio operates as a creative collective. By focusing on our team's shared knowledge rather than individual boundaries, we foster an environment of continuous education, shared techniques, and collaborative mastery. We share resources, ideas, and training to ensure you receive exceptional care during every visit.",
    photo: productsImg,
    tags: ["Shared Expertise", "Inclusive Culture", "Premium Standard"],
  },
];

function StudioPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">Our Studio</div>
            <h1 className="display-xl">
              A space for creative <span className="italic-accent text-terracotta">transformation.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pt-6">
            <p className="text-espresso/70 leading-relaxed">
              One warm room in Virginia, built on the values of creative self-expression,
              collective craft, and community-minded care.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
          {studioSections.map((s, i) => (
            <article
              key={s.slug}
              className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] grain">
                  <img src={s.photo} alt={s.title} className="w-full h-full object-cover" width={800} height={1000} loading="lazy" />
                </div>
              </div>

              <div className="lg:col-span-6 lg:px-8">
                <div className="flex items-center gap-3 eyebrow mb-4">
                  <SparkleMark className="w-3 h-3 text-terracotta" />
                  0{i + 1} · {s.subtitle}
                </div>
                <h2 className="display-lg">{s.title}</h2>
                <div className="text-terracotta font-display italic text-xl mt-2">{s.focus}</div>

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
                    Book an Appointment →
                  </Link>
                  <div className="flex items-center gap-4 text-espresso/60 text-xs">
                    <a href="#" className="hover:text-terracotta">Instagram</a>
                    <a href="#" className="hover:text-terracotta">Gallery</a>
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
