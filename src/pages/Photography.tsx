import React, { useEffect } from 'react';

// Import all photos
import photo1 from '../photos/01E116EF-F7FE-4811-B7AA-C10B07D18769_1_105_c.jpeg';
import photo2 from '../photos/06405949-7D7E-4997-BEDB-1B48F5130774_1_105_c.jpeg';
import photo3 from '../photos/1C76CC98-507F-409D-8E69-DEBF517B7C8A_1_105_c.jpeg';
import photo4 from '../photos/1FEC47AB-11A7-47D0-8A38-0843B963BCBF_1_201_a.jpeg';
import photo5 from '../photos/32259776-45F9-4BAB-B7EC-2E63187D3E58_1_105_c.jpeg';
import photo6 from '../photos/3B1B4AB8-9851-42B9-8AD1-3C9F878E090F_1_105_c.jpeg';
import photo7 from '../photos/41B5D72F-10A9-4FC9-A50D-94D8B9A67389_1_105_c.jpeg';
import photo8 from '../photos/423F4340-578E-4730-A083-03A4569DF3E3_1_105_c.jpeg';
import photo9 from '../photos/479D03FC-2E6C-4B9F-A10E-DB4BBBF4B9F1_1_105_c.jpeg';
import photo10 from '../photos/4851C6A8-C423-486D-9527-6FEF05A64B54_1_105_c.jpeg';
import photo11 from '../photos/71B3D01C-6D06-4335-89EE-009B0AAEF5FA_1_105_c.jpeg';
import photo12 from '../photos/849EF318-E69F-4077-9039-0976244F91D4_1_105_c.jpeg';
import photo13 from '../photos/903268C8-A6BA-42C2-BB59-592983E646F3_1_105_c.jpeg';
import photo14 from '../photos/9291A13A-6E3C-4E41-81A1-D393D080E022_1_105_c.jpeg';
import photo15 from '../photos/9A0BEA42-BA5E-48DA-9F9C-BA24163CF9EA_1_105_c.jpeg';
import photo16 from '../photos/A4A23A01-9B45-4B78-A2C9-CAA2ECCFA376_1_105_c.jpeg';
import photo17 from '../photos/D93ECDA9-4BA9-4711-AA83-693BE61703AA_1_105_c.jpeg';
import photo18 from '../photos/DBC33352-22CE-4210-BBEE-C5333A65F1DC_1_105_c.jpeg';
import photo19 from '../photos/E73D37CF-E69F-449E-B16C-ABD9C5B88040_1_105_c.jpeg';
import photo20 from '../photos/EAB33983-869C-4EB4-B786-A10CBC14D482_1_105_c.jpeg';
import photo21 from '../photos/F1A790F7-7D2F-40D6-BA1A-C2BB3F4B6E52_1_105_c.jpeg';
import photo22 from '../photos/FD8D7AF6-FE8D-4AAE-A67A-E8B7240032D4_1_105_c.jpeg';

const photos = [
  photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,
  photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16,
  photo17, photo18, photo19, photo20, photo21, photo22,
];

const Photography: React.FC = () => {
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

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Departure Mono', monospace",
        fontSize: '12px',
        lineHeight: '1.5',
      }}
    >
      {/* Title */}
      <section
        style={{
          padding: '40px 40px 60px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'normal',
            letterSpacing: '-0.02em',
            fontFamily: "'Instrument Serif', serif",
          }}
        >
          Photography
        </h1>
      </section>

      {/* Image Grid - Masonry */}
      <section
        style={{
          width: '100%',
          padding: '0 40px 80px',
          columnCount: 4,
          columnGap: '12px',
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              marginBottom: '12px',
              breakInside: 'avoid',
            }}
          >
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Photography;
