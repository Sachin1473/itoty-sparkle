const categories = [
  { icon: "🚜", title: "Indian Tractor of the Year", desc: "The flagship award recognising the best new tractor launched in India — evaluated on performance, innovation, fuel efficiency, and farmer suitability.", tag: "Flagship Category" },
  { icon: "⚙️", title: "Farm Equipment of the Year", desc: "Honouring the most impactful agricultural implement or attachment that enhances productivity and eases farm operations for Indian farmers.", tag: "Implements Category" },
  { icon: "🌿", title: "CSR Excellence Award", desc: "Recognising companies that have gone beyond business to make a meaningful difference in rural communities and farming livelihoods.", tag: "Social Impact" },
  { icon: "🏦", title: "Agri-Finance Award", desc: "Celebrating banks and NBFCs that have supported farmers with accessible, timely, and affordable financing solutions.", tag: "Banking Category" },
  { icon: "💡", title: "Innovation of the Year", desc: "A special recognition for a technology, product, or process that brings genuinely new thinking to India's agricultural sector.", tag: "Technology Award" },
  { icon: "🌾", title: "Brand of the Year", desc: "Acknowledging the tractor or agri brand that has shown exceptional growth, farmer trust, and market leadership.", tag: "Brand Excellence" },
];

const CategoriesSection = () => (
  <section className="py-20 lg:py-28 bg-muted" id="categories">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Award Categories</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-14">
        What we <em className="italic text-primary">recognise</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {categories.map((cat) => (
          <div key={cat.title} className="bg-card p-10 border-t-[3px] border-transparent hover:border-primary transition-all group">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl mb-6">
              {cat.icon}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 leading-tight">{cat.title}</h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed">{cat.desc}</p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-6 h-px bg-primary" />
              <span className="font-condensed text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">{cat.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoriesSection;
