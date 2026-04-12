const AboutSection = () => (
  <section className="py-20 lg:py-28 bg-card" id="about">
    <div className="section-container">
      {/* Title */}
      <div className="section-label">
        <div className="section-label-line" />
        <span className="section-label-text">About Us</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-10">
        Indian Tractor of the Year <em className="italic text-primary">(ITOTY)</em> Awards
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left - content */}
        <div>
          <div className="space-y-5 text-[17px] font-light leading-relaxed text-muted-foreground">
            <p>
              The <strong className="font-semibold text-foreground">ITOTY Awards</strong> were started in <strong className="font-semibold text-foreground">2019</strong> by <strong className="font-semibold text-foreground">Rajat Gupta</strong>, founder of <strong className="font-semibold text-foreground">Tractor Junction</strong>, to recognize outstanding contributions across the Indian agricultural ecosystem.
            </p>
            <p>
              What began as a platform to honour excellence in tractors has now grown to celebrate <strong className="font-semibold text-foreground">innovation and impact</strong> in areas like farm equipment, CSR initiatives, banking, and agri-finance. The awards highlight the efforts of companies and institutions that are driving meaningful change for Indian farmers.
            </p>
            <p>
              With a transparent evaluation process — <strong className="font-semibold text-foreground">60% jury votes</strong> and <strong className="font-semibold text-foreground">40% public votes</strong> — the ITOTY Awards have earned the trust of both the industry and farming community. Today, ITOTY stands as one of India's most respected platforms for recognizing commitment, progress, and farmer-first thinking.
            </p>
            <p>
              The <strong className="font-semibold text-foreground">7th Edition</strong> of <strong className="font-semibold text-foreground">ITOTY 2026</strong> continues this legacy by celebrating excellence, innovation, and impact across the agricultural sector.
            </p>
          </div>

          <a href="#contact" className="btn-secondary mt-8 inline-flex">
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* Right - Voting process */}
        <div>
          <div className="font-condensed text-xs font-semibold tracking-[0.18em] uppercase text-secondary mb-6">
            Evaluation Process
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-muted rounded-lg p-6 text-center">
              <div className="font-heading text-5xl font-bold text-primary mb-2">60%</div>
              <h4 className="font-condensed text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Jury Votes</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Expert panel of 8 distinguished jury members evaluate each entry</p>
            </div>
            <div className="bg-muted rounded-lg p-6 text-center">
              <div className="font-heading text-5xl font-bold text-primary mb-2">40%</div>
              <h4 className="font-condensed text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Public Votes</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Farmers and the public community voice their choice</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The <strong className="font-semibold text-foreground">7th Edition</strong> in 2026 features <strong className="font-semibold text-foreground">16 categories</strong> across Tractors, Implements, and Finance — acknowledging contributions across the full agricultural value chain.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
