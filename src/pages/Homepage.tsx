import React, { useEffect, useState } from 'react';
import './Homepage.scss';
import { HalftoneCmyk } from '@paper-design/shaders-react';

const Homepage: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [dotSize, setDotSize] = useState(0.28);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('e.bouffard252@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  useEffect(() => {
    // Load Geist Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const projects = [
    {
      title: 'YC Website',
      description: 'Redesigned and built the new homepage.',
    },
    {
      title: 'YC Application',
      description: 'Application flow for startup founders.',
    },
    {
      title: 'YC Application Review',
      description: 'Internal tool for reviewing applications.',
    },
  ];

  return (
    <div className="homepage">
      {/* Name */}
      <p className="mb-lg">Eve Bouffard</p>

      {/* Bio */}
      <p className="text-secondary mb-xl">
        Designer turned design engineer at{' '}
        <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="text-link">
          Y Combinator
        </a>
        , where I most recently redesigned and built the new YC homepage.
        {/* Before YC, I was in school, but spent most of my time working on a virtual reality game with ridiculously talented friends —{' '}
        <a href="https://www.linkedin.com/in/max-brodeur-urbas" target="_blank" rel="noopener noreferrer" className="text-link">
          Max
        </a>
        {' '}and{' '}
        <a href="https://www.linkedin.com/in/imad-dodin/" target="_blank" rel="noopener noreferrer" className="text-link">
          Imad
        </a>
        . */}
      </p>

      {/* Hero Image with Halftone Effect */}
      <div style={{ marginBottom: '48px', width: '100%' }}>
        <div style={{ position: 'relative' }}>
          <HalftoneCmyk
            width="100%"
            height={300}
            image="/pictures/the-old-fort-at-antibes (1).jpg"
            colorBack="#eeefd7"
            colorC="#00b3ff"
            colorM="#fc4f4f"
            colorY="#ffd900"
            colorK="#231f20"
            size={dotSize}
            gridNoise={0.5}
            type="ink"
            softness={0}
            contrast={1.15}
            floodC={0.15}
            floodM={0}
            floodY={0}
            floodK={0}
            gainC={1}
            gainM={0.44}
            gainY={0.72}
            gainK={0}
            grainMixer={0.05}
            grainOverlay={0.25}
            grainSize={0.52}
            fit="cover"
          />
          <p 
            style={{ 
              position: 'absolute', 
              bottom: '8px', 
              right: '8px', 
              fontSize: '10px', 
              margin: 0,
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            The Old Fort at Antibes, 1888 — Claude Monet
          </p>
        </div>
        <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="text-muted" style={{ fontSize: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}>dot size</span>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.01"
            value={dotSize}
            onChange={(e) => setDotSize(parseFloat(e.target.value))}
            className="shader-slider"
            style={{ flex: 1 }}
          />
        </div>
      </div>

      {/* Projects Section */}
      <p className="section-header">01 Projects</p>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <p className="project-title text-secondary">{project.title}</p>
          <p className="text-muted no-margin">{project.description}</p>
        </div>
      ))}

      {/* Photography Section */}
      <div className="mt-section">
        <p className="section-header">02 Photography</p>
        <a href="/photography" className="project-item project-link">
          <p className="project-title text-secondary">Photo Gallery</p>
          <p className="text-muted no-margin">A collection of photographs.</p>
        </a>
      </div>

      {/* Explorations Section */}
      <div className="mt-section">
        <p className="section-header">03 Explorations</p>
        <a href="/explorations/paper-effects" className="project-item project-link">
          <p className="project-title text-secondary">Paper Effects</p>
          <p className="text-muted no-margin">Interactive effect experiments.</p>
        </a>
        <a href="/explorations/paper-filters" className="project-item project-link">
          <p className="project-title text-secondary">Paper Filters</p>
          <p className="text-muted no-margin">Interactive filter experiments.</p>
        </a>
      </div>

      {/* Writings Section */}
      <div className="mt-section">
        <p className="section-header">04 Writings</p>
        <p className="text-muted text-italic">coming soon</p>
      </div>

      {/* Bookmarks Section */}
      <div className="mt-section">
        <p className="section-header">05 Bookmarks</p>
        <p className="text-muted text-italic">coming soon</p>
      </div>

      {/* Contact Section */}
      <div className="mt-section">
        <p className="section-header">Contact</p>
        <p className="text-secondary mb-md">
          Please reach out! I'd love to connect :)
        </p>
        <div className="contact-links text-secondary">
          <span onClick={handleCopyEmail} className="text-link">
            {emailCopied ? 'Copied!' : 'Email'}
          </span>
          <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="text-link">X</a>
          <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
