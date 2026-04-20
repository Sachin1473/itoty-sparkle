import { Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const winners = [
  {
    edition: "6th Edition", year: "2025", model: "Farmtrac Promaxx 47",
    image: "https://www.tractorjunction.com/assets/tractor/farmtrac-47-promaxx-4wd.webp",
  },
  {
    edition: "5th Edition", year: "2024", model: "Swaraj 855 FE",
    image: "https://www.tractorjunction.com/assets/tractor/swaraj-855-fe.webp",
  },
  {
    edition: "4th Edition", year: "2023", model: "Kubota MU4501",
    image: "https://www.tractorjunction.com/assets/tractor/kubota-mu4501-2wd.webp",
  },
  {
    edition: "3rd Edition", year: "2022", model: "Mahindra 575 DI XP Plus & Massey Ferguson 246 DYNATRACK",
    image: "https://www.tractorjunction.com/assets/tractor/mahindra-575-di-xp-plus.webp",
    joint: true,
  },
  {
    edition: "2nd Edition", year: "2021", model: "Sonalika Tiger 55",
    image: "https://www.tractorjunction.com/assets/tractor/sonalika-tiger-55-di-4wd.webp",
  },
  {
    edition: "1st Edition", year: "2019", model: "Powertrac Euro 50",
    image: "https://www.tractorjunction.com/assets/tractor/powertrac-euro-50.webp",
  },
];

const WinnersSection = () => (
  <section className="py-20 lg:py-28 bg-muted" id="winners">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Hall of Fame</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-4">
        Winners Over the <em className="italic text-primary">Years</em>
      </h2>
      <p className="text-base text-muted-foreground mb-14 max-w-2xl">
        Celebrating the tractors that earned the top honour in past editions of the Indian Tractor of the Year Awards.
      </p>

      {/* Winners grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {winners.map((w) => (
          <div key={w.year} className="bg-card rounded-lg overflow-hidden shadow-sm border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all group">
            {/* Tractor image */}
            <div className="relative h-48 bg-background overflow-hidden">
              <img
                src={w.image}
                alt={w.model}
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://www.itoty.org/assets/images/itoty-logo.png";
                  (e.target as HTMLImageElement).className = "w-24 h-24 object-contain mx-auto mt-10 opacity-30";
                }}
              />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                <Trophy className="w-3 h-3" />
                <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase">{w.year}</span>
              </div>
              {w.joint && (
                <div className="absolute top-3 right-3">
                  <span className="font-condensed text-[9px] font-bold tracking-[0.1em] uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                    Joint Winners
                  </span>
                </div>
              )}
            </div>
            {/* Info */}
            <div className="p-5 flex flex-col gap-3">
              <div>
                <span className="font-condensed text-[11px] font-semibold tracking-[0.15em] uppercase text-primary">{w.edition}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1 leading-snug">{w.model}</h3>
              </div>
              <Link
                to={`/winners/${w.year}`}
                className="inline-flex items-center justify-center gap-1.5 mt-1 font-condensed text-xs font-bold tracking-[0.15em] uppercase text-primary hover:text-primary/80 border border-primary/30 hover:border-primary rounded-full px-4 py-2 transition-all self-start"
              >
                View All Winners <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WinnersSection;
