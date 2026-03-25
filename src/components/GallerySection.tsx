import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, Play } from 'lucide-react';

const galleryItems = [
  { type: 'video', src: '/videos/gallery-video-1.mp4' },
  { type: 'image', src: '/images/koman-view.webp' },
  { type: 'image', src: '/images/koman-gorge.webp' },
  { type: 'image', src: '/images/koman-house.webp' },
  { type: 'image', src: '/images/koman-kayak.webp' },
  { type: 'image', src: '/images/shala-beach.webp' },
  { type: 'image', src: '/images/shala-river.webp' },
  { type: 'image', src: '/images/new-gallery-11.webp' },
  { type: 'image', src: '/images/new-gallery-12.webp' },
  { type: 'image', src: '/images/new-gallery-13.webp' },
  { type: 'image', src: '/images/albania-nature.webp' },
  { type: 'video', src: '/videos/gallery-video-3.mp4' },
  { type: 'image', src: '/images/lake-komani-ferry.webp' },
  { type: 'image', src: '/images/new-gallery-7.webp' },
  { type: 'image', src: '/images/new-gallery-8.webp' },
  { type: 'image', src: '/images/BOAT-TOUR-KOMANI-LAKE-SHALA-RIVER-ALBANIA-21.webp' },
  { type: 'video', src: '/videos/gallery-video-5.mp4' },
];

export default function GallerySection() {
  const ref = useScrollReveal();
  const [lightbox, setLightbox] = useState<{ type: string; src: string } | null>(null);

  return (
    <>
      <section id="gallery" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-background" />

        <div ref={ref} className="relative z-10 container mx-auto px-6 scroll-reveal">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.15em] uppercase mb-3">Gallery</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Moments from Our <span className="text-gradient">Journeys</span>
            </h2>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {galleryItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setLightbox(item)}
                className="relative block w-full rounded-xl overflow-hidden scroll-reveal group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative">
                    <video
                      src={item.src}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30">
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md animate-fade-in p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 z-[110] text-foreground hover:text-primary transition-colors bg-background/50 p-2 rounded-full" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <div className="relative w-full max-w-5xl flex items-center justify-center">
            {lightbox.type === 'image' ? (
              <img src={lightbox.src} alt="" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
