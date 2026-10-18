import { useEffect, useState } from 'react';
import { GraduationCap, Menu, Phone, X } from 'lucide-react';
import { NAV_LINKS, SCHOOL } from '@/data/content';
import { useEnquiry } from './EnquiryProvider';
import { useScrolled, useScrollSpy } from '@/hooks/useReveal';

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(20);
  const { openEnquiry } = useEnquiry();
  const active = useScrollSpy(
    ['why', 'programs', 'highlights', 'facilities', 'process', 'fees', 'faqs'],
    140
  );

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-soft backdrop-blur-md ring-1 ring-ink-100'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${SCHOOL.name} home`}
        >
          <span
            className={`grid h-10 w-10 place-items-center rounded-xl shadow-soft transition-colors ${
              scrolled
                ? 'bg-brand-600 text-white'
                : 'bg-white/15 text-white ring-1 ring-white/30 backdrop-blur'
            }`}
          >
            <GraduationCap size={22} />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-base font-extrabold tracking-tight transition-colors lg:text-lg ${
                scrolled ? 'text-ink-950' : 'text-white'
              }`}
            >
              EAK
            </span>
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                scrolled ? 'text-ink-500' : 'text-white/70'
              }`}
            >
              International School
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? isActive
                      ? 'text-brand-700'
                      : 'text-ink-600 hover:text-brand-700'
                    : isActive
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                      scrolled ? 'bg-brand-600' : 'bg-white'
                    }`}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? 'text-ink-700 hover:text-brand-700' : 'text-white/90 hover:text-white'
            }`}
          >
            <Phone size={16} /> {SCHOOL.phone}
          </a>
          <button onClick={openEnquiry} className="btn-primary">
            Apply Now
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-xl transition lg:hidden ${
            scrolled
              ? 'text-ink-800 hover:bg-ink-100'
              : 'text-white hover:bg-white/15'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[80vh] opacity-100 shadow-card' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`}
            className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-ink-700"
          >
            <Phone size={16} /> {SCHOOL.phone}
          </a>
          <button
            onClick={() => {
              setOpen(false);
              openEnquiry();
            }}
            className="btn-primary mt-2"
          >
            Apply Now
          </button>
        </nav>
      </div>
    </header>
  );
}
