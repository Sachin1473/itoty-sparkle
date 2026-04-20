const presentedBy = {
  name: "CEAT",
  logoText: "CEAT",
};

const associateSponsors = [
  { name: "Times Group", logoText: "TIMES GROUP" },
  { name: "JK Tyre", logoText: "JK TYRE" },
  { name: "HDFC Bank", logoText: "HDFC BANK" },
];

const partnerMedia = [
  { name: "Auto Today", logoText: "AutoToday" },
  { name: "autoX", logoText: "autoX" },
  { name: "Car India", logoText: "car india" },
  { name: "Motoring World", logoText: "MOTORING world" },
  { name: "Overdrive", logoText: "OVERDRIVE" },
  { name: "Evo India", logoText: "evo" },
];

const LogoTile = ({ text, size = "md" }: { text: string; size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "h-16 px-6 text-base",
    md: "h-20 px-8 text-lg",
    lg: "h-24 px-10 text-2xl",
  };
  return (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center bg-card border border-primary/10 rounded-md shadow-sm hover:border-primary/40 hover:shadow-md transition-all`}
    >
      <span className="font-condensed font-bold tracking-[0.1em] uppercase text-foreground/80">
        {text}
      </span>
    </div>
  );
};

const PartnersSection = () => (
  <section className="py-20 lg:py-24 bg-background" id="partners">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Our Sponsors</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-4">
        Our <em className="italic text-primary">Partners</em>
      </h2>
      <p className="text-base text-muted-foreground mb-14 max-w-2xl">
        ITOTY 2026 is proudly supported by India's leading brands and most respected automotive media houses.
      </p>

      {/* Presented By */}
      <div className="mb-14 text-center">
        <p className="font-condensed text-xs font-bold tracking-[0.25em] uppercase text-secondary mb-5">
          Presented By
        </p>
        <div className="flex justify-center">
          <LogoTile text={presentedBy.logoText} size="lg" />
        </div>
      </div>

      {/* Associate Sponsors */}
      <div className="mb-14 text-center">
        <p className="font-condensed text-xs font-bold tracking-[0.25em] uppercase text-secondary mb-5">
          Associate Sponsors
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {associateSponsors.map((s) => (
            <LogoTile key={s.name} text={s.logoText} size="md" />
          ))}
        </div>
      </div>

      {/* Partner Media */}
      <div className="text-center">
        <p className="font-condensed text-xs font-bold tracking-[0.25em] uppercase text-secondary mb-5">
          Partner Media
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {partnerMedia.map((s) => (
            <LogoTile key={s.name} text={s.logoText} size="sm" />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection;
