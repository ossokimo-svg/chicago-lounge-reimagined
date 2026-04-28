import logo from "@/assets/logo.png";
import Ornament from "./Ornament";

const Footer = () => (
  <footer className="relative pt-20 pb-10 border-t border-gold/20 bg-green-deep/60">
    <div className="container text-center">
      <img src={logo} alt="Chicago Lounge" className="mx-auto h-24 w-auto" />
      <Ornament className="mt-8" />
      <p className="mt-8 font-serif-light italic text-lg text-foreground/70 max-w-xl mx-auto">
        En plats där varje detalj är gjord med kärlek — café, restaurang och lounge i hjärtat av Katrineholm.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 font-display text-[0.65rem] tracking-[0.3em] uppercase text-foreground/60">
        <a href="#meny" className="hover:text-gold transition-colors">Meny</a>
        <a href="#om" className="hover:text-gold transition-colors">Om oss</a>
        <a href="#event" className="hover:text-gold transition-colors">Event</a>
        <a href="#aktiviteter" className="hover:text-gold transition-colors">Aktiviteter</a>
        <a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a>
      </div>

      <div className="gold-divider mt-12" />
      <p className="mt-6 text-xs tracking-widest uppercase text-foreground/40">
        © {new Date().getFullYear()} Chicago Lounge — Café & Restaurang · Vasavägen 9, Katrineholm
      </p>
    </div>
  </footer>
);

export default Footer;
