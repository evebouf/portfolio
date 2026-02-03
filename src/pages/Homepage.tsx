import React, { useEffect } from 'react';
import Nav from '../components/Nav';

const Homepage: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FAF9F6';
    document.body.style.color = '#0000FE';
    
    // Load Instrument Serif font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.head.removeChild(link);
    };
  }, []);

  const articles = [
    {
      number: '01',
      slug: 'yc-design-manifesto',
      title: 'YC design Manifesto',
      text: "A reflection on designing YC software with clarity and care — building cohesive, practical systems that make excellence unmistakable across YC's most visible products.",
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Departure Mono', monospace",
        fontSize: '12px',
        lineHeight: '1.5',
      }}
    >
      <Nav />

      {/* Hero Section */}
      <section
        style={{
          padding: '80px 40px 120px',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'normal',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          a corner of r<em style={{ fontStyle: 'italic' }}>eve</em>rie
        </h1>
        <p
          style={{
            fontSize: '14px',
            opacity: 0.7,
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}
        >
          Hi fellow human or agent, this is a corner of r<em style={{ fontStyle: 'italic' }}>eve</em>rie.
        </p>
      </section>

      {/* Content - Single Column */}
      <section
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0 40px 80px',
        }}
      >
        {articles.map((article) => (
          <a
            key={article.number}
            href={`/article/${article.slug}`}
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '40px',
              padding: '12px',
              margin: '0 -12px 40px -12px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              color: 'inherit',
            }}
            className="article-item"
          >
            <span
              style={{
                fontSize: '11px',
                opacity: 0.5,
                width: '24px',
                flexShrink: 0,
              }}
            >
              {article.number}
            </span>
            <div>
              <h3
                className="article-title"
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: '11px',
                  opacity: 0.75,
                  lineHeight: '1.7',
                }}
              >
                {article.text}
              </p>
            </div>
          </a>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px',
          fontSize: '9px',
          opacity: 0.4,
        }}
      >
        <span>a corner of reverie</span>
      </footer>

      <style>{`
        .article-item:hover .article-title {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
