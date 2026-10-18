import { ArrowRight, CalendarCheck, Phone, Sparkles, Star } from 'lucide-react';
import { HERO_IMAGE, SECONDARY_HERO_IMAGE, SCHOOL } from '@/data/content';
import { useEnquiry } from './EnquiryProvider';

export function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={HERO_IMAGE}
          alt="Students learning together at EAK International School"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/85 to-ink-950/80" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/25 backdrop-blur animate-fade-in">
              Admissions Open · {SCHOOL.session}
            </div>

            <h1
              className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-up"
              style={{ textWrap: 'balance' }}
            >
              Where curious minds become{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 bg-gradient-to-r from-gold-200 to-gold-400 bg-clip-text text-transparent">
                  confident futures
                </span>
              </span>
              .
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              {SCHOOL.name} invites families to apply for{' '}
              {SCHOOL.session}. World-class faculty, future-ready skills, and a
              caring campus — designed to help every child thrive.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              <button onClick={openEnquiry} className="btn-primary">
                Apply Now <ArrowRight size={16} />
              </button>
              <a href="#process" className="btn-ghost">
                <CalendarCheck size={16} /> Schedule a Visit
              </a>
              <a
                href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`}
                className="btn-ghost"
              >
                <Phone size={16} /> Enquire Now
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="h-7 w-7 rounded-full ring-2 ring-brand-950"
                      style={{
                        backgroundImage: `url(${SECONDARY_HERO_IMAGE})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: `hue-rotate(${i * 25}deg)`,
                      }}
                    />
                  ))}
                </div>
                <span>
                  <strong className="text-white">2,400+</strong> happy families
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold-300 text-gold-300"
                    />
                  ))}
                </div>
                <span>
                  <strong className="text-white">4.9/5</strong> parent rating
                </span>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto max-w-sm rounded-3xl bg-white/10 p-2.5 ring-1 ring-white/20 backdrop-blur-md animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={SECONDARY_HERO_IMAGE}
                  alt="EAK students collaborating on campus"
                  className="aspect-square w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 shadow-card sm:block animate-float-slow">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-success-500 text-white">
                    <Sparkles size={20} />
                  </span>
                  <div>
                    <p className="font-display text-2xl font-extrabold leading-none text-ink-950">
                      97%
                    </p>
                    <p className="text-xs font-medium text-ink-500">
                      board distinction rate
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -right-5 -top-5 hidden rounded-2xl bg-white p-4 shadow-card sm:block animate-float-slow"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="font-display text-2xl font-extrabold leading-none text-ink-950">
                  12:1
                </p>
                <p className="text-xs font-medium text-ink-500">
                  student-teacher
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#ffffff"
            d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
