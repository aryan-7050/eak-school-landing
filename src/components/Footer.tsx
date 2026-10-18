import {
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { NAV_LINKS, SCHOOL } from '@/data/content';
import { useEnquiry } from './EnquiryProvider';

export function Footer() {
  const { openEnquiry } = useEnquiry();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                <GraduationCap size={22} />
              </span>
              <div className="leading-tight">
                <p className="font-display text-lg font-extrabold">EAK</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  International School
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Nurturing curious, confident, and compassionate learners since{' '}
              {SCHOOL.established}. A place where every child is known, valued,
              and inspired to grow.
            </p>
            <button onClick={openEnquiry} className="btn-primary mt-6">
              Start your enquiry
            </button>
          </div>

          <nav
            className="lg:col-span-3"
            aria-label="Footer navigation"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
              Reach us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" />
                <span>{SCHOOL.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand-400" />
                <a
                  href={`tel:${SCHOOL.phone.replace(/\s/g, '')}`}
                  className="transition hover:text-white"
                >
                  {SCHOOL.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand-400" />
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="transition hover:text-white"
                >
                  {SCHOOL.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-brand-400" />
                <span>{SCHOOL.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {SCHOOL.name}. All rights reserved. Desgin and Development by Aryan Patil.
          </p>
          <p className="flex items-center gap-4">
            <a href="#top" className="transition hover:text-white">
              Back to top ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
