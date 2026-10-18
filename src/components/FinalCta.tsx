import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import { FINAL_CTA_IMAGE, SCHOOL } from '@/data/content';
import { Reveal } from './Reveal';
import { useEnquiry } from './EnquiryProvider';

export function FinalCta() {
  const { openEnquiry } = useEnquiry();

  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <img
          src={FINAL_CTA_IMAGE}
          alt="Students celebrating graduation"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-ink-950/85" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25 backdrop-blur">
            Admissions Open · {SCHOOL.session}
          </span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Give your child a{' '}
            <span className="bg-gradient-to-r from-gold-200 to-gold-400 bg-clip-text text-transparent">
              future-ready education
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Limited seats available across all grades for {SchoolSession()}.
            Begin your childs EAK journey today our admissions team is here
            to help at every step.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button onClick={openEnquiry} className="btn-primary">
              Apply Now <ArrowRight size={16} />
            </button>
            <a href="#process" className="btn-ghost">
              <CalendarCheck size={16} /> Book a Campus Visit
            </a>
            <a
              href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`}
              className="btn-ghost"
            >
              <Phone size={16} /> Talk to Admissions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SchoolSession() {
  return SCHOOL.session;
}
