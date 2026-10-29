import { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { config, ui, type Lang } from './content';
import { LangContext, useLang } from './i18n';
import Home from './pages/Home';
import RansomGuard from './pages/RansomGuard';

function RootRedirect() {
  let lang: Lang = navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  try {
    const s = localStorage.getItem('lang');
    if (s === 'fr' || s === 'en') lang = s;
  } catch { /* stockage indisponible */ }
  return <Navigate to={`/${lang}`} replace />;
}

export function NotFound({ standalone = false }: { standalone?: boolean }) {
  const ctx = useLang();
  const t = standalone ? null : ctx.t;
  return (
    <main id="main" className="wrap notfound">
      {[t ?? ui.fr, ...(t ? [] : [ui.en])].map((x, i) => (
        <div key={i}>
          <h1>{x.notFound.h}</h1>
          <p>{x.notFound.p}</p>
          <Link className="btn" to={standalone ? (i === 0 ? '/fr' : '/en') : `/${ctx.lang}`}>{x.notFound.back}</Link>
        </div>
      ))}
    </main>
  );
}

function Layout() {
  const { lang } = useParams();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const valid = lang === 'fr' || lang === 'en';
  const l: Lang = lang === 'en' ? 'en' : 'fr';
  const t = ui[l];

  useEffect(() => {
    if (!valid) return;
    document.documentElement.lang = l;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.desc);
    try { localStorage.setItem('lang', l); } catch { /* ignoré */ }
  }, [valid, l, t]);

  useEffect(() => {
    setOpen(false);
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  if (!valid) return <NotFound standalone />;

  const other: Lang = l === 'fr' ? 'en' : 'fr';
  const switchTo = pathname.replace(/^\/(fr|en)/, `/${other}`) + hash;
  const links: [string, string][] = [
    ['home', ''], ['about', '#about'], ['skills', '#skills'], ['projects', '#projects'], ['path', '#path'], ['contact', '#contact'],
  ];

  return (
    <LangContext.Provider value={{ lang: l, t }}>
      <a className="skip" href="#main">{t.nav.skip}</a>
      <header className="top">
        <div className="wrap bar">
          <Link to={`/${l}`} className="brand">monhamad<span>.dev</span></Link>
          <button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}<span className="sr">{t.nav.menu}</span>
          </button>
          <nav id="nav" className={open ? 'open' : ''} aria-label="Navigation">
            {links.map(([k, h]) => (
              <Link key={k} to={`/${l}${h}`}>{t.nav[k as keyof typeof t.nav]}</Link>
            ))}
            <Link className="lang" to={switchTo} hrefLang={other} lang={other} aria-label={t.nav.switch}>{t.nav.switchLabel}</Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer>
        <div className="wrap foot">
          <p>© {new Date().getFullYear()} {config.name}. {t.footer}</p>
          <p>
            <a href={config.github} rel="noopener noreferrer" aria-label="GitHub"><Github size={18} aria-hidden /></a>{' '}
            <a href={config.linkedin} rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} aria-hidden /></a>
          </p>
        </div>
      </footer>
    </LangContext.Provider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects/ransomguard" element={<RansomGuard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
