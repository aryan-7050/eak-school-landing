import { CalendarClock, CheckCircle2 } from 'lucide-react';
import { DOCUMENTS, IMPORTANT_DATES } from '@/data/content';
import { Reveal } from './Reveal';

export function DatesAndDocs() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Important dates */}
          <div id="dates">
            <Reveal>
              <span className="section-eyebrow">Important Dates</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Mark your calendar
              </h2>
              <p className="mt-4 text-ink-500">
                Key dates for the {`2027–28`} admission cycle. We recommend
                applying early as seats are limited.
              </p>
            </Reveal>

            <ol className="mt-8 space-y-4">
              {IMPORTANT_DATES.map((event, i) => (
                <Reveal key={event.title} delay={i * 70}>
                  <li className="group flex items-stretch gap-4 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100 transition-all hover:ring-brand-200 hover:shadow-card">
                    <div className="flex w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-600 py-2 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-100">
                        {event.month}
                      </span>
                      <span className="font-display text-xl font-extrabold leading-none">
                        {event.date.replace(/[^0-9]/g, '').slice(0, 2)}
                      </span>
                      <span className="text-[10px] font-medium text-brand-100">
                        {event.weekday}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-ink-950">
                        {event.title}
                      </h3>
                      <p className="text-sm text-ink-500">{event.note}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
                        {event.date}
                      </p>
                    </div>
                    <CalendarClock
                      size={20}
                      className="hidden shrink-0 text-ink-300 transition-colors group-hover:text-brand-500 sm:block"
                    />
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* Required documents */}
          <div id="documents">
            <Reveal>
              <span className="section-eyebrow">Required Documents</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                What to keep ready
              </h2>
              <p className="mt-4 text-ink-500">
                A simple checklist of documents to submit along with your
                child’s application form.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {DOCUMENTS.map((doc, i) => (
                <Reveal key={doc.title} delay={i * 60}>
                  <li className="group flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100 transition-all hover:ring-success-500/40 hover:shadow-card">
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-success-600"
                    />
                    <div>
                      <p className="font-semibold text-ink-950">{doc.title}</p>
                      <p className="text-sm text-ink-500">{doc.note}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-6 rounded-2xl bg-gold-50 p-5 ring-1 ring-gold-100">
                <p className="text-sm text-ink-700">
                  <strong className="text-ink-950">Tip:</strong> Keep scanned
                  copies (PDF, under 2 MB each) ready before you start the
                  application — it takes less than 15 minutes to complete.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
