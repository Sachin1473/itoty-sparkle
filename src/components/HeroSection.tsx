import { Calendar, MapPin, LayoutGrid, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden" id="home">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="https://www.itoty.org/assets/images/itoty-back-2025-desktop.jpg"
          alt="ITOTY 2026 Awards"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/40 to-transparent" />
      </div>

      {/* Hero content overlay card */}
      <div className="relative z-10 section-container flex items-end lg:items-center min-h-[calc(100vh-72px)] pb-32 lg:pb-0">
        <div className="bg-card/95 backdrop-blur-sm rounded-lg shadow-xl p-8 lg:p-12 max-w-xl w-full">
          <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-secondary mb-4 block">
            7th Edition • Since 2019
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[0.95] text-foreground mb-2">
            ITOTY <em className="italic text-primary">2026</em>
          </h1>
          <p className="font-condensed text-lg sm:text-xl font-semibold tracking-wide uppercase text-secondary mt-3 mb-2">
            India's Biggest Tractor Awards is Back!
          </p>
          <p className="text-base font-light leading-relaxed text-muted-foreground mt-4 mb-8">
            Stay tuned for more updates! Recognising outstanding contributions across the Indian agricultural ecosystem. Celebrating innovation, impact, and farmer-first thinking.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://pages.razorpay.com/pl_OS8aVodkJGyGwi/view"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-condensed text-sm font-bold tracking-[0.12em] uppercase px-7 py-3.5 rounded transition-all hover:bg-forest-mid"
            >
              Get ITOTY Pass
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Quick stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="section-container">
          <div className="bg-card rounded-t-lg shadow-lg grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary/10 mx-4 lg:mx-12">
            {[
              { icon: <Calendar className="w-5 h-5" />, value: "17th June 2026", label: "Date" },
              { icon: <MapPin className="w-5 h-5" />, value: "New Delhi", label: "Location" },
              { icon: <LayoutGrid className="w-5 h-5" />, value: "16", label: "Categories" },
              { icon: <Users className="w-5 h-5" />, value: "8", label: "Jury Members" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 py-5 px-4">
                <div className="text-primary">{item.icon}</div>
                <span className="font-condensed text-sm font-bold text-foreground">{item.value}</span>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
