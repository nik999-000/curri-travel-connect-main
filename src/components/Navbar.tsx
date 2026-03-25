import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Booking', href: '#booking' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#hero" className="font-display text-2xl font-bold tracking-tight text-foreground">
          Curri<span className="text-gradient"> Travel</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/355684379620?text=Hello!%20I%20would%20like%20to%20book%20a%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            Book on WhatsApp
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground active:scale-95 transition-transform">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-strong border-t border-border animate-fade-in">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/355684379620?text=Hello!%20I%20would%20like%20to%20book%20a%20tour."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
