import { Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <a href="#hero" className="font-display text-xl font-bold tracking-tight text-foreground">
              Curri<span className="text-gradient"> Travel</span>
            </a>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs">
              Udhëtime të paharrueshme në lumin e Shalës dhe liqenin e Komanit.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/boat_trip_curri_travel?igsh=MXkwZXJkdXZhM3NqOA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@curri_travel?_r=1&_t=ZS-94xknIVF91w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              </a>
            </div>
            
            <div className="h-4 w-px bg-border hidden sm:block" />
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-muted-foreground">
              <div className="flex flex-col gap-1">
                <a href="tel:+355684379620" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={14} />
                  +355 68 437 9620
                </a>
                <a href="tel:+355684248959" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={14} />
                  +355 68 424 8959
                </a>
              </div>
              <a href="mailto:andicurri00@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} />
                andicurri00@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground/60">
          <p>© {new Date().getFullYear()} Curri Travel. Të gjitha të drejtat e rezervuara.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
