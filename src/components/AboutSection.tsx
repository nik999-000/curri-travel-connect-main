import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Compass, Shield, Users } from 'lucide-react';

const features = [
  { icon: Compass, title: 'Expert Guides', desc: 'Experienced captains who know every corner of these pristine waters.' },
  { icon: Shield, title: 'Maximum Safety', desc: 'Well-maintained boats with the highest safety standards.' },
  { icon: Users, title: 'Personalized Tours', desc: 'Custom tours tailored for every type of traveler.' },
];

export default function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 parallax-bg opacity-10"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      <div ref={ref} className="relative z-10 container mx-auto px-6 scroll-reveal">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-3">About Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight" style={{ textWrap: 'balance' } as React.CSSProperties}>
            Experience the Beauty of <span className="text-gradient">Koman Lake</span> & Shala River
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-3xl mx-auto" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Our boat rental agency offers safe, comfortable, and unforgettable trips through some of Albania's most stunning natural wonders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-8 text-center scroll-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <f.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
