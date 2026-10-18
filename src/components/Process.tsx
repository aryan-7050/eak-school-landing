import { PROCESS } from '@/data/content';
import { Reveal } from './Reveal';

export function Process() {
  return (
    <section id="process" className="relative bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Admission Process</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Five simple steps to enrollment
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            A clear, transparent process — from your first enquiry to your
            childs first day as part of the EAK family.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />

          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 90} className="relative">
                <li className="group flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white text-brand-700 shadow-card ring-1 ring-brand-100 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <span className="font-display text-lg font-extrabold">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
