import event from "@/assets/event.jpg";
import SectionTitle from "./SectionTitle";

const items = [
  { t: "Födelsedagar", d: "Fira ditt år omgiven av guld och grönt." },
  { t: "Kalas", d: "Skräddarsydda menyer för stora & små." },
  { t: "Bröllop", d: "En dröm i 800 kvm av elegans." },
  { t: "Företagsevent", d: "Konferens, mingel och bankett." },
];

const Event = () => (
  <section id="event" className="relative py-28 sm:py-40 overflow-hidden">
    <div className="container">
      <SectionTitle overline="800 kvm av elegans" title="Event & Fest" subtitle="Vår lokal förvandlas till den perfekta scenen för dina viktigaste ögonblick." />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal relative group overflow-hidden rounded-3xl gold-border-glow">
          <img
            src={event}
            alt="Lyxig festlokal"
            className="w-full aspect-[4/3] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-green-deep/70 via-transparent to-transparent" />
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-green-deep/70 backdrop-blur border border-gold/40">
            <span className="font-display text-[0.65rem] tracking-[0.3em] text-gold uppercase">800 m²</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <div
              key={it.t}
              className={`reveal reveal-delay-${(i % 3) + 1} group p-8 rounded-2xl bg-card/50 border border-gold/15 hover:border-gold/60 hover:-translate-y-1 transition-all duration-500 hover:shadow-gold`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center mb-5 shadow-gold group-hover:animate-glow-pulse">
                <span className="font-display text-primary-foreground text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-serif-light text-3xl text-foreground group-hover:text-gold transition-colors">{it.t}</h3>
              <p className="mt-3 text-foreground/65 leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Event;
