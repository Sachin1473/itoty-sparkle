import { useState } from "react";

const galleryByYear: Record<string, string[]> = {
  "2025": [
    "https://www.itoty.org/assets/images/event/check1.jpg",
    "https://www.itoty.org/assets/images/event/check2.jpg",
    "https://www.itoty.org/assets/images/event/check3.jpg",
    "https://www.itoty.org/assets/images/event/check4.jpg",
    "https://www.itoty.org/assets/images/event/check5.jpg",
    "https://www.itoty.org/assets/images/event/check6.jpg",
    "https://www.itoty.org/assets/images/event/check7.jpg",
    "https://www.itoty.org/assets/images/event/check8.jpg",
  ],
  "2024": [
    "https://www.itoty.org/assets/images/event/event1.jpg",
    "https://www.itoty.org/assets/images/event/event2.jpg",
    "https://www.itoty.org/assets/images/event/event3.jpg",
    "https://www.itoty.org/assets/images/event/event4.jpg",
    "https://www.itoty.org/assets/images/event/event5.jpg",
    "https://www.itoty.org/assets/images/event/event6.jpg",
  ],
  "2023": [
    "https://www.itoty.org/assets/images/event/event7.jpg",
    "https://www.itoty.org/assets/images/event/event8.jpg",
    "https://www.itoty.org/assets/images/event/event9.jpg",
    "https://www.itoty.org/assets/images/event/event10.jpg",
  ],
  "2022": [
    "https://www.itoty.org/assets/images/event/event11.jpg",
    "https://www.itoty.org/assets/images/event/event12.jpg",
    "https://www.itoty.org/assets/images/event/event13.jpg",
    "https://www.itoty.org/assets/images/event/check9.jpg",
  ],
  "2021": [
    "https://www.itoty.org/assets/images/event/check10.jpg",
    "https://www.itoty.org/assets/images/event/check11.jpg",
    "https://www.itoty.org/assets/images/event/check12.jpg",
    "https://www.itoty.org/assets/images/event/check13.jpg",
  ],
};

const years = Object.keys(galleryByYear);

const GallerySection = () => {
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <section className="py-20 lg:py-28 bg-card" id="gallery">
      <div className="section-container">
        <div className="section-label">
          <div className="w-8 h-px bg-secondary" />
          <span className="font-condensed text-xs font-semibold tracking-[0.2em] uppercase text-secondary">Event Gallery</span>
        </div>
        <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-10">
          ITOTY <em className="italic text-secondary">showcase</em>
        </h2>

        {/* Year tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`font-condensed text-sm font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-sm transition-all border ${
                activeYear === year
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-primary/20 hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {galleryByYear[activeYear].map((src, i) => (
            <div key={`${activeYear}-${i}`} className="break-inside-avoid mb-3 rounded overflow-hidden group">
              <img
                src={src}
                alt={`ITOTY ${activeYear} Event ${i + 1}`}
                className="w-full block rounded object-cover group-hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
