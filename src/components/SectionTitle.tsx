import Ornament from "./Ornament";

const SectionTitle = ({ overline, title, subtitle }: { overline?: string; title: string; subtitle?: string }) => (
  <div className="text-center max-w-3xl mx-auto mb-16 reveal">
    {overline && (
      <p className="font-display text-[0.65rem] sm:text-xs tracking-[0.5em] text-gold uppercase mb-5">{overline}</p>
    )}
    <h2 className="font-serif-light text-4xl sm:text-6xl text-gradient-gold leading-tight">{title}</h2>
    <Ornament className="mt-8" />
    {subtitle && <p className="mt-8 text-foreground/70 font-serif-light text-lg sm:text-xl italic leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionTitle;
