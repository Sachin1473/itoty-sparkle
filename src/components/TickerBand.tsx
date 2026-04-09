const items = [
  "ITOTY 2026", "Indian Tractor of the Year", "60% Jury Votes",
  "40% Public Votes", "6th Edition", "Nominations Open", "Powered by Tractor Junction",
];

const TickerBand = () => (
  <div className="bg-primary py-3 overflow-hidden whitespace-nowrap">
    <div className="inline-flex animate-ticker">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-condensed text-[13px] font-semibold text-primary-foreground tracking-[0.1em] uppercase px-8">
            {item}
          </span>
          <span className="text-primary-foreground/40 text-lg">·</span>
        </span>
      ))}
    </div>
  </div>
);

export default TickerBand;
