import { Link } from "@tanstack/react-router";
import { SparkleMark } from "./SparkleMark";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <SparkleMark className="w-5 h-5 text-terracotta" />
              <span className="font-display text-3xl">Abracadabra</span>
            </div>
            <p className="font-display italic text-3xl leading-tight max-w-md text-ivory/90">
              Where hair becomes art, and every guest becomes family.
            </p>
            <div className="mt-10 flex items-center gap-2 text-sm text-ivory/60">
              <span>★★★★★</span>
              <span>· Loved by hundreds of clients in Virginia</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow text-ivory/50 mb-5">Visit</div>
            <address className="not-italic text-sm text-ivory/80 leading-relaxed">
              128 Willow Lane<br />
              Suite 3<br />
              Virginia, USA
            </address>
          </div>

          <div className="lg:col-span-2">
            <div className="eyebrow text-ivory/50 mb-5">Hours</div>
            <ul className="text-sm text-ivory/80 leading-relaxed space-y-1">
              <li>Tue – Fri · 10 – 8</li>
              <li>Saturday · 9 – 6</li>
              <li>Sunday · 11 – 4</li>
              <li className="text-ivory/50">Monday · Closed</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow text-ivory/50 mb-5">Explore</div>
            <ul className="text-sm space-y-2">
              {[
                { to: "/team", l: "Meet the Team" },
                { to: "/services", l: "Services" },
                { to: "/gallery", l: "Gallery" },
                { to: "/book", l: "Book" },
                { to: "/contact", l: "Contact" },
              ].map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="text-ivory/80 hover:text-terracotta transition-colors">
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ivory/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Abracadabra Salon. Handcrafted with care.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-terracotta">Instagram</a>
            <a href="#" className="hover:text-terracotta">Facebook</a>
            <a href="#" className="hover:text-terracotta">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
