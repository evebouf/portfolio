import React, { useEffect, useState } from 'react';
import './Homepage.scss';

type Mode = 'human' | 'machine';

const MARKDOWN_SOURCE = `# Eve Bouffard

Designer turned design engineer at [Y Combinator](https://yc.com),
where I most recently redesigned and built the new YC homepage.

---

## 01 Projects

- **[YC Website](/)** — Redesigned and built the new homepage.
- **[YC Application Portal](/)** — How 100,000+ startups apply every year.
- **[YC Application Review](/)** — Internal tool for reviewing applications.
- **[Startup School 2026](/)** — Creative for YC's 6,000-person event.

## 02 Explorations

- **[Paper Effects](/explorations/paper-effects)** — Interactive effect experiments.
- **[Paper Filters](/explorations/paper-filters)** — Interactive filter experiments.
- **[Photography](/photography)** — A collection of photographs.

## 03 Writings

*coming soon*

## 04 Bookmarks

- **[Collection](/bookmarks)** — Sites and pages that inspire me.

---

## Contact

Please reach out! I'd love to connect :)

[Email](mailto:e.bouffard252@gmail.com) · [X](https://x.com/eve_bouff) · [LinkedIn](https://linkedin.com/in/eve-bouffard)`;

const Homepage: React.FC = () => {
  const [mode, setMode] = useState<Mode>('human');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('e.bouffard252@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('machine-mode', mode === 'machine');
    document.documentElement.classList.toggle('machine-mode', mode === 'machine');
    return () => {
      document.body.classList.remove('machine-mode');
      document.documentElement.classList.remove('machine-mode');
    };
  }, [mode]);

  const lines = MARKDOWN_SOURCE.split('\n');

  const projects = [
    { title: 'YC Website', desc: 'Redesigned and built the new homepage.', link: '/projects/yc-website', soon: true },
    { title: 'YC Application Portal', desc: 'How 100,000+ startups apply every year.', link: null as string | null, soon: true },
    { title: 'YC Application Review', desc: 'Internal tool for reviewing applications.', link: null as string | null, soon: true },
    { title: 'Startup School 2026', desc: "Creative for YC's 6,000-person event.", link: null as string | null, soon: true },
    { title: 'State of the Art', desc: 'Collaborative editorial project.', link: null as string | null, soon: true },
  ];

  const explorations = [
    { title: 'Paper Effects', desc: 'Interactive effect experiments.', link: '/explorations/paper-effects' },
    { title: 'Paper Filters', desc: 'Interactive filter experiments.', link: '/explorations/paper-filters' },
    { title: 'Agent UX Anatomy', desc: 'Visual guide to agent interfaces.', link: '/research/agent-builders' },
    { title: 'Photography', desc: 'A collection of photographs.', link: '/photography' },
  ];

  return (
    <div className={`homepage-wrapper mode-${mode}`}>
      {/* ── HUMAN VIEW ── */}
      {mode === 'human' && (
        <div className="grid-page">
          {/* Grid column indicators */}
          <div className="grid-overlay" aria-hidden="true">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="grid-col">
                <span className="grid-col-num">{n}</span>
              </div>
            ))}
          </div>

          {/* Content on the grid */}
          <div className="grid-content">
            <header className="grid-header">
              <h1 className="grid-name">Eve Bouffard</h1>
              <p className="grid-bio">
                Designer turned design engineer at{' '}
                <a
                  href="https://www.ycombinator.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid-link"
                >
                  Y Combinator
                </a>
                , where I most recently redesigned and built the new YC homepage.
              </p>
            </header>

            {/* 01 Projects */}
            <section className="grid-section">
              <div className="grid-label">01 Projects</div>
              <div className="grid-items">
                {projects.map((p, i) => {
                  const inner = (
                    <>
                      <span className="grid-row-title">{p.title}</span>
                      <span className="grid-row-desc">{p.desc}</span>
                      {p.soon && <span className="grid-row-badge">soon</span>}
                    </>
                  );
                  return p.link ? (
                    <a key={i} href={p.link} className="grid-row grid-row-link">
                      {inner}
                    </a>
                  ) : (
                    <div key={i} className="grid-row">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 02 Explorations */}
            <section className="grid-section">
              <div className="grid-label">02 Explorations</div>
              <div className="grid-items">
                {explorations.map((e, i) => (
                  <a key={i} href={e.link} className="grid-row grid-row-link">
                    <span className="grid-row-title">{e.title}</span>
                    <span className="grid-row-desc">{e.desc}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* 03 Writings */}
            <section className="grid-section">
              <div className="grid-label">03 Writings</div>
              <div className="grid-items">
                <span className="grid-coming-soon">coming soon</span>
              </div>
            </section>

            {/* 04 Bookmarks */}
            <section className="grid-section">
              <div className="grid-label">04 Bookmarks</div>
              <div className="grid-items">
                <a href="/bookmarks" className="grid-row grid-row-link">
                  <span className="grid-row-title">Collection</span>
                  <span className="grid-row-desc">Sites and pages that inspire me.</span>
                </a>
              </div>
            </section>

            {/* Contact */}
            <div className="grid-section grid-section-last">
              <div className="grid-label">Contact</div>
              <div className="grid-items">
                <p className="grid-contact-text">
                  Please reach out! I'd love to connect :)
                </p>
                <div className="grid-contact-links">
                  <span className="grid-link" onClick={handleCopyEmail}>
                    {emailCopied ? 'Copied!' : 'Email'}
                  </span>
                  <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="grid-link">X</a>
                  <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="grid-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MACHINE VIEW ── */}
      {mode === 'machine' && (
        <div className="machine-view">
          <div className="machine-topbar">
            <span className="machine-filename">eve.md</span>
            <span className="machine-encoding">UTF-8 / Markdown</span>
          </div>
          <div className="machine-editor">
            <div className="machine-line-numbers">
              {lines.map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="machine-gutter" />
            <pre className="machine-source">{MARKDOWN_SOURCE}</pre>
          </div>
        </div>
      )}

      {/* ── TOGGLE ── */}
      <div className={`mode-toggle toggle-${mode}`}>
        <button
          className={`toggle-option ${mode === 'human' ? 'active' : ''}`}
          onClick={() => setMode('human')}
        >
          <span className="toggle-radio" />
          HUMAN
        </button>
        <button
          className={`toggle-option ${mode === 'machine' ? 'active' : ''}`}
          onClick={() => setMode('machine')}
        >
          <span className="toggle-radio" />
          MACHINE
        </button>
      </div>
    </div>
  );
};

export default Homepage;
