import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export default function ContactSection() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 parallax-bg opacity-10"
        style={{ backgroundImage: `url(https://www.curritravel.al/foto/Shkoder-to-Shala-River-Komani-Lake-Albania-Miki-Tours.jpeg)` }}
      />
      <div className="absolute inset-0 bg-background/92" />

      <div ref={ref} className="relative z-10 container mx-auto px-6 scroll-reveal">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <Phone size={22} />
              </div>
              <p className="text-sm font-semibold mb-2">Call Us</p>
              <div className="flex flex-col gap-1">
                <a href="tel:+355684379620" className="text-muted-foreground text-[10px] break-all hover:text-primary transition-colors">+355 68 437 9620</a>
                <a href="tel:+355684248959" className="text-muted-foreground text-[10px] break-all hover:text-primary transition-colors">+355 68 424 8959</a>
              </div>
            </div>
            
            <a href="mailto:andicurri00@gmail.com" className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <Mail size={22} />
              </div>
              <p className="text-sm font-semibold mb-1">Email Us</p>
              <p className="text-muted-foreground text-xs break-all">andicurri00@gmail.com</p>
            </a>

            <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <MapPin size={22} />
              </div>
              <p className="text-sm font-semibold mb-1">Location</p>
              <p className="text-muted-foreground text-xs break-all">Koman, Shkodër</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://wa.me/355684379620?text=Hello!%20I'd%20like%20some%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-lg shadow-primary/20"
              >
                WhatsApp 1
              </a>
              <a
                href="https://wa.me/355684248959?text=Hello!%20I'd%20like%20some%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl glass text-foreground font-semibold hover:bg-secondary/80 active:scale-[0.97] transition-all duration-200"
              >
                WhatsApp 2
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://www.instagram.com/boat_trip_curri_travel?igsh=MXkwZXJkdXZhM3NqOA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all active:scale-90"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@curri_travel?_r=1&_t=ZS-94xknIVF91w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all active:scale-90"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
