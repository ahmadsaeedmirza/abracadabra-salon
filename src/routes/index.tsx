import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/new-hero.png";
import salonDetail from "@/assets/salon-detail.jpg";
import productsImg from "@/assets/products.jpg";
import galleryBlonde from "@/assets/gallery-blonde.jpg";
import galleryVivid from "@/assets/gallery-vivid.jpg";
import galleryBraids from "@/assets/gallery-braids.jpg";
import galleryCurly from "@/assets/gallery-curly.jpg";
import galleryBrunette from "@/assets/gallery-brunette.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";
import { reviews } from "@/lib/salon-data";
import { SparkleMark } from "@/components/site/SparkleMark";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abracadabra Salon — Where Hair Becomes Art" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});



const values = [
  { t: "Welcoming atmosphere", d: "Warm greetings, comfortable chairs, better coffee than you'd expect." },
  { t: "Talented artists", d: "A small, hand-picked team with real specialties." },
  { t: "Personalized consultations", d: "Every appointment starts with an unhurried conversation." },
  { t: "Easy booking", d: "Reserve online in under a minute, at any hour." },
  { t: "Cozy environment", d: "Terracotta walls, plants, natural light, gentle music." },
  { t: "Creative transformations", d: "Bold change or gentle refresh — always thoughtful." },
];

const reasons = [
  { name: "Creative Color Expertise", detail: "From dimensional balayage to custom fantasy vivids, we treat hair color like fine art." },
  { name: "Curl & Texture Specialists", detail: "Expertly trained artists dedicated to celebrating, cutting, and nurturing natural textures." },
  { name: "Welcoming Atmosphere", detail: "A warm bohemian space with plants, terracotta tones, natural light, and premium coffee." },
  { name: "Personalized Consultations", detail: "Every service begins with an unhurried, collaborative chat to fully understand your hair goals." },
  { name: "Premium Products", detail: "A highly curated shelf of high-performing, clean ingredients from Oribe, R+Co, and Olaplex." },
  { name: "Easy Booking Experience", detail: "Reserve and manage your appointments online in under a minute, at any time." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 lg:pt-16 pb-10">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 xl:col-span-5 rise">
              <div className="eyebrow mb-6 flex items-center gap-3">
                <span className="w-6 hairline" /> Abracadabra Salon · Est. 2011
              </div>
              <h1 className="display-xl">
                Where hair<br />
                becomes <span className="italic-accent text-terracotta">art.</span>
              </h1>
              <p className="mt-8 max-w-md text-lg text-espresso/70 leading-relaxed">
                Creative color, expert styling, and a salon experience that feels
                like home — tucked into a warm corner of Virginia.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-espresso text-ivory px-7 py-4 rounded-full text-sm font-medium hover:bg-terracotta transition-colors"
                >
                  Book Appointment <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 text-espresso px-2 py-4 text-sm font-medium border-b border-espresso hover:text-terracotta hover:border-terracotta transition"
                >
                  Explore Our Studio
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-5 lg:col-start-7 xl:col-start-7 relative">
              <div className="relative overflow-hidden rounded-t-[180px] rounded-b-2xl aspect-[4/5] lg:aspect-[5/6] grain">
                <img
                  src={heroImg}
                  alt="Warm bohemian interior of Abracadabra Salon"
                  className="w-full h-full object-cover"
                  width={1200}
                  height={800}
                />
              </div>

              {/* Floating review badge */}
              <div className="absolute -bottom-6 -left-4 lg:-left-10 bg-ivory border border-border rounded-2xl px-5 py-4 shadow-[0_20px_50px_-20px_rgba(52,43,40,0.25)] max-w-[240px]">
                <div className="text-terracotta text-sm tracking-widest">★★★★★</div>
                <div className="mt-2 text-xs text-espresso/70 leading-snug">
                  Loved by hundreds of clients in Virginia.
                </div>
              </div>

              {/* Sparkle accent */}
              <SparkleMark className="hidden lg:block absolute -top-6 -left-6 w-10 h-10 text-terracotta/50" />
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 bg-sand/40 mt-16 py-5 overflow-hidden">
          <div className="flex marquee-track gap-14 text-espresso/70 font-display italic text-2xl whitespace-nowrap">
            {[...Array(2)].flatMap((_, r) =>
              ["Vivid Color", "✦", "Balayage", "✦", "Curly Cuts", "✦", "Boho Braids", "✦", "Bridal", "✦", "Fantasy Melts", "✦", "Extensions", "✦"].map((w, i) => (
                <span key={`${r}-${i}`}>{w}</span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">01 — Services</div>
              <h2 className="display-lg">
                A small menu,<br />
                <span className="italic-accent text-terracotta">deeply</span> practiced.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="text-espresso/70 text-lg leading-relaxed">
                We keep our offering focused so we can do each thing beautifully. Every
                appointment begins with an unhurried consultation — because good hair
                starts with a good conversation.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {/* Row 1: Fantasy Color & Haircuts */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Fantasy & Vivid Color - Large visual priority */}
              <div className="lg:col-span-7 group relative bg-cream border border-border/80 rounded-3xl p-8 lg:p-12 flex flex-col justify-between overflow-hidden hover:shadow-[0_20px_50px_-20px_rgba(167,109,91,0.15)] transition-all duration-500">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
                  <img src={galleryVivid} alt="Fantasy & Vivid Color" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
                </div>
                
                <div className="relative z-10 flex items-start justify-between">
                  <span className="eyebrow text-terracotta border border-terracotta/20 px-3 py-1 rounded-full text-[10px] bg-ivory">Creative Specialty</span>
                  <SparkleMark className="w-5 h-5 text-terracotta/60 group-hover:rotate-45 transition-transform duration-500" />
                </div>

                <div className="relative z-10 mt-20 lg:mt-32">
                  <div className="h-px bg-terracotta/30 w-16 mb-6 group-hover:w-24 transition-all duration-500" />
                  <h3 className="font-display text-4xl lg:text-5xl leading-tight text-espresso group-hover:text-terracotta transition-colors duration-300">
                    Fantasy & Vivid Color
                  </h3>
                  <p className="mt-4 text-base text-espresso/70 leading-relaxed max-w-lg">
                    Pinks, deep violets, coppers, and dreamy pastel melts. Custom hand-painted dimensions crafted to photograph like a painting.
                  </p>
                </div>
              </div>

              {/* Haircuts & Styling */}
              <div className="lg:col-span-5 group relative bg-ivory border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:bg-cream/60 transition-all duration-500">
                <div className="relative z-10 flex items-start justify-between">
                  <span className="eyebrow text-espresso/50 border border-border px-3 py-1 rounded-full text-[10px] bg-cream">Signature Service</span>
                  <SparkleMark className="w-4 h-4 text-terracotta/40 group-hover:text-terracotta transition-colors" />
                </div>
                
                <div className="mt-12 overflow-hidden rounded-2xl aspect-[16/9] border border-border/40 pointer-events-none">
                  <img src={galleryBlonde} alt="Haircuts & Styling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-3xl leading-tight text-espresso">
                    Haircuts & Styling
                  </h3>
                  <p className="mt-3 text-sm text-espresso/65 leading-relaxed">
                    Precision cuts and custom finishes tailored to your texture, crafted to hold their organic shape all week long.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Custom Color & Braids */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Custom Color */}
              <div className="lg:col-span-5 group relative bg-ivory border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:bg-cream/60 transition-all duration-500">
                <div className="relative z-10 flex items-start justify-between">
                  <span className="eyebrow text-espresso/50 border border-border px-3 py-1 rounded-full text-[10px] bg-cream">Most Requested</span>
                  <SparkleMark className="w-4 h-4 text-terracotta/40 group-hover:text-terracotta transition-colors" />
                </div>

                <div className="mt-20">
                  <div className="h-px bg-border w-12 mb-4" />
                  <h3 className="font-display text-3xl leading-tight text-espresso">
                    Custom Color
                  </h3>
                  <p className="mt-3 text-sm text-espresso/65 leading-relaxed">
                    Dimensional balayage, low-maintenance lived-in blondes, and root retouches tailored to grow out beautifully for months.
                  </p>
                </div>
              </div>

              {/* Braids & Texture */}
              <div className="lg:col-span-7 group relative bg-cream border border-border/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:shadow-[0_20px_50px_-20px_rgba(167,109,91,0.1)] transition-all duration-500">
                <div className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none">
                  <img src={galleryBraids} alt="Braids & Texture" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <span className="eyebrow text-terracotta border border-terracotta/20 px-3 py-1 rounded-full text-[10px] bg-ivory">Client Favorite</span>
                  <SparkleMark className="w-4 h-4 text-terracotta/60 group-hover:text-terracotta transition-colors" />
                </div>

                <div className="relative z-10 mt-20 lg:mt-24">
                  <div className="h-px bg-terracotta/30 w-16 mb-4" />
                  <h3 className="font-display text-3xl lg:text-4xl leading-tight text-espresso">
                    Braids & Texture
                  </h3>
                  <p className="mt-3 text-sm text-espresso/70 leading-relaxed max-w-md">
                    Knotless braids, boho feed-ins, and extensions created with patience, detail, and meticulous precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: Nails & Brows */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Nails & Beauty */}
              <div className="lg:col-span-6 group relative bg-ivory border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:bg-cream/60 transition-all duration-500">
                <div className="relative z-10 flex items-start justify-between">
                  <span className="eyebrow text-espresso/50 border border-border px-3 py-1 rounded-full text-[10px] bg-cream">Bespoke Care</span>
                  <SparkleMark className="w-4 h-4 text-terracotta/40 group-hover:text-terracotta transition-colors" />
                </div>

                <div className="mt-12 overflow-hidden rounded-2xl aspect-[21/9] border border-border/40 pointer-events-none">
                  <img src={galleryNails} alt="Nails & Beauty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="mt-8">
                  <h3 className="font-display text-3xl leading-tight text-espresso">
                    Nails & Beauty
                  </h3>
                  <p className="mt-3 text-sm text-espresso/65 leading-relaxed">
                    Nourishing, slow manicures and gentle hand care sessions designed for clean, minimal aesthetic perfection.
                  </p>
                </div>
              </div>

              {/* Brows & Permanent Makeup */}
              <div className="lg:col-span-6 group relative bg-cream border border-border/80 rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden hover:shadow-[0_20px_50px_-20px_rgba(167,109,91,0.1)] transition-all duration-500">
                <div className="relative z-10 flex items-start justify-between">
                  <span className="eyebrow text-espresso/50 border border-border px-3 py-1 rounded-full text-[10px] bg-ivory">Fine Detail</span>
                  <SparkleMark className="w-4 h-4 text-terracotta/40 group-hover:text-terracotta transition-colors" />
                </div>

                <div className="mt-20 lg:mt-24">
                  <div className="h-px bg-terracotta/30 w-16 mb-4" />
                  <h3 className="font-display text-3xl leading-tight text-espresso">
                    Brows & Permanent Makeup
                  </h3>
                  <p className="mt-3 text-sm text-espresso/65 leading-relaxed max-w-md">
                    Precision brow shaping, soft tinting, and microblading crafted by appointment for effortless, daily-wear definition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-end">
            <Link to="/services" className="text-sm border-b border-espresso pb-1 hover:text-terracotta hover:border-terracotta">
              View the full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ABRACADABRA */}
      <section className="py-28 bg-sand/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div>
              <div className="eyebrow mb-4">02 — The Studio</div>
              <h2 className="display-lg max-w-2xl">
                Why Choose <span className="italic-accent text-terracotta">Abracadabra.</span>
              </h2>
            </div>
            <Link to="/studio" className="text-sm border-b border-espresso pb-1 self-start hover:text-terracotta hover:border-terracotta">
              Explore our studio →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {reasons.map((r, i) => (
              <div
                key={r.name}
                className="group bg-ivory p-8 lg:p-10 min-h-[240px] flex flex-col justify-between hover:bg-cream transition-colors"
              >
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-espresso/50">0{i + 1}</span>
                  <SparkleMark className="w-4 h-4 text-terracotta/60 group-hover:text-terracotta transition-colors" />
                </div>
                <div className="mt-16">
                  <h3 className="font-display text-3xl leading-tight">{r.name}</h3>
                  <p className="mt-3 text-sm text-espresso/65 leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS LOVE */}
      <section className="py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <div className="eyebrow mb-4">03 — Why clients stay</div>
              <h2 className="display-lg">
                A little bit of <span className="italic-accent text-terracotta">magic,</span> a lot of care.
              </h2>
              <div className="mt-10 relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm">
                <img src={salonDetail} alt="Cozy salon corner detail" className="w-full h-full object-cover" width={1200} height={1400} loading="lazy" />
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {values.map((v, i) => (
                <div key={v.t}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-terracotta text-xl italic">0{i + 1}</span>
                    <span className="flex-1 hairline" />
                  </div>
                  <h3 className="font-display text-2xl leading-tight">{v.t}</h3>
                  <p className="mt-3 text-sm text-espresso/65 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE — small, elegant */}
      <section className="py-24 bg-espresso text-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative overflow-hidden rounded-3xl aspect-[7/5]">
            <img src={productsImg} alt="Professional salon products" className="w-full h-full object-cover" width={1400} height={900} loading="lazy" />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="eyebrow text-terracotta mb-4">04 — Shelf</div>
            <h2 className="display-lg text-ivory">
              The products we <span className="italic-accent">actually</span> reach for.
            </h2>
            <p className="mt-6 text-ivory/70 leading-relaxed">
              A small, edited shelf of the professional lines we trust with our own hair —
              Oribe, R+Co, Olaplex, and a few thoughtful independents.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Oribe", "R+Co", "Olaplex", "Davines", "IGK"].map((b) => (
                <span key={b} className="border border-ivory/25 rounded-full px-4 py-1.5 text-xs text-ivory/80">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM / MASONRY */}
      <section className="py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="eyebrow mb-4">05 — @abracadabra.salon</div>
              <h2 className="display-lg max-w-xl">From the chair, <span className="italic-accent text-terracotta">to the feed.</span></h2>
            </div>
            <a href="#" className="text-sm border-b border-espresso pb-1 self-start hover:text-terracotta hover:border-terracotta">
              Follow along →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <img src={galleryBlonde} className="rounded-xl w-full aspect-[3/4] object-cover" alt="Blonde balayage" loading="lazy" />
            <img src={galleryVivid} className="rounded-xl w-full aspect-[3/4] object-cover md:mt-8" alt="Vivid color" loading="lazy" />
            <img src={galleryBraids} className="rounded-xl w-full aspect-[3/4] object-cover" alt="Braids" loading="lazy" />
            <img src={galleryCurly} className="rounded-xl w-full aspect-[3/4] object-cover md:mt-8" alt="Curly hair" loading="lazy" />
            <img src={galleryBrunette} className="rounded-xl w-full aspect-[3/4] object-cover md:mt-8" alt="Brunette dimension" loading="lazy" />
            <img src={galleryNails} className="rounded-xl w-full aspect-[3/4] object-cover" alt="Nails" loading="lazy" />
            <img src={salonDetail} className="rounded-xl w-full aspect-[3/4] object-cover md:mt-8" alt="Salon detail" loading="lazy" />
            <img src={heroImg} className="rounded-xl w-full aspect-[3/4] object-cover" alt="Salon interior" loading="lazy" />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-28 bg-sand/50 grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow mb-4">06 — Kind words</div>
            <h2 className="display-lg">
              See why clients <span className="italic-accent text-terracotta">keep coming back.</span>
            </h2>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-thin">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="shrink-0 snap-start w-[85%] sm:w-[420px] bg-ivory rounded-3xl p-8 lg:p-10 border border-border shadow-[0_20px_60px_-30px_rgba(52,43,40,0.2)]"
              >
                <div className="text-terracotta tracking-widest text-sm">★★★★★</div>
                <blockquote className="mt-6 font-display text-2xl leading-snug text-espresso">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between text-sm">
                  <span className="font-medium">{r.name}</span>
                  <span className="text-espresso/50 text-xs uppercase tracking-widest">{r.tag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-ivory">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <SparkleMark className="w-6 h-6 text-terracotta mx-auto mb-6" />
          <h2 className="display-xl">
            Your chair is <span className="italic-accent text-terracotta">waiting.</span>
          </h2>
          <p className="mt-6 text-lg text-espresso/70 max-w-lg mx-auto">
            Reserve online in under a minute. We'll take care of the rest.
          </p>
          <Link
            to="/book"
            className="mt-10 inline-flex items-center gap-2 bg-espresso text-ivory px-8 py-4 rounded-full text-sm hover:bg-terracotta transition-colors"
          >
            Book your appointment →
          </Link>
        </div>
      </section>
    </>
  );
}
