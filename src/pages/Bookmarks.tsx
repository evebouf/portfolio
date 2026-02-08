import React, { useEffect } from 'react';
import './Homepage.scss';
import BackButton from '../components/BackButton';

const bookmarks = [
  {
    title: 'Counter-Print',
    url: 'https://www.counter-print.co.uk/',
    description: 'Independent publisher specialising in design and visual culture.',
  },
  {
    title: "Poor Charlie's Almanack — Talk Three",
    url: 'https://www.stripe.press/poor-charlies-almanack/talk-three',
    description: 'The essential wit and wisdom of Charles T. Munger.',
  },
];

const Bookmarks: React.FC = () => {
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

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Geist Mono', monospace",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
        padding: '180px 40px 80px',
        maxWidth: '520px',
        margin: '0 auto',
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: '24px' }}>
        <BackButton />
      </div>

      {/* Title */}
      <p style={{ marginBottom: '8px' }}>Bookmarks</p>
      <p className="text-secondary" style={{ marginBottom: '48px' }}>
        Sites and pages that inspire me.
      </p>

      {/* Bookmarks List */}
      <div>
        {bookmarks.map((bookmark, index) => (
          <a
            key={index}
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item project-link"
            style={{ display: 'block' }}
          >
            <p className="project-title text-secondary">
              <span>{bookmark.title}</span>
            </p>
            {bookmark.description && (
              <p className="text-muted no-margin">{bookmark.description}</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
