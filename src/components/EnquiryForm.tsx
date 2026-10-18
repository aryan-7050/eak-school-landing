import { useState } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

type EnquiryFormProps = {
  onSubmitted?: () => void;
  compact?: boolean;
};

export function EnquiryForm({ onSubmitted, compact = false }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [form, setForm] = useState({
    parent: '',
    email: '',
    phone: '',
    grade: 'Grade 1–5',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Frontend-only: simulate submission
    setTimeout(() => {
      setStatus('done');
      onSubmitted?.();
    }, 900);
  };

  if (status === 'done') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-success-50 px-6 py-10 text-center">
        <CheckCircle2 className="text-success-600" size={40} />
        <h4 className="text-lg font-bold text-ink-950">Enquiry received!</h4>
        <p className="max-w-sm text-sm text-ink-600">
          Thank you, {form.parent || 'parent'}. Our admissions team will reach
          out within one working day at {form.email || 'your email'}.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({
              parent: '',
              email: '',
              phone: '',
              grade: 'Grade 1–5',
              message: '',
            });
          }}
          className="mt-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Parent / Guardian name" htmlFor="parent">
          <input
            id="parent"
            required
            value={form.parent}
            onChange={(e) => update('parent', e.target.value)}
            placeholder="e.g. Ananya Deshpande"
            className={inputCls}
          />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+91 98765 43210"
            className={inputCls}
          />
        </Field>
      </div>
      <Field label="Email address" htmlFor="email">
        <input
          id="email"
          required
          type="email"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          placeholder="you@example.com"
          className={inputCls}
        />
      </Field>
      <Field label="Grade applying for" htmlFor="grade">
        <select
          id="grade"
          value={form.grade}
          onChange={(e) => update('grade', e.target.value)}
          className={inputCls}
        >
          <option>Grade 1–5</option>
          <option>Grade 6–8</option>
          <option>Grade 9–10</option>
          <option>Grade 11–12</option>
        </select>
      </Field>
      {!compact && (
        <Field label="Message (optional)" htmlFor="message">
          <textarea
            id="message"
            rows={3}
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Tell us anything you'd like our admissions team to know."
            className={`${inputCls} resize-none`}
          />
        </Field>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={16} /> Submit Enquiry
          </>
        )}
      </button>
     
    </form>
  );
}

const inputCls =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-900 ' +
  'placeholder:text-ink-400 transition focus:border-brand-500 focus:outline-none ' +
  'focus:ring-2 focus:ring-brand-200';

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-600">
        {label}
      </span>
      {children}
    </label>
  );
}
