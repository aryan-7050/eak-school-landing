
import { HIGHLIGHTS, type Stat } from '@/data/content';
import { Reveal } from './Reveal';
import { useCountUp, useReveal } from '@/hooks/useReveal';

export function Highlights() {
  return (
    <section
      id="highlights"
      className="relative isolate overflow-hidden bg-brand-950 py-20 text-white lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-900 via-brand-950 to-ink-950" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
            School Highlights
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Numbers that tell our story
          </h2>

          <p className="mt-4 text-lg text-white/70">
            Nearly three decades of consistent academic excellence, care, and
            community backed by a global alumni network.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatCard stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''), 10) || 0;
  const hasSuffix = stat.value.includes('+');
  const hasComma = stat.value.includes(',');

  const animated = useCountUp(numeric, visible);

  const display = (() => {
    if (numeric === 0) return stat.value;

    const num = Math.round(animated);
    const formatted = hasComma
      ? num.toLocaleString('en-IN')
      : String(num);

    return formatted + (hasSuffix ? '+' : '');
  })();

  return (
    <div
      ref={ref}
      className="group rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/30"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-gold-300 ring-1 ring-white/20">
        <stat.icon size={24} />
      </span>

      <p className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white lg:text-5xl">
        {display}
      </p>

      <p className="mt-2 text-sm font-medium text-white/70">
        {stat.label}
      </p>
    </div>
  );
}
