import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';

// Article data - can be moved to a separate file later
const articlesData: Record<string, { title: string; date: string; content: string[] }> = {
  'yc-design-manifesto': {
    title: 'YC Design Manifesto',
    date: 'February 2026',
    content: [
      "I want YC software to be synonymous with excellence. I want people to use YC's products — applicants, founders, partners, investors, potential hires — and come away thinking that YC writes first-class software, and that the bar for engineering at YC is unmistakably high.",
      "I viscerally believe YC is one of the most iconic and impactful brands in the world.",
      "And because of that, it deserves design that does it justice. I want YC's content and interfaces to feel excellent.",
      "At YC, design has to be practical and useful. Function over form. Not design for design's sake, but design in service of users. Design that feels great to use — simple, intuitive, and tasteful. No ornamentation. No fluff. At its core, YC was built by hackers, for hackers — and this should always be a guiding principle.",
      "But the baseline for what \"good\" looks like has changed. Design is now table stakes. People expect a baseline level of quality and usability.",
      "Especially when our users — founders and investors — are among the most technically sophisticated and discerning users there are.",
      "I want to create a design book and brand guidelines to standardize YC's design language, and build a flexible collection of components, typography, colors, and templates that I — and others at YC, and even outside of YC — can reuse.",
      "YC has a lot of surface area. But the most public-facing surfaces — the ones that shape the perception of the brand — are the YC website, Apply, Bookface, Investor Software, and Work at a Startup.",
      "Ideally, I want all of these surfaces to feel cohesive, consistent, and connected — even if, behind the scenes, they aren't. This won't happen overnight, but it feels more doable than ever to make meaningful, visible improvements across YC's products with ridiculously minimal engineering resources.",
    ],
  },
};

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articlesData[slug] : null;

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

  if (!article) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <p>Article not found</p>
        <a href="/homepage" style={{ color: '#0000FE' }}>Go back home</a>
      </div>
    );
  }

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

      {/* Article Header */}
      <header
        style={{
          padding: '60px 40px 40px',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '42px',
            fontWeight: 'normal',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            fontSize: '11px',
            opacity: 0.5,
          }}
        >
          {article.date}
        </p>
      </header>

      {/* Article Content */}
      <article
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '40px 40px 80px',
        }}
      >
        {article.content.map((paragraph, index) => (
          <p
            key={index}
            style={{
              fontSize: '13px',
              lineHeight: '1.8',
              marginBottom: '24px',
              opacity: 0.85,
            }}
          >
            {paragraph}
          </p>
        ))}
      </article>

      {/* Back Link */}
      <div
        style={{
          textAlign: 'center',
          padding: '0 40px 60px',
        }}
      >
        <a
          href="/homepage"
          style={{
            fontSize: '11px',
            color: '#0000FE',
            textDecoration: 'none',
            opacity: 0.6,
            transition: 'opacity 0.2s ease',
          }}
          className="back-link"
        >
          ← Back to home
        </a>
      </div>

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
        .back-link:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Article;
