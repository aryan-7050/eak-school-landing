import { ArrowUpRight, Check } from 'lucide-react';
import { PROGRAMS } from '@/data/content';
import { Reveal } from './Reveal';
import { useEnquiry } from './EnquiryProvider';

export function Programs() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="programs" className="relative bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Academic Programs</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            A learning journey for every stage
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Four clearly designed stages from a joyful Primary foundation to
            streamed Senior Secondary pathways each with its own purpose and
            care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.level} delay={(i % 2) * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card lg:p-8">
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span
                      className={`inline-flex rounded-full bg-gradient-to-r ${p.accent} bg-clip-text text-sm font-bold uppercase tracking-wider text-transparent`}
                    >
                      {p.grades}
                    </span>
                    <h3 className="mt-2 text-2xl font-extrabold text-ink-950">
                      {p.level}
                    </h3>
                    <p className="text-sm font-medium text-ink-400">
                      {p.ages}
                    </p>
                  </div>
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${p.accent} text-white shadow-soft`}
                  >
                    <ArrowUpRight size={22} />
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ink-600">
                  {p.description}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-success-600"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openEnquiry}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:gap-2.5 hover:text-brand-800"
                >
                  Enquire about {p.level}
                  <ArrowUpRight size={15} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
