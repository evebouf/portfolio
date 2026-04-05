import React, { useEffect } from 'react';

const ideas: { title: string; notes: string; link?: string }[] = [
  { title: 'National Design Studio for Canada', notes: 'Inspired by Joe Gebbia\'s U.S. National Design Studio — a vision for redesigning Canadian government digital services with the same ambition.', link: '/ideas/canada-design-studio' },
  { title: 'Sims 3 Component Library', notes: 'A fun component library based on the styling of The Sims 3 interface.' },
  { title: 'SF Picnic Game', notes: 'A game about a picnic with friends in San Francisco — Trader Joe\'s snacks, coconut water, tarot cards, and other essentials.' },
  { title: 'Things in My Victorian Flat', notes: 'A collection of random things you can find in my apartment — books, lamps, couch, coconut water, Studio Display, bunch of computers, plants, Japanese snacks.' },
];

const Ideas: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#FAFAF8',
      color: '#1a1a18',
      fontFamily: "'IBM Plex Mono', monospace",
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: '100px',
    }}>
      <div style={{ width: 800, paddingTop: 84 }}>
        <div style={{ marginBottom: 28 }}>
          <a href="/" style={{
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: '#9b9a97',
            textDecoration: 'none',
          }}>
            &larr; Back
          </a>
        </div>

        <h1 style={{
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: '28px',
          margin: '0 0 28px',
        }}>
          Ideas
        </h1>

        <p style={{
          fontSize: 13,
          lineHeight: '28px',
          color: '#6b6963',
          marginBottom: 28,
          maxWidth: 480,
        }}>
          Project ideas I want to explore. This page is only visible in development.
        </p>

        <div style={{ borderTop: '1px solid #e0ddd8' }}>
          {ideas.map((idea, i) => {
            const content = (
              <>
                <div style={{
                  fontSize: 14,
                  fontWeight: 500,
                  lineHeight: '28px',
                }}>
                  {idea.title}
                </div>
                <div style={{
                  fontSize: 12,
                  color: '#9b9a97',
                  lineHeight: '28px',
                }}>
                  {idea.notes}
                </div>
              </>
            );
            const style = {
              padding: '27px 0',
              borderBottom: '1px solid #e0ddd8',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
            };
            return idea.link ? (
              <a key={i} href={idea.link} style={style}>{content}</a>
            ) : (
              <div key={i} style={style}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ideas;
