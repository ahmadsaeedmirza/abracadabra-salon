import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoUrl from "../../assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/studio", label: "Our Studio" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-ivory/85 backdrop-blur-md border-b border-border/60"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="shrink-0 flex items-center">
          <img src={logoUrl} alt="Abracadabra Salon" className="h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-espresso/75 hover:text-terracotta transition-colors relative py-1"
              activeProps={{
                className:
                  "text-terracotta after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-terracotta",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="hidden md:inline-flex items-center gap-2 bg-espresso text-ivory px-5 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta transition-colors"
          >
            Book Now
            <span aria-hidden>→</span>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-espresso"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-px bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-border/60">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-2xl text-espresso"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 bg-espresso text-ivory px-5 py-3 rounded-full text-sm"
            >
              Book Now →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
