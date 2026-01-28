import React, { useEffect } from 'react';

const MonoBlueprintPage: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FAF9F6';
    document.body.style.color = '#0000FE';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);

  const leftPrinciples = [
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
  ];

  const rightPrinciples = [
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
        padding: '60px 40px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Departure Mono', monospace",
        fontSize: '12px',
        lineHeight: '1.5',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        {/* Left Page */}
        <div
          style={{
            borderRight: '1px solid rgba(0, 0, 254, 0.15)',
            paddingRight: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1
            style={{
              fontSize: '11px',
              fontWeight: 'normal',
              marginBottom: '40px',
              letterSpacing: '0.02em',
            }}
          >
            10 Design Principles
          </h1>

          <div style={{ flex: 1 }}>
            {leftPrinciples.map((principle) => (
              <div
                key={principle.number}
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '28px',
                  padding: '8px',
                  margin: '0 -8px 28px -8px',
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
                      fontSize: '11px',
                      fontWeight: 'bold',
                      marginBottom: '6px',
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '11px',
                      opacity: 0.75,
                      lineHeight: '1.6',
                    }}
                  >
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '9px',
              opacity: 0.4,
              marginTop: '40px',
            }}
          >
            <span>From people to planet</span>
            <span>10 Design Principles</span>
          </div>
        </div>

        {/* Right Page */}
        <div
          style={{
            paddingLeft: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ flex: 1, paddingTop: '60px' }}>
            {rightPrinciples.map((principle) => (
              <div
                key={principle.number}
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '28px',
                  padding: '8px',
                  margin: '0 -8px 28px -8px',
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
                      fontSize: '11px',
                      fontWeight: 'bold',
                      marginBottom: '6px',
                    }}
                  >
                    {principle.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '11px',
                      opacity: 0.75,
                      lineHeight: '1.6',
                    }}
                  >
                    {principle.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontSize: '9px',
              opacity: 0.4,
              marginTop: '40px',
            }}
          >
            <span>58 — 59</span>
          </div>
        </div>
      </div>

      <style>{`
        .principle-item:hover .principle-title {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default MonoBlueprintPage;
