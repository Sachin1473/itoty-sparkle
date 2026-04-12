import { Tractor, Wrench, Landmark } from "lucide-react";

const categoryGroups = [
  {
    title: "Tractor Category",
    icon: <Tractor className="w-5 h-5" />,
    color: "text-secondary",
    bgColor: "bg-secondary/5",
    borderColor: "border-secondary/20",
    categories: [
      "Indian Tractor of the Year",
      "Orchard Tractor of the Year",
      "Tractor Launch of the Year",
      "Electric Tractor of the Year",
      "Best 4WD Tractor of the Year – 50hp+",
      "Tractor Manufacturer of the Year",
      "Tractor Exporter of the Year",
    ],
  },
  {
    title: "Implement Category",
    icon: <Wrench className="w-5 h-5" />,
    color: "text-primary",
    bgColor: "bg-primary/5",
    borderColor: "border-primary/20",
    categories: [
      "Implement of the Year",
      "Rotavator of the Year",
      "Smart Machinery of the Year",
      "Implement Manufacturer of the Year",
      "Crop Residue Management Machinery of the Year",
    ],
  },
  {
    title: "Finance Category",
    icon: <Landmark className="w-5 h-5" />,
    color: "text-forest-light",
    bgColor: "bg-forest-light/5",
    borderColor: "border-forest-light/20",
    categories: [
      "Best Digital Transformation in Tractor Finance",
      "Fastest Growing Tractor Institution",
      "Innovative Tractor Financing Solution of the Year",
      "Best Pre-Owned Tractor Finance Institution",
    ],
  },
];

const CategoriesSection = () => (
  <section className="py-20 lg:py-28 bg-card" id="categories">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Award Categories</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-4">
        16 Categories of <em className="italic text-primary">Excellence</em>
      </h2>
      <p className="text-base text-muted-foreground mb-14 max-w-2xl">
        Recognising the best across tractors, farm implements, and agricultural finance — honouring every pillar of India's farming ecosystem.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categoryGroups.map((group) => (
          <div key={group.title} className={`rounded-xl border ${group.borderColor} ${group.bgColor} p-6 lg:p-8`}>
            <div className={`flex items-center gap-3 mb-6 ${group.color}`}>
              {group.icon}
              <h3 className="font-condensed text-sm font-bold tracking-[0.12em] uppercase">{group.title}</h3>
            </div>
            <ol className="space-y-3">
              {group.categories.map((cat, i) => (
                <li key={cat} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-card border ${group.borderColor} flex items-center justify-center font-condensed text-[11px] font-bold text-muted-foreground`}>
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-foreground font-medium leading-snug pt-0.5">{cat}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
