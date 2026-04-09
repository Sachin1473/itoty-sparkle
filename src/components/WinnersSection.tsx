const winners = [
  { edition: "1st Edition", year: "2019", model: "Powertrac Euro 50" },
  { edition: "2nd Edition", year: "2021", model: "Sonalika Tiger 55" },
  { edition: "3rd Edition", year: "2022", model: "Mahindra 575 DI XP Plus & Massey Ferguson 246 DYNATRACK", joint: true },
  { edition: "4th Edition", year: "2023", model: "Kubota MU4501" },
  { edition: "5th Edition", year: "2024", model: "Swaraj 855 FE" },
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

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden sm:block" />

        <div className="space-y-8">
          {winners.map((w, i) => (
            <div key={w.year} className={`relative flex items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card -translate-x-1/2 z-10 hidden sm:block" />

              {/* Content card */}
              <div className={`flex-1 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"} sm:pl-16 lg:pl-0`}>
                <div className="bg-card rounded-lg p-6 shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
                  <span className="font-condensed text-xs font-semibold tracking-[0.15em] uppercase text-primary">{w.edition}</span>
                  <div className="font-heading text-3xl font-bold text-secondary mt-1 mb-2">{w.year}</div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">{w.model}</h3>
                  {w.joint && (
                    <span className="inline-block mt-2 font-condensed text-[10px] font-semibold tracking-[0.12em] uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">
                      Joint Winners
                    </span>
                  )}
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WinnersSection;
