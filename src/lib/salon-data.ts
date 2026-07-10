import jodi from "@/assets/stylist-jodi.jpg";
import cheyenne from "@/assets/stylist-cheyenne.jpg";
import liz from "@/assets/stylist-liz.jpg";
import lynsie from "@/assets/stylist-lynsie.jpg";
import baylee from "@/assets/stylist-baylee.jpg";

export const stylists = [
  {
    slug: "jodi",
    name: "Jodi",
    photo: jodi,
    specialty: "Founder · Classic Cuts & Styling",
    bio: "Jodi opened Abracadabra in 2011 with a simple idea: a salon that feels like the best version of home. Sixteen years behind the chair have made her a master of the timeless cut.",
    tags: ["Precision cuts", "Silk press", "Bridal styling"],
    years: 16,
  },
  {
    slug: "cheyenne-rahne",
    name: "Cheyenne-Rahne",
    photo: cheyenne,
    specialty: "Fantasy & Vivid Color",
    bio: "Cheyenne treats color like poetry. She's built a name across the state for bold pinks, deep violets, and dreamy pastel melts that photograph like a painting.",
    tags: ["Vivid color", "Color melts", "Creative placement"],
    years: 8,
  },
  {
    slug: "liz",
    name: "Liz",
    photo: liz,
    specialty: "Curly Hair Specialist",
    bio: "Certified in DevaCurl and Rëzo methods, Liz has spent nearly a decade helping clients fall back in love with their natural texture, one curl at a time.",
    tags: ["Curly cuts", "Texture care", "Silkening"],
    years: 9,
  },
  {
    slug: "lynsie",
    name: "Lynsie",
    photo: lynsie,
    specialty: "Balayage Artist",
    bio: "Lynsie's balayage feels sun-kissed and lived-in. She's obsessed with dimension, undertones, and the kind of blonde that grows out beautifully for months.",
    tags: ["Balayage", "Lived-in blonde", "Color correction"],
    years: 11,
  },
  {
    slug: "baylee",
    name: "Baylee",
    photo: baylee,
    specialty: "Braids & Texture",
    bio: "Baylee braids like she's telling a story — fulanis, feed-ins, boho knotless, protective styles crafted with patience and a very steady hand.",
    tags: ["Knotless braids", "Boho braids", "Extensions"],
    years: 6,
  },
] as const;

export const services = [
  {
    category: "Hair",
    items: [
      { name: "Signature Haircut", price: "from $65", desc: "Consultation, shampoo, precision cut, and finish." },
      { name: "Blowout & Style", price: "from $50", desc: "A proper blowout with a hint of ceremony." },
      { name: "Special Occasion Styling", price: "from $95", desc: "Weddings, portraits, whatever the night calls for." },
    ],
  },
  {
    category: "Color",
    items: [
      { name: "Balayage", price: "from $185", desc: "Hand-painted dimension, lived-in and low maintenance." },
      { name: "Highlights", price: "from $150", desc: "Foils, teasy-lights, or a classic full head." },
      { name: "Fantasy & Vivid Color", price: "from $220", desc: "Pinks, violets, coppers, melts — booked with consultation." },
      { name: "Color Correction", price: "quoted", desc: "For the delicate work — always begins with a chat." },
    ],
  },
  {
    category: "Texture",
    items: [
      { name: "Curly Cut", price: "from $85", desc: "Dry-cut in curl form, Rëzo & DevaCurl trained." },
      { name: "Knotless Braids", price: "from $180", desc: "Small to jumbo, with as much length as you'd like." },
      { name: "Hand-tied Extensions", price: "quoted", desc: "Consultation and color match included." },
    ],
  },
  {
    category: "Beauty",
    items: [
      { name: "Manicure", price: "from $45", desc: "Nourishing, unhurried, and beautifully finished." },
      { name: "Brow Shaping", price: "from $28", desc: "Wax, tweeze, and tint in twenty quiet minutes." },
      { name: "Waxing", price: "from $18", desc: "Face and body — always warm, always gentle." },
      { name: "Permanent Makeup", price: "from $325", desc: "Microblading and lip blush by appointment." },
    ],
  },
] as const;

export const reviews = [
  {
    quote: "Cheyenne did an amazing job with my bold colors. I finally look like myself again.",
    name: "Marisol P.",
    tag: "Fantasy color",
  },
  {
    quote: "Everyone in this place makes you feel like family the second you walk in.",
    name: "Danielle H.",
    tag: "Loyal client, 4 yrs",
  },
  {
    quote: "The salon is spotless, welcoming, and every detail feels considered.",
    name: "Grace R.",
    tag: "First visit",
  },
  {
    quote: "Booking online was so easy. I got exactly the stylist I wanted, same week.",
    name: "Talia K.",
    tag: "Balayage",
  },
  {
    quote: "Liz transformed my curls. I didn't know my hair could look this good in its own shape.",
    name: "Amara J.",
    tag: "Curly cut",
  },
  {
    quote: "The atmosphere is cozy and fun without ever feeling less than professional.",
    name: "Sasha M.",
    tag: "Highlights",
  },
] as const;
