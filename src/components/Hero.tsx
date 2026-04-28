import hero from "@/assets/hero.jpg";
import logo from "@/assets/logo.png";
import Ornament from "./Ornament";

const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={hero} alt="Chicago Lounge interiör" className="w-full h-full object-cover scale-105 animate-fade-in-slow" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-green-deep/85 via-green-deep/70 to-green-deep" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-60" />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
      <img
        src={logo}
        alt="Chicago Lounge logotyp"
        className="mx-auto h-40 sm:h-56 md:h-64 w-auto drop-shadow-[0_10px_40px_hsl(45_72%_67%/0.35)] animate-fade-in"
      />

      <Ornament className="mt-10 opacity-0 animate-fade-in" />

      <p
        className="mt-8 font-display text-[0.7rem] sm:text-xs tracking-[0.5em] text-gold uppercase opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        Katrineholm · Sedan idag
      </p>

      <h1
        className="mt-6 font-serif-light text-5xl sm:text-7xl md:text-8xl text-gradient-gold leading-[1.05] opacity-0 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        Välkommen till<br/>
        <span className="italic">Chicago Lounge</span>
      </h1>

      <p
        className="mt-6 font-serif-light text-lg sm:text-2xl text-foreground/80 italic opacity-0 animate-fade-in"
        style={{ animationDelay: "0.7s" }}
      >
        Café & Restaurang
      </p>

      <div
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
        style={{ animationDelay: "0.9s" }}
      >
        <a
          href="#meny"
          className="px-10 py-4 rounded-full bg-gradient-gold text-primary-foreground font-display text-xs uppercase tracking-[0.25em] shadow-gold hover:shadow-gold-strong hover:scale-105 transition-all duration-500"
        >
          Se Meny
        </a>
        <a
          href="#kontakt"
          className="px-10 py-4 rounded-full border border-gold/60 text-gold font-display text-xs uppercase tracking-[0.25em] hover:bg-gold/10 hover:border-gold transition-all duration-500 hover:scale-105"
        >
          Boka Bord
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
      <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/70" />
    </div>
  </section>
);

export default Hero;
