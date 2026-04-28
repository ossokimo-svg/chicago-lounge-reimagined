import SectionTitle from "./SectionTitle";

const About = () => (
  <section id="om" className="relative py-28 sm:py-40">
    <div className="container">
      <SectionTitle overline="Vår berättelse" title="Om Oss" />
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="font-serif-light text-2xl sm:text-3xl leading-relaxed text-foreground/85 italic">
          “Chicago Café och Miami Restaurang har slagits ihop och blivit
          <span className="text-gradient-gold not-italic font-normal"> Chicago Lounge</span> — en plats där du lämnar vardagen och njuter av en lugn, avslappnad och exklusiv miljö.”
        </p>
        <p className="mt-10 font-display text-[0.7rem] tracking-[0.4em] uppercase text-gold/80">
          — Chicago Lounge, Katrineholm
        </p>
      </div>
    </div>
  </section>
);

export default About;
