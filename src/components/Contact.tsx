import { useState, type FormEvent } from 'react';
import { config } from '../content';
import { useLang } from '../i18n';

type State = 'idle' | 'sending' | 'ok' | 'error' | 'invalid';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [state, setState] = useState<State>('idle');

  if (!config.formEndpoint) {
    return <p>{c.noService} <a href={`mailto:${config.email}`}>{config.email}</a></p>;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    if (d.get('website')) return; // champ piège anti-spam : un humain ne le remplit pas
    const v = (k: string) => String(d.get(k) ?? '').trim();
    const payload = { name: v('name'), email: v('email'), subject: v('subject'), message: v('message') };
    if (!payload.name || !payload.subject || payload.message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setState('invalid');
      return;
    }
    setState('sending');
    try {
      const r = await fetch(config.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!r.ok) throw new Error(String(r.status));
      setState('ok');
      form.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="form">
      <label>{c.name}<input name="name" autoComplete="name" required /></label>
      <label>{c.email}<input name="email" type="email" autoComplete="email" required /></label>
      <label>{c.subject}<input name="subject" required /></label>
      <label>{c.message}<textarea name="message" rows={5} required /></label>
      <div className="trap" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <button className="btn primary" disabled={state === 'sending'}>{state === 'sending' ? c.sending : c.send}</button>
      <p role="status" className={state === 'ok' ? 'ok' : 'err'}>
        {state === 'ok' && c.ok}{state === 'error' && c.error}{state === 'invalid' && c.invalid}
      </p>
    </form>
  );
}
