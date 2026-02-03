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

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Photography', href: '/photography' },
    { label: 'Sims 3', href: '/sims-3' },
    { label: 'Bookmarks', href: '/bookmarks' },
    { label: 'Writings', href: '/writings' },
  ];

  const principles = [
    {
      number: '01',
      title: 'Good design has a reason to exist',
      text: "No more designing for design's sake, every product must have a valid reason to be brought into the world, and we must consider the rationale for each aspect of that product throughout the design process.",
    },
    {
      number: '02',
      title: 'Good design is inclusive',
      text: 'A diverse design team produces better outcomes. A wider range of viewpoints is likely to identify more challenges and opportunities not just for improving sustainability, but for meeting the needs of a wider audience.',
    },
    {
      number: '03',
      title: 'Good design is built on honesty',
      text: 'Honesty and transparency is key, between manufacturers, designer, brand and consumer. We need to be able to understand the environmental implications of the decisions that we make in order to take responsibility for them.',
    },
    {
      number: '04',
      title: 'Good design is thorough through to end-of-life',
      text: 'Design considers both the creation, use and destruction of products and works to minimise the impact of each stage of the life cycle.',
    },
    {
      number: '05',
      title: 'Good design is designed for appropriate lifespan',
      text: 'Design should be long-lasting where there is likelihood of it remaining relevant and desirable by the user. In which case avoid trends, design for upgrade or adaptability. Otherwise design for a finite life and ensure that the product does not remain on the planet forever.',
    },
    {
      number: '06',
      title: 'Good design is intuitive',
      text: 'Over complicated design features and functionality which confuse the user, or require prior knowledge, prevent the user both using the product and passing it on to someone else.',
    },
    {
      number: '07',
      title: 'Good design is people and planet-centred',
      text: 'Whilst we design for users, if we do not put the needs of our planet at the centre of our design process we are effectively putting those same people at risk.',
    },
    {
      number: '08',
      title: 'Good design encourages positive behaviour change',
      text: 'The influence of our work should extend beyond its sale, we should endeavour to affect positive behaviour change in our users.',
    },
    {
      number: '09',
      title: 'Good design is beautiful',
      text: 'Designs should bring joy to the user both through aesthetic and user experience.',
    },
    {
      number: '10',
      title: 'Good design is considered down to the last detail',
      text: 'The level of care and attention to detail in an object is apparent and results in an affinity and appreciation that builds a longer lasting relationship between user and product.',
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
      {/* Navigation */}
      <nav
        style={{
          display: 'flex',
          gap: '32px',
          padding: '40px',
          justifyContent: 'center',
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            style={{
              fontSize: '11px',
              textDecoration: 'none',
              color: '#0000FE',
              transition: 'all 0.2s ease',
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

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
        {principles.map((principle) => (
          <div
            key={principle.number}
            style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '40px',
              padding: '12px',
              margin: '0 -12px 40px -12px',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="principle-item"
          >
            <span
              style={{
                fontSize: '11px',
                opacity: 0.5,
                width: '24px',
                flexShrink: 0,
              }}
            >
              {principle.number}
            </span>
            <div>
              <h3
                className="principle-title"
                style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '8px',
                }}
              >
                {principle.title}
              </h3>
              <p
                style={{
                  fontSize: '11px',
                  opacity: 0.75,
                  lineHeight: '1.7',
                }}
              >
                {principle.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '40px',
          fontSize: '9px',
          opacity: 0.4,
        }}
      >
        <span>From people to planet</span>
        <span>10 Design Principles</span>
      </footer>

      <style>{`
        .principle-item:hover .principle-title {
          text-decoration: underline;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Homepage;
