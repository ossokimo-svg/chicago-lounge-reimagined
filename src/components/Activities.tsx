import billiard from "@/assets/billiard.jpg";
import playstation from "@/assets/playstation.jpg";
import SectionTitle from "./SectionTitle";

const Activities = () => (
  <section id="aktiviteter" className="relative py-28 sm:py-40">
    <div className="container">
      <SectionTitle overline="Lounge-livet" title="Boka Aktiviteter" subtitle="Spela, tävla och njut — i en atmosfär värdig storstaden." />

      <div className="grid md:grid-cols-2 gap-8">
        <article className="reveal group relative overflow-hidden rounded-3xl border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-gold-strong">
          <div className="relative h-72 overflow-hidden">
            <img src={billiard} alt="Biljard" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/40 to-transparent" />
            <div className="absolute bottom-5 left-6 flex items-center gap-3">
              <span className="text-3xl">🎱</span>
              <h3 className="font-serif-light text-4xl text-gradient-gold">Biljard</h3>
            </div>
          </div>
          <div className="p-8 space-y-3">
            {[
              ["1 person", "75 kr / timme"],
              ["2 personer", "120 kr / timme"],
              ["Upp till 4", "160 kr / timme"],
              ["Större sällskap", "Ring för bättre pris"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-3 pb-2 border-b border-gold/10 last:border-0">
                <span className="font-serif-light text-lg text-foreground/85">{k}</span>
                <span className="font-display text-xs tracking-widest text-gold">{v}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="reveal reveal-delay-1 group relative overflow-hidden rounded-3xl border border-gold/20 hover:border-gold/60 transition-all duration-500 hover:shadow-gold-strong">
          <div className="relative h-72 overflow-hidden">
            <img src={playstation} alt="PlayStation lounge" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/40 to-transparent" />
            <div className="absolute bottom-5 left-6 flex items-center gap-3">
              <span className="text-3xl">🎮</span>
              <h3 className="font-serif-light text-4xl text-gradient-gold">PlayStation</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-baseline justify-between gap-3 pb-2 border-b border-gold/10">
              <span className="font-serif-light text-lg text-foreground/85">Per spelare</span>
              <span className="font-display text-xs tracking-widest text-gold">100 kr / timme</span>
            </div>
            <p className="mt-6 italic text-foreground/60 font-serif-light">
              Bekväma loungesoffor, stor skärm och de senaste titlarna — tävla mot vänner i premium-miljö.
            </p>
          </div>
        </article>
      </div>

      <div className="reveal mt-12 text-center">
        <a href="#kontakt" className="inline-flex px-10 py-4 rounded-full bg-gradient-gold text-primary-foreground font-display text-xs uppercase tracking-[0.25em] shadow-gold hover:shadow-gold-strong hover:scale-105 transition-all duration-500">
          Boka en tid
        </a>
      </div>
    </div>
  </section>
);

export default Activities;
