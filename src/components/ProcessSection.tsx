const steps = [
  { num: "01", title: "Nominations", desc: "Brands and manufacturers submit entries for eligible products and initiatives launched in the qualifying period." },
  { num: "02", title: "Jury Evaluation", desc: "Eight expert jury members assess nominees on performance, innovation, farmer relevance, and field tests. Jury votes account for 60%." },
  { num: "03", title: "Public Voting", desc: "The farming community and general public cast votes online — representing 40% of the final score — ensuring grassroots legitimacy." },
  { num: "04", title: "Award Ceremony", desc: "Winners are announced at a prestigious live ceremony attended by industry leaders, jury members, and media representatives." },
];

const ProcessSection = () => (
  <section className="py-20 lg:py-28 bg-card">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Evaluation Process</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-14">
        How winners are <em className="italic text-primary">chosen</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-primary/15">
        {steps.map((step, i) => (
          <div key={step.num} className={`p-10 relative group ${i < steps.length - 1 ? "lg:border-r border-b lg:border-b-0 border-primary/15" : ""}`}>
            <div className="absolute top-0 left-10 right-10 h-0.5 bg-primary scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
            <span className="font-heading text-6xl font-bold text-primary/12 block mb-5">{step.num}</span>
            <div className="font-condensed text-base font-semibold text-foreground tracking-[0.06em] uppercase mb-3">{step.title}</div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
