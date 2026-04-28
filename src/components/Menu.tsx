import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { menu } from "@/data/menu";

const Menu = () => {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active)!;

  return (
    <section id="meny" className="relative py-28 sm:py-40">
      <div className="container">
        <SectionTitle overline="À la carte" title="Vår Meny" subtitle="En kulinarisk resa genom våra mest älskade rätter — varje detalj utformad för en upplevelse utöver det vanliga." />

        <div className="reveal flex flex-wrap justify-center gap-2 sm:gap-3 mb-16">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`group relative px-5 sm:px-7 py-3 rounded-full font-display text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] transition-all duration-500 ${
                active === cat.id
                  ? "bg-gradient-gold text-primary-foreground shadow-gold scale-105"
                  : "border border-gold/30 text-foreground/80 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div key={current.id} className="grid lg:grid-cols-12 gap-10 items-start animate-fade-in">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl gold-border-glow group">
              <img
                src={current.image}
                alt={current.label}
                className="w-full aspect-[4/5] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8">
                <p className="font-display text-[0.65rem] tracking-[0.4em] text-gold uppercase">Kategori</p>
                <h3 className="mt-2 font-serif-light text-4xl sm:text-5xl text-gradient-gold">{current.label}</h3>
                <p className="mt-2 italic text-foreground/75">{current.tagline}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {current.items.map((item, i) => (
              <article
                key={item.name}
                className="group relative p-7 rounded-2xl bg-card/60 backdrop-blur-sm border border-gold/15 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold-strong overflow-hidden"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-radial-gold opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h4 className="font-serif-light text-2xl text-foreground group-hover:text-gold transition-colors duration-500">{item.name}</h4>
                    <span className="font-display text-sm tracking-widest text-gold whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.desc && <p className="text-sm text-foreground/65 leading-relaxed">{item.desc}</p>}
                  <div className="mt-5 h-px w-12 bg-gradient-to-r from-gold/70 to-transparent group-hover:w-full transition-all duration-700" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="reveal mt-16 text-center font-serif-light italic text-foreground/60">
          Laktosfria alternativ finns alltid — fråga gärna personalen.
        </p>
      </div>
    </section>
  );
};

export default Menu;
