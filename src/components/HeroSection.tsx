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
      {/* Professional Banner */}
      <div
        className="pt-[72px] relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(150, 38%, 12%) 0%, hsl(150, 38%, 20%) 50%, hsl(150, 30%, 14%) 100%)",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(45, 80%, 60%) 1px, transparent 1px),
              radial-gradient(circle at 80% 30%, hsl(45, 80%, 60%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 80px 80px",
          }}
        />
        {/* Decorative accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative flex flex-col items-center justify-center text-center py-20 lg:py-32 px-4">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mb-5">
            <span className="text-white">ITOTY </span>
            <em className="italic text-primary">2026</em>
          </h1>
          <p className="font-condensed text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.15em] uppercase text-white/90 mb-4">
            India's Biggest Tractor Awards is Back!
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full mb-4" />
          <p className="text-base sm:text-lg text-white/60 font-light">
            Stay Tuned For More Updates!
          </p>
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
