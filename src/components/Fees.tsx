import { Check, FileText, Info } from 'lucide-react';
import { FEES } from '@/data/content';
import { Reveal } from './Reveal';
import { useEnquiry } from './EnquiryProvider';

export function Fees() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="fees" className="relative bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Fee Information</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Transparent, predictable fees
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            A simple annual structure with no hidden charges. Sibling and
            merit-based scholarships are available ask our admissions team.
          </p>
        </Reveal>

        {/* Desktop table */}
        <Reveal className="mt-12 hidden overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-ink-100 md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-brand-950 text-white">
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                  Grade Range
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                  Annual Fee
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                  Admission Fee
                </th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider">
                  Includes
                </th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {FEES.map((row) => (
                <tr
                  key={row.grade}
                  className="group transition-colors hover:bg-brand-50/60"
                >
                  <td className="px-6 py-5">
                    <span className="font-display text-lg font-bold text-ink-950">
                      {row.grade}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-semibold text-ink-900">
                      {row.annual}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="font-semibold text-ink-900">
                      {row.admission}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-ink-500">
                    {row.includes}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={openEnquiry}
                      className="text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Enquire →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="mt-12 grid gap-5 md:hidden">
          {FEES.map((row, i) => (
            <Reveal key={row.grade} delay={i * 70}>
              <article className="rounded-3xl bg-white p-5 shadow-soft ring-1 ring-ink-100">
                <h3 className="font-display text-lg font-bold text-ink-950">
                  {row.grade}
                </h3>
                <dl className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      Annual Fee
                    </dt>
                    <dd className="mt-1 font-display text-xl font-bold text-brand-700">
                      {row.annual}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">
                      Admission Fee
                    </dt>
                    <dd className="mt-1 font-display text-xl font-bold text-ink-900">
                      {row.admission}
                    </dd>
                  </div>
                </dl>
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-ink-50 p-3 text-sm text-ink-600">
                  <Check size={16} className="mt-0.5 shrink-0 text-success-600" />
                  {row.includes}
                </p>
                <button
                  onClick={openEnquiry}
                  className="btn-secondary mt-4 w-full"
                >
                  Enquire about {row.grade}
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink-100">
            <Info size={20} className="mt-0.5 shrink-0 text-brand-600" />
            <p className="text-sm text-ink-600">
              <strong className="text-ink-950">What’s included:</strong> Tuition,
              library, technology, labs, and most co-curricular activities.
              Transport and uniforms are billed separately.
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-ink-100">
            <FileText size={20} className="mt-0.5 shrink-0 text-gold-600" />
            <p className="text-sm text-ink-600">
              <strong className="text-ink-950">Scholarships:</strong> Up to 25%
              fee waiver for siblings and merit scholars. Reach out to learn
              more.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
