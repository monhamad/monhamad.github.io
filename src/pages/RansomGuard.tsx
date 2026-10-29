import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '../i18n';

export default function RansomGuard() {
  const { lang, t } = useLang();
  const r = t.rg;
  return (
    <main id="main" className="wrap narrow case">
      <Link to={`/${lang}#projects`} className="back"><ArrowLeft size={16} aria-hidden /> {r.back}</Link>
      <h1>RansomGuard</h1>
      <p className="lead">{r.subtitle}</p>
      <p className="note">{r.status}</p>

      {r.sections.slice(0, 2).map((s) => <section key={s.h}><h2>{s.h}</h2><p>{s.p}</p></section>)}

      <ol className="flow" aria-label="Architecture">
        {r.flow.map((x) => <li key={x}>{x}</li>)}
      </ol>

      {r.sections.slice(2).map((s) => <section key={s.h}><h2>{s.h}</h2><p>{s.p}</p></section>)}

      <section>
        <h2>{r.results.h}</h2>
        <p className="big mono">{r.results.big}</p>
        <p>{r.results.p}</p>
      </section>
      <section>
        <h2>{r.limits.h}</h2>
        <ul>{r.limits.items.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
      <section>
        <h2>{r.next.h}</h2>
        <ul>{r.next.items.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
    </main>
  );
}
