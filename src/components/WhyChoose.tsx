import { WHY_CHOOSE } from '@/data/content';
import { Reveal } from './Reveal';

export function WhyChoose() {
  return (
    <section id="why" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why EAK</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            A school built around how children{' '}
            <span className="text-brand-600">actually learn</span>
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Eight reasons families across the city choose EAK for their
            children from the early years through to university.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
              <article className="group h-full rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:ring-brand-200">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
