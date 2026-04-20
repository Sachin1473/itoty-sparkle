import { Calendar, MapPin, LayoutGrid, Users } from "lucide-react";
import bannerImg from "@/assets/itoty-banner.webp";

const infoCards = [
  { icon: <Calendar className="w-6 h-6" />, value: "17th June 2026", label: "Date", href: "#about" },
  { icon: <MapPin className="w-6 h-6" />, value: "New Delhi", label: "Location", href: "#contact" },
  { icon: <LayoutGrid className="w-6 h-6" />, value: "16", label: "Categories", href: "#categories" },
  { icon: <Users className="w-6 h-6" />, value: "8", label: "Jury Members", href: "#jury" },
];

const HeroSection = () => {
  return (
    <section id="home">
      {/* Hero Banner */}
      <div className="pt-[72px] bg-background">
        <img
          src={bannerImg}
          alt="ITOTY 2026 — India's Biggest Tractor Awards is Back. Stay Tuned For More Updates."
          className="w-full h-auto block"
        />
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
