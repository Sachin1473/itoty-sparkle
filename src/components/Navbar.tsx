import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-b border-primary/10 h-[72px]">
      <div className="section-container h-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline">
          <span className="font-condensed text-2xl font-bold tracking-[0.08em] text-secondary">ITOTY</span>
          <span className="h-6 w-px bg-primary/30 mx-1" />
          <span className="font-condensed text-xs font-medium tracking-[0.05em] uppercase text-muted-foreground leading-tight">
            Indian Tractor<br />of the Year
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 list-none">
          {["Home", "About", "Winners", "Gallery", "Jury", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-condensed text-[13px] font-medium tracking-[0.1em] uppercase text-foreground/70 no-underline hover:text-secondary transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://pages.razorpay.com/pl_OS8aVodkJGyGwi/view"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-condensed text-xs font-bold tracking-[0.12em] uppercase px-5 py-2.5 rounded transition-all hover:bg-forest-mid"
            >
              Get ITOTY Pass
            </a>
          </li>
        </ul>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-primary/10 shadow-lg">
          <div className="section-container py-6 flex flex-col gap-4">
            {["Home", "About", "Winners", "Gallery", "Jury", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                className="font-condensed text-sm font-medium tracking-[0.1em] uppercase text-foreground/70 no-underline hover:text-secondary">
                {item}
              </a>
            ))}
            <a href="https://pages.razorpay.com/pl_OS8aVodkJGyGwi/view" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-condensed text-xs font-bold tracking-[0.12em] uppercase px-5 py-2.5 rounded w-fit">
              Get ITOTY Pass
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
