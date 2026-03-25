import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  {
    title: 'Shala River: Crystal Clear Waters',
    desc: 'The Shala River offers a unique experience with its calm waters and enchanting natural surroundings. Suitable for all skill levels.',
    img: '/images/shala-beach.webp',
  },
  {
    title: 'Koman Lake: A Magical Journey',
    desc: 'Koman Lake is renowned for its majestic hills and deep waters, creating the perfect setting for exploration and unforgettable memories.',
    img: '/images/koman-house.webp',
  },
  {
    title: 'Custom Tours: Personalized Adventures',
    desc: 'We offer personalized tours on the most exciting rivers and lakes in Albania, guaranteeing a unique and safe adventure.',
    img: '/images/koman-kayak.webp',
  },
];

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 scroll-reveal">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-3">Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold" style={{ textWrap: 'balance' } as React.CSSProperties}>
            Choose Your <span className="text-gradient">Adventure</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass-card rounded-2xl overflow-hidden group scroll-reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <a
                  href={`https://wa.me/355684379620?text=Hello!%20I'd%20like%20info%20about:%20${encodeURIComponent(s.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Book on WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
