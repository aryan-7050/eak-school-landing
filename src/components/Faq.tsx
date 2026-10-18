import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '@/data/content';
import { Reveal } from './Reveal';
import { useEnquiry } from './EnquiryProvider';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { openEnquiry } = useEnquiry();

  return (
    <section id="faqs" className="relative bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Questions parents often ask
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            Everything you need to know about admissions, assessments, and
            visiting the campus.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl bg-white ring-1 transition-all duration-300 ${
                    isOpen
                      ? 'shadow-card ring-brand-200'
                      : 'shadow-soft ring-ink-100 hover:ring-brand-200'
                  }`}
                >
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle
                          size={20}
                          className={`shrink-0 transition-colors ${
                            isOpen ? 'text-brand-600' : 'text-ink-300'
                          }`}
                        />
                        <span className="font-semibold text-ink-950">
                          {faq.q}
                        </span>
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-ink-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand-600' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-12 text-sm leading-relaxed text-ink-600">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-ink-600">
            Still have a question?{' '}
            <button
              onClick={openEnquiry}
              className="font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Talk to our admissions team
            </button>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
