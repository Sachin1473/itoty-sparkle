import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import winnersData from "@/data/winners.json";

type Winner = { title: string; year: string; image: string; winner: string };

const ALL_YEARS = ["2025", "2024", "2023", "2022", "2021", "2019"];

const cleanName = (s: string) =>
  s.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();

const Winners = () => {
  const { year } = useParams<{ year: string }>();
  const activeYear = year && ALL_YEARS.includes(year) ? year : "2025";

  const yearWinners = useMemo(
    () => (winnersData as Winner[]).filter((w) => w.year === activeYear),
    [activeYear]
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="pt-[88px] pb-10 bg-muted">
        <div className="section-container">
          <Link
            to="/#winners"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="section-label">
            <div className="section-label-line" />
            <span className="section-label-text">Hall of Fame</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-4">
            ITOTY <em className="italic text-primary">{activeYear}</em> Winners
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            All award recipients from the {activeYear} edition of the Indian Tractor of the Year Awards.
          </p>

          {/* Year tabs */}
          <div className="flex flex-wrap gap-2 mt-8">
            {ALL_YEARS.map((y) => (
              <Link
                key={y}
                to={`/winners/${y}`}
                className={`font-condensed text-sm font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-full border transition-all ${
                  y === activeYear
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-primary/20 hover:border-primary/50"
                }`}
              >
                {y}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 lg:py-20 flex-1">
        <div className="section-container">
          {yearWinners.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No winners found for this year.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {yearWinners.map((w, idx) => (
                <article
                  key={`${w.image}-${idx}`}
                  className="bg-card rounded-lg overflow-hidden shadow-sm border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="relative h-56 bg-background overflow-hidden">
                    <img
                      src={w.image}
                      alt={`${w.title} ${activeYear} winner: ${cleanName(w.winner)}`}
                      loading="lazy"
                      className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      <Trophy className="w-3 h-3" />
                      <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase">
                        {activeYear}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="font-condensed text-[11px] font-semibold tracking-[0.15em] uppercase text-primary">
                      {w.title || "Award"}
                    </span>
                    {w.winner && (
                      <h3 className="font-heading text-base font-semibold text-foreground mt-1 leading-snug">
                        {cleanName(w.winner)}
                      </h3>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Winners;
