import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { Reveal } from './Reveal';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Parent Voices</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
 Loved by parents, trusted with futures</h2>
          <p className="mt-4 text-lg text-ink-500">
            Real stories from EAK families - the confidence, care, and growth
            they ve seen in their children.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 80}>
              <figure className="group flex h-full flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <Quote
                  size={28}
                  className="text-brand-200 transition-colors group-hover:text-brand-400"
                />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                  “{t.quote}”
                </blockquote>
                <div className="mt-4 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      size={15}
                      className="fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-soft"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-bold text-ink-950">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.relation}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
