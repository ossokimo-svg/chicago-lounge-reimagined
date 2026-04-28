import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#meny", label: "Meny" },
  { href: "#om", label: "Om oss" },
  { href: "#event", label: "Event" },
  { href: "#aktiviteter", label: "Aktiviteter" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-green-deep/85 backdrop-blur-xl border-b border-gold/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={logo} alt="Chicago Lounge" className="h-10 sm:h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs uppercase tracking-[0.2em] text-foreground/85 hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-display text-xs uppercase tracking-[0.2em] shadow-gold hover:shadow-gold-strong transition-all duration-500 hover:scale-105"
        >
          Boka
        </a>
        <button
          aria-label="Meny"
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold p-2"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-gold transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-gold transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-green-deep/95 backdrop-blur-xl border-t border-gold/20 mt-3 animate-fade-in">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-sm uppercase tracking-[0.2em] text-foreground/90 hover:text-gold">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setOpen(false)} className="self-start px-6 py-2.5 rounded-full bg-gradient-gold text-primary-foreground font-display text-xs uppercase tracking-[0.2em]">Boka</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
