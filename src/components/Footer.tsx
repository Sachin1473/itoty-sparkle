const Footer = () => (
  <footer className="bg-foreground py-12 px-6 lg:px-20 border-t border-primary/15">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://www.itoty.org/assets/images/itoty-logo.png"
              alt="ITOTY Logo"
              className="h-8 w-auto brightness-200"
            />
          </div>
          <p className="text-xs text-background/40 leading-relaxed">
            Recognising outstanding contributions across the Indian agricultural ecosystem since 2019.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-condensed text-xs font-bold tracking-[0.15em] uppercase text-primary mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["About", "Winners", "Categories", "Gallery", "Jury", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-condensed text-xs tracking-[0.05em] text-background/40 no-underline hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-condensed text-xs font-bold tracking-[0.15em] uppercase text-primary mb-4">Contact</h4>
          <div className="space-y-2 text-xs text-background/40">
            <p>Alwar, Rajasthan – M M Tower, Agarsen Circle</p>
            <p>Noida, UP – Tower 23, A23, Sector 9</p>
            <p>+91-8094783752</p>
            <p>info@itoty.org</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-condensed text-xs font-bold tracking-[0.15em] uppercase text-primary mb-4">Follow Us</h4>
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
                className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-sm no-underline text-background/50 hover:border-primary hover:text-primary transition-all"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
    </div>
  </footer>
);

export default Footer;
