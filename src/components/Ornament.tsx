const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/70" />
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" className="text-gold">
      <path d="M14 0 L17 7 L14 14 L11 7 Z" fill="currentColor" opacity="0.9"/>
      <circle cx="14" cy="7" r="1.5" fill="currentColor"/>
    </svg>
    <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/70" />
  </div>
);

export default Ornament;
