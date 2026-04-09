import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-primary/20 h-[72px]">
      <div className="section-container h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <img
            src="https://www.itoty.org/assets/images/itoty-logo.png"
            alt="ITOTY Logo"
            className="h-12 w-auto"
          />
          <div className="hidden sm:flex items-center">
            <span className="mx-3 h-8 w-px bg-primary/20" />
            <img
              src="https://www.itoty.org/assets/images/ceat-logo.png"
              alt="CEAT Specialty"
              className="h-8 w-auto"
            />
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {["Home", "About Us", "Contact Us", "Jury", "Winners", "Media Coverage"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-condensed text-[13px] font-medium tracking-[0.12em] uppercase text-foreground/75 no-underline hover:text-primary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact-us" className="btn-primary text-xs py-2.5 px-5">
              Register Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-primary/10 shadow-lg">
          <div className="section-container py-6 flex flex-col gap-4">
            {["Home", "About Us", "Contact Us", "Jury", "Winners", "Media Coverage"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileOpen(false)}
                className="font-condensed text-sm font-medium tracking-[0.1em] uppercase text-foreground/75 no-underline hover:text-primary"
              >
                {item}
              </a>
            ))}
            <a href="#contact-us" className="btn-primary text-xs py-2.5 px-5 w-fit" onClick={() => setMobileOpen(false)}>
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
