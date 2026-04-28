import SectionTitle from "./SectionTitle";
import { MapPin, Phone } from "lucide-react";

const Contact = () => (
  <section id="kontakt" className="relative py-28 sm:py-40">
    <div className="container">
      <SectionTitle overline="Vi ses snart" title="Kontakt & Bokning" subtitle="Slå dig ner hos oss — eller hör av dig för bokning av bord, sällskap eller event." />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a
          href="https://maps.google.com/?q=Vasavägen+9+Katrineholm"
          target="_blank"
          rel="noreferrer"
          className="reveal group p-10 rounded-3xl bg-card/60 border border-gold/20 hover:border-gold/70 hover:-translate-y-1 hover:shadow-gold-strong transition-all duration-500 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:animate-glow-pulse">
            <MapPin className="w-6 h-6 text-primary-foreground" />
          </div>
          <p className="mt-6 font-display text-[0.65rem] tracking-[0.4em] uppercase text-gold">Besök oss</p>
          <p className="mt-3 font-serif-light text-2xl sm:text-3xl text-foreground group-hover:text-gold transition-colors">
            Vasavägen 9
          </p>
          <p className="font-serif-light text-xl text-foreground/70">Katrineholm</p>
        </a>

        <a
          href="tel:0790164148"
          className="reveal reveal-delay-1 group p-10 rounded-3xl bg-card/60 border border-gold/20 hover:border-gold/70 hover:-translate-y-1 hover:shadow-gold-strong transition-all duration-500 text-center"
        >
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:animate-glow-pulse">
            <Phone className="w-6 h-6 text-primary-foreground" />
          </div>
          <p className="mt-6 font-display text-[0.65rem] tracking-[0.4em] uppercase text-gold">Ring för bokning</p>
          <p className="mt-3 font-serif-light text-2xl sm:text-3xl text-foreground group-hover:text-gold transition-colors">
            079-016 41 48
          </p>
          <p className="font-serif-light text-xl text-foreground/70">Öppet alla dagar</p>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
