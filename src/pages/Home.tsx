import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { config, projects, skills } from '../content';
import { useLang } from '../i18n';
import Contact from '../components/Contact';

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main id="main">
      <section id="home" className="hero">
        <div className="wrap">
          <p className="mono eyebrow">{config.name}</p>
          <h1>{t.hero.tagline}</h1>
          <p className="lead">{t.hero.role}. {t.hero.intro}</p>
          <div className="actions">
            <Link className="btn primary" to={`/${lang}#projects`}>{t.hero.projects}</Link>
            {config.cvUrl && <a className="btn" href={config.cvUrl} download>{t.hero.cv}</a>}
            <a className="btn" href={config.github} rel="noopener noreferrer"><Github size={16} aria-hidden /> GitHub</a>
            <a className="btn" href={config.linkedin} rel="noopener noreferrer"><Linkedin size={16} aria-hidden /> LinkedIn</a>
            <a className="btn" href={`mailto:${config.email}`}><Mail size={16} aria-hidden /> {t.hero.contact}</a>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap narrow">
          <h2>{t.about.h}</h2>
          {t.about.p.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <h2>{t.skills.h}</h2>
          <p className="muted">{t.skills.intro}</p>
          <div className="grid">
            {skills.map((g) => (
              <div className="card" key={g.group.fr}>
                <h3>{g.group[lang]}</h3>
                <ul className="plain">
                  {g.items.map((s) => (
                    <li key={s.name}>
                      <span>{s.name}</span>
                      <span className={`badge ${s.status}`}>{t.skills.status[s.status]}</span>
                      {s.proof && <small className="muted">{t.skills.proof} {s.proof}</small>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <h2>{t.projects.h}</h2>
          <p className="muted">{t.projects.intro}</p>
          <div className="grid">
            {projects.map((p) => (
              <article className={`card${p.detail ? ' featured' : ''}`} key={p.id}>
                <h3>{p.name}</h3>
                <p>{p.summary[lang]}</p>
                {p.result && <p className="result">{p.result[lang]}</p>}
                <ul className="tags">{p.tech.map((x) => <li key={x}>{x}</li>)}</ul>
                <div className="links">
                  {p.detail && <Link to={`/${lang}/projects/ransomguard`}>{t.projects.detail}</Link>}
                  {p.repo
                    ? <a href={p.repo} target="_blank" rel="noopener noreferrer">{t.projects.repo}</a>
                    : <span className="muted">{t.projects.noRepo}</span>}
                </div>
              </article>
            ))}
          </div>
          <p className="muted other"><strong>{t.projects.others}.</strong> {t.projects.othersText}</p>
        </div>
      </section>

      <section id="path">
        <div className="wrap narrow">
          <h2>{t.path.h}</h2>
          <ol className="timeline">
            {t.path.items.map((i) => (
              <li key={i.when + i.what}>
                <span className="mono when">{i.when}</span>
                <span className="kind">{i.kind}</span>
                <strong>{i.what}</strong>
                <span className="muted">{i.where}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="lab">
        <div className="wrap">
          <h2>{t.lab.h}</h2>
          <p className="muted">{t.lab.intro}</p>
          <div className="grid">{t.lab.items.map((i) => <div className="card" key={i.t}><h3>{i.t}</h3><p>{i.p}</p></div>)}</div>
        </div>
      </section>

      <section id="learning">
        <div className="wrap">
          <h2>{t.learning.h}</h2>
          <p className="muted">{t.learning.intro}</p>
          <div className="grid">{t.learning.items.map((i) => <div className="card" key={i.t}><h3>{i.t}</h3><p>{i.p}</p></div>)}</div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap narrow">
          <h2>{t.contact.h}</h2>
          <p>{t.contact.intro}</p>
          <Contact />
        </div>
      </section>
    </main>
  );
}
