import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-secondary text-secondary-foreground" id="contact">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="font-condensed text-xs font-semibold tracking-[0.2em] uppercase text-primary">Get in Touch</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              Contact <em className="italic text-primary">Us</em>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-condensed text-sm font-bold tracking-wide uppercase mb-1">Alwar, Rajasthan</h4>
                  <p className="text-sm text-secondary-foreground/70 leading-relaxed">3rd Floor, M M Tower, Agarsen Circle</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-condensed text-sm font-bold tracking-wide uppercase mb-1">Noida, Uttar Pradesh</h4>
                  <p className="text-sm text-secondary-foreground/70 leading-relaxed">3rd Floor, Tower 23, A23 Block A, Sector 9</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-condensed text-sm font-bold tracking-wide uppercase mb-1">Call Us</h4>
                  <a href="tel:+918094783752" className="text-sm text-secondary-foreground/70 no-underline hover:text-primary transition-colors">+91-8094783752</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-condensed text-sm font-bold tracking-wide uppercase mb-1">Mail Us</h4>
                  <a href="mailto:info@itoty.org" className="text-sm text-secondary-foreground/70 no-underline hover:text-primary transition-colors">info@itoty.org</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card rounded-lg p-8 lg:p-10 text-foreground">
            <h3 className="font-heading text-2xl font-semibold mb-6">Register Your Interest</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✓</div>
                <h4 className="font-heading text-xl font-semibold mb-2">Thank You!</h4>
                <p className="text-sm text-muted-foreground">We'll be in touch soon.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded bg-muted border border-primary/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded bg-muted border border-primary/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
                </div>
                <input type="text" placeholder="Organisation" className="w-full px-4 py-3 rounded bg-muted border border-primary/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded bg-muted border border-primary/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
                <textarea rows={3} placeholder="Message" className="w-full px-4 py-3 rounded bg-muted border border-primary/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none" />
                <button type="submit" className="w-full bg-secondary text-secondary-foreground font-condensed text-sm font-bold tracking-[0.12em] uppercase px-7 py-3.5 rounded transition-all hover:bg-forest-mid">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
