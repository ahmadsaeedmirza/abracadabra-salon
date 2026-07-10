import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import galleryBlonde from "@/assets/gallery-blonde.jpg";
import galleryVivid from "@/assets/gallery-vivid.jpg";
import galleryBraids from "@/assets/gallery-braids.jpg";
import galleryCurly from "@/assets/gallery-curly.jpg";
import galleryBrunette from "@/assets/gallery-brunette.jpg";
import galleryNails from "@/assets/gallery-nails.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Abracadabra Salon" },
      { name: "description", content: "Real clients, real transformations. Browse blonding, vivids, brunettes, braids, and curls." },
      { property: "og:title", content: "Gallery — Abracadabra Salon" },
      { property: "og:description", content: "Real clients. Real transformations." },
    ],
  }),
  component: GalleryPage,
});

type Cat = "All" | "Blonding" | "Vivids" | "Brunettes" | "Braids" | "Curly Hair";

const images: { src: string; cat: Exclude<Cat, "All">; span?: string; alt: string }[] = [
  { src: galleryBlonde, cat: "Blonding", span: "row-span-2", alt: "Sun-kissed balayage" },
  { src: galleryVivid, cat: "Vivids", alt: "Pink and violet melt" },
  { src: galleryBraids, cat: "Braids", span: "row-span-2", alt: "Golden hour braid" },
  { src: galleryBrunette, cat: "Brunettes", alt: "Glossy brunette dimension" },
  { src: galleryCurly, cat: "Curly Hair", span: "row-span-2", alt: "Defined natural curls" },
  { src: galleryNails, cat: "Blonding", alt: "Nude polished nails" },
  { src: galleryBlonde, cat: "Blonding", alt: "Blonde detail" },
  { src: galleryVivid, cat: "Vivids", span: "row-span-2", alt: "Neon transformation" },
  { src: galleryBrunette, cat: "Brunettes", alt: "Caramel highlights" },
  { src: galleryBraids, cat: "Braids", alt: "Fulani braid detail" },
  { src: galleryCurly, cat: "Curly Hair", alt: "Curl close-up" },
];

const cats: Cat[] = ["All", "Blonding", "Vivids", "Brunettes", "Braids", "Curly Hair"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const shown = active === "All" ? images : images.filter((i) => i.cat === active);

  return (
    <>
      <section className="pt-40 pb-16 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow mb-6">The gallery</div>
            <h1 className="display-xl">
              Real clients.<br />
              Real <span className="italic-accent text-terracotta">transformations.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-espresso/70 leading-relaxed">
              Every image here left our chair on a very ordinary day. No filters,
              no retouching — just the work.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm transition-colors ${
                  active === c
                    ? "bg-espresso text-ivory"
                    : "bg-cream text-espresso/70 hover:text-espresso border border-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense gap-4 lg:gap-5 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[240px]">
            {shown.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group ${img.span ?? ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-ivory text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
