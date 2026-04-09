const juryMembers = [
  { name: "Dr. CR Mehta", role: "Jury Chairman 2025", img: "https://www.itoty.org/assets/images/jury/cr-mehta.jpg", chairman: true },
  { name: "Dr. L.P. Gite", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/lp-gite.jpg" },
  { name: "Mr. Arindam Maulick", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/arindam.jpg" },
  { name: "Mr. Yash Jat", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/jaswant-choudhary.jpg" },
  { name: "Mr. P.K. Verma", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/pk-verma.jpg" },
  { name: "Mr. Hemant Joshi", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/hemant-josh.jpg" },
  { name: "Mr. Ashish Bhardwaj", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/ashbhardwaj.jpg" },
  { name: "Mr. S.R. Paul Raj", role: "Panel Member", img: "https://www.itoty.org/assets/images/jury/paulrajn.jpg" },
];

const JurySection = () => (
  <section className="py-20 lg:py-28 bg-card" id="jury">
    <div className="section-container">
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">Panel Members</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-4">
        Our Jury <em className="italic text-primary">Members</em>
      </h2>
      <p className="text-base text-muted-foreground mb-14 max-w-2xl">
        Distinguished experts who bring integrity and deep agricultural expertise to the evaluation process.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {juryMembers.map((j) => (
          <div
            key={j.name}
            className={`bg-muted rounded-lg overflow-hidden border ${j.chairman ? "border-primary/40 ring-2 ring-primary/10" : "border-transparent"} hover:shadow-lg transition-all group`}
          >
            <div className="h-56 overflow-hidden relative">
              <img
                src={j.img}
                alt={j.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {j.chairman && (
                <div className="absolute top-3 left-3">
                  <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded">
                    Chairman
                  </span>
                </div>
              )}
            </div>
            <div className="p-5 text-center">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{j.name}</h3>
              <p className="text-xs text-muted-foreground">{j.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default JurySection;
