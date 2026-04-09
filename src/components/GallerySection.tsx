const galleryImages = [
  "https://www.itoty.org/assets/images/event/event1.jpg",
  "https://www.itoty.org/assets/images/event/event2.jpg",
  "https://www.itoty.org/assets/images/event/event3.jpg",
  "https://www.itoty.org/assets/images/event/event4.jpg",
  "https://www.itoty.org/assets/images/event/event5.jpg",
  "https://www.itoty.org/assets/images/event/event6.jpg",
  "https://www.itoty.org/assets/images/event/event7.jpg",
  "https://www.itoty.org/assets/images/event/event8.jpg",
  "https://www.itoty.org/assets/images/event/event9.jpg",
  "https://www.itoty.org/assets/images/event/event10.jpg",
  "https://www.itoty.org/assets/images/event/event11.jpg",
  "https://www.itoty.org/assets/images/event/event12.jpg",
];

const GallerySection = () => (
  <section className="py-20 lg:py-28 bg-card" id="gallery">
    <div className="section-container">
      <div className="section-label">
        <div className="w-8 h-px bg-secondary" />
        <span className="font-condensed text-xs font-semibold tracking-[0.2em] uppercase text-secondary">Event Gallery</span>
      </div>
      <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-14">
        ITOTY <em className="italic text-secondary">showcase</em>
      </h2>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
        {galleryImages.map((src, i) => (
          <div key={i} className="break-inside-avoid mb-3 rounded overflow-hidden group">
            <img
              src={src}
              alt={`ITOTY Event ${i + 1}`}
              className="w-full block rounded object-cover group-hover:scale-[1.03] transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
