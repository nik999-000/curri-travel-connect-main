import { useScrollReveal } from '@/hooks/useScrollReveal';
import { User, Users, Crown, Play } from 'lucide-react';

const plans = [
  {
    icon: User,
    title: '1 Person',
    price: '25€',
    desc: 'Boat rides on the lake available daily from 9:00 AM to 10:30 AM.',
    img: '/images/koman-kayak.webp',
    video: '/videos/gallery-video-2.mp4',
  },
  {
    icon: Users,
    title: '1–3 People',
    price: '50€',
    desc: '1-Hour Trip for 1–3 Participants',
    img: '/images/shala-beach.webp',
    video: '/videos/gallery-video-3.mp4',
    featured: true,
  },
  {
    icon: Crown,
    title: 'Private',
    price: '150€',
    desc: 'Private trips with no fixed schedule or time limits.',
    img: '/images/koman-house.webp',
    video: '/videos/gallery-video-4.mp4',
  },
];

export default function PricingSection() {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="py-24 md:py-32 overflow-hidden">
      <div ref={ref} className="container mx-auto px-6 scroll-reveal">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-3">Pricing</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            The <span className="text-gradient">Perfect</span> Plan for You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={p.title}
              className={`glass-card rounded-2xl overflow-hidden scroll-reveal group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ${p.featured ? 'ring-2 ring-primary/40 scale-[1.02]' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                {/* Background Video or Photo */}
                <video
                  src={p.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
                
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-4xl font-bold text-foreground">{p.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary opacity-80">
                    <p.icon size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">{p.title}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-display text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 min-h-[48px]">{p.desc}</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/355684248959?text=Hello!%20I'd%20like%20to%20book:%20${encodeURIComponent(p.title)}%20(${p.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm active:scale-[0.97] transition-all duration-300 ${
                      p.featured
                        ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/30'
                        : 'glass text-foreground'
                    }`}
                  >
                    Book on WhatsApp
                    <Play size={10} fill="currentColor" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
