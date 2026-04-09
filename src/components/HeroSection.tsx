const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden" id="home">
      {/* Background - using the ITOTY hero image */}
      <div className="absolute inset-0">
        <img
          src="https://www.itoty.org/assets/images/itoty-back-2025-desktop.jpg"
          alt="ITOTY 2026 Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      </div>

      <div className="relative z-10 section-container flex flex-col lg:flex-row items-center min-h-[calc(100vh-72px)]">
        {/* Left content */}
        <div className="flex-1 py-16 lg:py-24 lg:pr-16">
          <div className="section-label mb-6">
            <div className="section-label-line" />
            <span className="section-label-text">India's Most Prestigious Tractor Award</span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.95] text-foreground mb-4">
            Indian<br />
            <em className="text-primary italic">Tractor</em><br />
            of the Year
          </h1>

          <span className="font-condensed text-6xl sm:text-7xl lg:text-[120px] font-bold leading-none text-transparent tracking-tight block mb-6" style={{ WebkitTextStroke: "1.5px hsl(42, 52%, 54%, 0.3)" }}>
            2026
          </span>

          <p className="text-base font-light leading-relaxed text-muted-foreground max-w-md mb-10">
            Recognising outstanding innovation, performance, and farmer-first thinking across India's agricultural ecosystem. A transparent, credible, and celebrated honour since 2019.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact-us" className="btn-primary">
              Register Interest
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#about-us" className="btn-secondary">
              Discover More
            </a>
          </div>
        </div>

        {/* Right - stats */}
        <div className="hidden lg:flex flex-col items-center gap-10 py-24">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full border border-primary/30" style={{ animation: "spin-slow 40s linear infinite" }} />
            <div className="absolute inset-5 rounded-full border border-primary/15" style={{ animation: "spin-slow 25s linear infinite reverse" }} />
            <div className="absolute inset-10 rounded-full border border-primary/10" style={{ animation: "spin-slow 60s linear infinite" }} />
            <div className="absolute inset-16 rounded-full bg-secondary border-2 border-primary flex flex-col items-center justify-center text-center">
              <span className="text-4xl mb-1">🏆</span>
              <span className="font-heading text-sm font-semibold text-primary leading-tight">ITOTY<br/>Award</span>
              <span className="font-condensed text-xl font-bold text-secondary-foreground mt-1">2026</span>
            </div>
          </div>

          <div className="flex gap-10">
            {[
              { num: "6th", label: "Edition" },
              { num: "8", label: "Jury Experts" },
              { num: "2019", label: "Est." },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-heading text-3xl font-bold text-primary block">{s.num}</span>
                <span className="text-xs font-medium text-muted-foreground tracking-[0.12em] uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
