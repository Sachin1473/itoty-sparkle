import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-secondary" id="contact">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left */}
        <div>
          <div className="section-label mb-4">
            <div className="w-8 h-px bg-primary/50" />
            <span className="font-condensed text-xs font-semibold tracking-[0.2em] uppercase text-gold-light">Get in Touch</span>
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight text-secondary-foreground mb-6">
            Be part of <em className="italic text-primary">ITOTY 2026</em>
          </h2>
          <p className="text-base font-light leading-relaxed text-secondary-foreground/65 mb-9">
            Whether you're a tractor brand looking to nominate, a journalist seeking credentials, or a partner interested in sponsorship — we'd love to hear from you.
          </p>

          <div className="space-y-5">
            {[
              { icon: "📍", title: "Alwar, Rajasthan", sub: "3rd Floor, M M Tower, Agarsen Circle" },
              { icon: "📍", title: "Noida, Uttar Pradesh", sub: "3rd Floor, Tower 23, A23 Block, Sector 9" },
              { icon: "📞", title: "Call Us", sub: "+91-8094783752" },
              { icon: "✉️", title: "Mail Us", sub: "info@itoty.org" },
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                  {c.icon}
                </div>
                <div>
                  <strong className="block text-sm text-secondary-foreground mb-0.5">{c.title}</strong>
                  <span className="text-[13px] text-secondary-foreground/50">{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-foreground/20 rounded-lg p-8 lg:p-10">
          <div className="mb-7">
            <div className="font-heading text-2xl font-semibold text-secondary-foreground mb-1">Register Your Interest</div>
            <div className="text-[13px] text-secondary-foreground/45">Fill in your details and we'll get back to you shortly.</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary-foreground/50 mb-2">First Name</label>
              <input type="text" placeholder="Rajat" className="w-full bg-secondary-foreground/6 border border-primary/20 rounded-sm px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary-foreground/50 mb-2">Last Name</label>
              <input type="text" placeholder="Gupta" className="w-full bg-secondary-foreground/6 border border-primary/20 rounded-sm px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary-foreground/50 mb-2">Email Address</label>
            <input type="email" placeholder="you@company.com" className="w-full bg-secondary-foreground/6 border border-primary/20 rounded-sm px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 outline-none focus:border-primary transition-colors" />
          </div>

          <div className="mb-4">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary-foreground/50 mb-2">I am interested in</label>
            <select className="w-full bg-secondary-foreground/6 border border-primary/20 rounded-sm px-4 py-3 text-sm text-secondary-foreground outline-none focus:border-primary transition-colors">
              <option value="">Select an option</option>
              <option>Nominating a product</option>
              <option>Sponsorship / Partnership</option>
              <option>Media Credentials</option>
              <option>Attending the ceremony</option>
              <option>General Enquiry</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-[11px] font-semibold tracking-[0.14em] uppercase text-secondary-foreground/50 mb-2">Message (optional)</label>
            <textarea placeholder="Tell us more..." className="w-full bg-secondary-foreground/6 border border-primary/20 rounded-sm px-4 py-3 text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 outline-none focus:border-primary transition-colors min-h-[100px] resize-y" />
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className={`w-full font-condensed text-sm font-bold tracking-[0.14em] uppercase py-3.5 rounded transition-all ${
              submitted ? "bg-forest-light text-secondary-foreground" : "bg-primary text-primary-foreground hover:brightness-110"
            }`}
          >
            {submitted ? "Submitted ✓" : "Submit Registration"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
