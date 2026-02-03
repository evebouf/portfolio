import React, { useEffect } from 'react';

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

  const projects = [
    {
      number: '01',
      title: 'YC Website',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      number: '02',
      title: 'YC Application',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
      number: '03',
      title: 'YC Application Review Software',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      {/* Hero Section */}
      <section
        style={{
          padding: '80px 40px 40px',
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
          reverie /ˈrɛvəri/<br />
          <em style={{ fontStyle: 'italic' }}>n.</em> a quiet, dreamy state of reflective or imaginative thought.
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
        {/* About Section */}
        <h2
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '12px',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          About
        </h2>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            padding: '8px',
            margin: '0 -8px 24px -8px',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              opacity: 0.5,
              width: '24px',
              flexShrink: 0,
            }}
          >
            Hi
          </span>
          <p
            style={{
              fontSize: '12px',
              lineHeight: '1.7',
              opacity: 0.85,
            }}
          >
            Designer turned design engineer at <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="text-link">Y Combinator</a>, where I most recently redesigned and built the new YC homepage. Before YC, I was in school, but spent most of my time working on a virtual reality game with ridiculously talented friends — <a href="https://www.linkedin.com/in/max-brodeur-urbas" target="_blank" rel="noopener noreferrer" className="text-link">Max</a> and <a href="https://www.linkedin.com/in/imad-dodin/" target="_blank" rel="noopener noreferrer" className="text-link">Imad</a>.
          </p>
        </div>

        {/* Horizontal Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #0000FE',
            opacity: 0.2,
            margin: '20px 0',
          }}
        />

        {/* Writing Section */}
        <h2
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Writing
        </h2>
        {articles.map((article) => (
          <a
            key={article.number}
            href={`/article/${article.slug}`}
            style={{
              display: 'flex',
              gap: '20px',
              padding: '8px',
              margin: '0 -8px 12px -8px',
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
                fontSize: '12px',
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
                  marginBottom: '4px',
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: '12px',
                  opacity: 0.75,
                  lineHeight: '1.6',
                }}
              >
                {article.text}
              </p>
            </div>
          </a>
        ))}

        {/* Horizontal Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #0000FE',
            opacity: 0.2,
            margin: '20px 0',
          }}
        />

        {/* Projects Section */}
        <h2
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Projects
        </h2>
        {projects.map((project) => (
          <div
            key={project.number}
            style={{
              display: 'flex',
              gap: '20px',
              padding: '8px',
              margin: '0 -8px 16px -8px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="project-item"
          >
            <span
              style={{
                fontSize: '12px',
                opacity: 0.5,
                width: '24px',
                flexShrink: 0,
              }}
            >
              {project.number}
            </span>
            <div>
              <h3
                className="project-title"
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {project.title}
                <span style={{ fontSize: '10px', opacity: 0.4, fontWeight: 'normal', fontStyle: 'italic' }}>
                  coming soon
                </span>
              </h3>
              <p
                style={{
                  fontSize: '12px',
                  opacity: 0.75,
                  lineHeight: '1.6',
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}

        {/* Horizontal Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #0000FE',
            opacity: 0.2,
            margin: '20px 0',
          }}
        />

        {/* Photography Section */}
        <h2
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Photography
        </h2>
        <a
          href="/photography"
          style={{
            display: 'flex',
            gap: '20px',
            padding: '8px',
            margin: '0 -8px 12px -8px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            color: 'inherit',
          }}
          className="link-item"
        >
          <span style={{ fontSize: '12px', opacity: 0.5, width: '24px', flexShrink: 0 }}>→</span>
          <div>
            <h3 className="link-title" style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Photo Gallery
            </h3>
            <p style={{ fontSize: '12px', opacity: 0.75, lineHeight: '1.6' }}>
              A collection of photographs.
            </p>
          </div>
        </a>

        {/* Horizontal Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #0000FE',
            opacity: 0.2,
            margin: '20px 0',
          }}
        />

        {/* Bookmarks Section */}
        <h2
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Bookmarks
        </h2>
        <a
          href="/bookmarks"
          style={{
            display: 'flex',
            gap: '20px',
            padding: '8px',
            margin: '0 -8px 12px -8px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            color: 'inherit',
          }}
          className="link-item"
        >
          <span style={{ fontSize: '12px', opacity: 0.5, width: '24px', flexShrink: 0 }}>→</span>
          <div>
            <h3 className="link-title" style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Saved Links
            </h3>
            <p style={{ fontSize: '12px', opacity: 0.75, lineHeight: '1.6' }}>
              Interesting things from around the web.
            </p>
          </div>
        </a>

        {/* Horizontal Divider */}
        <hr
          style={{
            border: 'none',
            borderTop: '1px solid #0000FE',
            opacity: 0.2,
            margin: '20px 0',
          }}
        />

        {/* Sims 3 Section */}
        <h2
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            marginBottom: '16px',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Sims 3
        </h2>
        <a
          href="/sims-3"
          style={{
            display: 'flex',
            gap: '20px',
            padding: '8px',
            margin: '0 -8px 12px -8px',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textDecoration: 'none',
            color: 'inherit',
          }}
          className="link-item"
        >
          <span style={{ fontSize: '12px', opacity: 0.5, width: '24px', flexShrink: 0 }}>→</span>
          <div>
            <h3 className="link-title" style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '4px' }}>
              Sims 3 Adventures
            </h3>
            <p style={{ fontSize: '12px', opacity: 0.75, lineHeight: '1.6' }}>
              Stories and screenshots from The Sims 3.
            </p>
          </div>
        </a>
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
        .project-item:hover .project-title {
          text-decoration: underline;
        }
        .link-item:hover .link-title {
          text-decoration: underline;
        }
        .text-link {
          color: inherit;
          text-decoration: underline;
          text-decoration-color: rgba(0, 0, 254, 0.2);
          text-underline-offset: 2px;
          transition: all 0.2s ease;
        }
        .text-link:hover {
          text-decoration-color: rgba(0, 0, 254, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Homepage;
