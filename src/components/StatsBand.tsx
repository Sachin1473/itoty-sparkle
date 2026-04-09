const stats = [
  { num: "6+", label: "Editions Completed" },
  { num: "8", label: "Expert Jury Members" },
  { num: "12+", label: "Award Categories" },
  { num: "50M+", label: "Farmers Reached" },
  { num: "2019", label: "Year Established" },
];

const StatsBand = () => (
  <div className="bg-secondary py-14 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
      {stats.map((s, i) => (
        <div key={s.label} className="flex items-center gap-8">
          <div className="text-center flex-1 min-w-[100px]">
            <span className="font-heading text-5xl font-bold text-primary block">{s.num}</span>
            <span className="text-xs font-medium text-secondary-foreground/55 tracking-[0.14em] uppercase mt-1 block">{s.label}</span>
          </div>
          {i < stats.length - 1 && (
            <div className="hidden md:block w-px h-16 bg-primary/20" />
          )}
        </div>
      ))}
    </div>
  </div>
);

export default StatsBand;
