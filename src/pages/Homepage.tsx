import React, { useEffect, useState } from 'react';
import './Homepage.scss';

const Homepage: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('e.bouffard252@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#F2F0EE';
    document.body.style.color = 'rgb(23, 23, 23)';
    document.body.style.margin = '0';
    
    // Load Geist Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
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
      <p className="name">Eve Bouffard</p>

      {/* Bio */}
      <p className="bio">
        Designer turned design engineer at{' '}
        <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="text-link">
          Y Combinator
        </a>
        , where I most recently redesigned and built the new YC homepage. Before YC, I was in school, but spent most of my time working on a virtual reality game with ridiculously talented friends —{' '}
        <a href="https://www.linkedin.com/in/max-brodeur-urbas" target="_blank" rel="noopener noreferrer" className="text-link">
          Max
        </a>
        {' '}and{' '}
        <a href="https://www.linkedin.com/in/imad-dodin/" target="_blank" rel="noopener noreferrer" className="text-link">
          Imad
        </a>
        .
      </p>

      {/* Projects Section */}
      <p className="section-header">01 Projects</p>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <p className="project-title">{project.title}</p>
          <p className="project-description">{project.description}</p>
        </div>
      ))}

      {/* Photography Section */}
      <div className="section">
        <p className="section-header">02 Photography</p>
        <a href="/photography" className="project-item project-link">
          <p className="project-title">Photo Gallery</p>
          <p className="project-description">A collection of photographs.</p>
        </a>
      </div>

      {/* Explorations Section */}
      <div className="section">
        <p className="section-header">03 Explorations</p>
        <div className="project-item">
          <p className="project-title">Lorem ipsum</p>
          <p className="project-description">Description placeholder.</p>
        </div>
      </div>

      {/* Writings Section */}
      <div className="section">
        <p className="section-header">04 Writings</p>
        <p className="coming-soon">coming soon</p>
      </div>

      {/* Contact Section */}
      <div className="section">
        <p className="section-header--full">Contact</p>
        <p className="contact-text">
          If something here resonates, please reach out! I'd love to connect :)
        </p>
        <div className="contact-links">
          <span onClick={handleCopyEmail} className="text-link email-btn">
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
