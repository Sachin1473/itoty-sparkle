const winners = [
  { year: "2019", model: "Powertrac Euro 50", brand: "Escorts" },
  { year: "2021", model: "Sonalika Tiger 55", brand: "Sonalika" },
  { year: "2022", model: "Mahindra 575 DI XP Plus", brand: "Mahindra (Joint)" },
  { year: "2022", model: "MF 246 Dynatrack", brand: "Massey Ferguson (Joint)" },
  { year: "2023", model: "Kubota MU4501", brand: "Kubota" },
  { year: "2024", model: "Swaraj 855 FE", brand: "Swaraj" },
];

const AboutSection = () => (
  <section className="py-20 lg:py-28 bg-card" id="about-us">
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left */}
        <div>
          <div className="section-label">
            <div className="w-8 h-px bg-secondary" />
            <span className="font-condensed text-xs font-semibold tracking-[0.2em] uppercase text-secondary">About ITOTY</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-10">
            Honouring <em className="italic text-secondary">farmer-first</em> excellence
          </h2>

          <div className="space-y-5 text-[17px] font-light leading-relaxed text-muted-foreground mb-8">
            <p>
              The <strong className="font-semibold text-foreground">ITOTY Awards</strong> was launched in <strong className="font-semibold text-foreground">2019</strong> by <strong className="font-semibold text-foreground">Rajat Gupta</strong>, founder of <strong className="font-semibold text-foreground">Tractor Junction</strong>, to recognise outstanding contributions across the Indian agricultural ecosystem.
            </p>
            <p>
              What began as a platform to honour excellence in tractors has grown to celebrate <strong className="font-semibold text-foreground">innovation and impact</strong> in farm equipment, CSR initiatives, banking, and agri-finance.
            </p>
            <p>
              Today, ITOTY stands as one of India's most <strong className="font-semibold text-foreground">respected platforms</strong> for recognising commitment, progress, and farmer-first thinking.
            </p>
          </div>

          {/* Voting bar */}
          <div className="mt-8 p-6 bg-secondary rounded flex flex-wrap items-center gap-6">
            <div className="text-center min-w-[70px]">
              <div className="font-heading text-4xl font-bold text-primary">60%</div>
              <div className="text-xs font-medium text-secondary-foreground/50 tracking-[0.1em] uppercase mt-1">Jury Votes</div>
            </div>
            <div className="w-px h-14 bg-primary/20" />
            <div className="text-center min-w-[70px]">
              <div className="font-heading text-4xl font-bold text-primary">40%</div>
              <div className="text-xs font-medium text-secondary-foreground/50 tracking-[0.1em] uppercase mt-1">Public Votes</div>
            </div>
            <div className="w-px h-14 bg-primary/20 hidden sm:block" />
            <p className="text-sm text-secondary-foreground/60 leading-relaxed flex-1 min-w-[200px]">
              A transparent evaluation process that has earned the trust of both the industry and India's farming community.
            </p>
          </div>
        </div>

        {/* Right - Winners */}
        <div className="pt-2">
          <div className="font-condensed text-xs font-semibold tracking-[0.18em] uppercase text-secondary mb-6">
            Hall of Champions — ITOTY Winners
          </div>
          <div className="divide-y divide-foreground/8">
            {winners.map((w, i) => (
              <div key={i} className="flex items-center justify-between py-4">
                <span className="font-condensed text-sm font-bold text-secondary tracking-[0.08em] bg-secondary/10 px-2.5 py-1 rounded-sm min-w-[52px] text-center">
                  {w.year}
                </span>
                <span className="text-base font-medium text-foreground flex-1 px-5">{w.model}</span>
                <span className="text-xs text-muted-foreground">{w.brand}</span>
              </div>
            ))}
            {/* 2026 teaser */}
            <div className="flex items-center justify-between py-4 px-3 mt-2 rounded bg-primary/5 border-b-2 border-primary">
              <span className="font-condensed text-sm font-bold text-gold-dark tracking-[0.08em] bg-primary/15 px-2.5 py-1 rounded-sm">2026</span>
              <span className="text-base font-medium text-muted-foreground italic flex-1 px-5">Winner to be revealed...</span>
              <span className="font-condensed text-[10px] font-semibold tracking-[0.12em] uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
