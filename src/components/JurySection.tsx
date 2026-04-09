const juryMembers = [
  { name: "Dr. L.P. Gite", role: "Agricultural Engineer & Former CIAE Director", img: "https://www.itoty.org/assets/images/jury/lp-gite.jpg" },
  { name: "Mr. Arindam Maulick", role: "Agri Journalist & Industry Analyst", img: "https://www.itoty.org/assets/images/jury/arindam.jpg" },
  { name: "Mr. Yash Jat", role: "Progressive Farmer & Agri Advocate", img: "https://www.itoty.org/assets/images/jury/jaswant-choudhary.jpg" },
  { name: "Mr. P.K. Verma", role: "Agricultural Machinery Expert", img: "https://www.itoty.org/assets/images/jury/pk-verma.jpg" },
  { name: "Mr. Hemant Joshi", role: "Tractor & Farm Equipment Specialist", img: "https://www.itoty.org/assets/images/jury/hemant-josh.jpg" },
  { name: "Mr. Ashish Bhardwaj", role: "Rural Economy Researcher", img: "https://www.itoty.org/assets/images/jury/ashbhardwaj.jpg" },
  { name: "Dr. CR Mehta", role: "Farm Machinery Scientist & Researcher", img: "https://www.itoty.org/assets/images/jury/cr-mehta.jpg", chairman: true },
  { name: "Mr. S.R. Paul Raj", role: "Agricultural Technology Expert", img: "https://www.itoty.org/assets/images/jury//paulrajn.jpg" },
];

const JurySection = () => (
  <section className="py-20 lg:py-28 bg-muted" id="jury">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Panel Members</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-14">
        Our distinguished <em className="italic text-primary">jury</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {juryMembers.map((j) => (
          <div
            key={j.name}
            className={`bg-card rounded border ${j.chairman ? "border-primary/40" : "border-primary/10"} overflow-hidden hover:border-primary/40 transition-colors shadow-sm hover:shadow-md`}
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src={j.img}
                alt={j.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card/80 to-transparent" />
            </div>
            <div className="p-4 pb-5">
              <div className="text-[15px] font-medium text-foreground mb-1">{j.name}</div>
              <div className="text-xs text-muted-foreground leading-relaxed">{j.role}</div>
              {j.chairman && (
                <span className="inline-block mt-2 font-condensed text-[10px] font-semibold tracking-[0.12em] uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded-sm">
                  Jury Chairman 2026
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JurySection;
