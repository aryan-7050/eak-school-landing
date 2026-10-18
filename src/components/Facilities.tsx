import { ArrowRight } from 'lucide-react';
import { FACILITIES } from '@/data/content';
import { Reveal } from './Reveal';
import { useEnquiry } from './EnquiryProvider';

export function Facilities() {
  const { openEnquiry } = useEnquiry();
  const [feature, ...rest] = FACILITIES;

  return (
    <section id="facilities" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Facilities</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Spaces designed to spark wonder
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              A 9-acre campus with research-grade labs, smart classrooms, a
              sports complex, and caring, safety-first infrastructure.
            </p>
          </div>
          <button
            onClick={openEnquiry}
            className="btn-secondary shrink-0"
          >
            Book a campus visit <ArrowRight size={15} />
          </button>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Feature card */}
          <Reveal className="lg:col-span-6">
            <article className="group relative h-full min-h-[22rem] overflow-hidden rounded-3xl shadow-soft ring-1 ring-ink-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-7 text-white">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                  <feature.icon size={24} />
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/85">
                  {feature.description}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
            {rest.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl bg-white/90 text-brand-700 shadow-soft backdrop-blur">
                      <f.icon size={18} />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-ink-950">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                      {f.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
