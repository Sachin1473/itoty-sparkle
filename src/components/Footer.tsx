const Footer = () => (
  <footer className="bg-foreground py-12 px-6 lg:px-20 border-t border-primary/15">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-3 mb-2">
          <img
            src="https://www.itoty.org/assets/images/itoty-logo.png"
            alt="ITOTY Logo"
            className="h-8 w-auto brightness-200"
          />
        </div>
        <div className="text-[13px] text-background/35">
          © 2026 ITOTY. Indian Tractor of the Year Awards. All rights reserved.
        </div>
        <div className="text-xs text-background/25">
          Powered by{" "}
          <a href="https://www.tractorjunction.com" target="_blank" rel="noopener" className="text-primary no-underline hover:underline">
            Tractor Junction
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex gap-3">
          {[
            { href: "https://www.facebook.com/IndianTractorOfTheYear/", label: "f" },
            { href: "https://twitter.com/itoty_offical", label: "𝕏" },
            { href: "https://in.linkedin.com/showcase/itoty", label: "in" },
            { href: "https://www.instagram.com/itoty_official/", label: "◎" },
            { href: "https://www.youtube.com/channel/UCO6kwzLo_Ky2GZJDyvyF_UQ", label: "▶" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener"
              className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-sm no-underline text-background/50 hover:border-primary hover:text-primary hover:bg-primary/8 transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex gap-6">
          {["About", "Jury", "Gallery", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}-us`}
              className="font-condensed text-xs tracking-[0.1em] uppercase text-background/35 no-underline hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
