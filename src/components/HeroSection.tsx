import { Calendar, MapPin, LayoutGrid, Users } from "lucide-react";

const infoCards = [
  { icon: <Calendar className="w-6 h-6" />, value: "17th June 2026", label: "Date", href: "#about" },
  { icon: <MapPin className="w-6 h-6" />, value: "New Delhi", label: "Location", href: "#contact" },
  { icon: <LayoutGrid className="w-6 h-6" />, value: "16", label: "Categories", href: "#categories" },
  { icon: <Users className="w-6 h-6" />, value: "8", label: "Jury Members", href: "#jury" },
];

const HeroSection = () => {
  return (
    <section id="home">
      {/* Banner */}
      <div className="relative w-full min-h-[60vh] lg:min-h-[75vh] pt-[72px]">
        <img
          src="/images/ITOTY_banner.png"
          alt="ITOTY 2026 Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[60vh] lg:min-h-[75vh] px-4">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none mb-4">
            ITOTY <em className="italic text-primary">2026</em>
          </h1>
          <p className="font-condensed text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.15em] uppercase text-white/90 mb-3">
            India's Biggest Tractor Awards is Back!
          </p>
          <p className="text-base sm:text-lg text-white/80 font-light">
            Stay Tuned For More Updates!
          </p>
        </div>
      </div>

      {/* 2025 Winners Strip */}
      <div className="bg-muted py-10 lg:py-14">
        <div className="section-container text-center">
          <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
            ITOTY 2025 Winner
          </span>
          <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-8">
            Indian Tractor of the Year 2025
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-card rounded-xl shadow-md border border-primary/10 p-6 max-w-xs w-full">
              <img
                src="https://www.tractorjunction.com/assets/tractor/farmtrac-47-promaxx-4wd.webp"
                alt="Farmtrac Promaxx 47"
                className="w-full h-40 object-contain mb-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://www.itoty.org/assets/images/itoty-logo.png";
                  (e.target as HTMLImageElement).className = "w-20 h-20 object-contain mx-auto opacity-30 mb-4";
                }}
              />
              <p className="font-heading text-lg font-semibold text-foreground">Farmtrac Promaxx 47</p>
              <p className="text-sm text-muted-foreground mt-1">6th Edition • 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Clickable Info Cards */}
      <div className="section-container py-10 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {infoCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              className="group flex flex-col items-center gap-3 bg-card rounded-xl border border-primary/10 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all p-6 lg:p-8 text-center"
            >
              <div className="text-primary group-hover:scale-110 transition-transform">{card.icon}</div>
              <span className="font-heading text-xl lg:text-2xl font-bold text-foreground">{card.value}</span>
              <span className="font-condensed text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">{card.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
