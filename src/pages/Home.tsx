import React, { useState, useEffect } from 'react';
import './HomeMinimal.css';
import Terminal from '../components/Terminal';

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('e.bouffard252@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div className="home-container">
      {/* <button
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
      >
        <span className="material-icons">
          {isDarkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button> */}

      <div className="main-content">
        <div className="logo-section">
          <Terminal />
        </div>

        {/* <div className="tagline">
          <div className="terminal-text">
            Designing in code<span className="cursor">_</span>
          </div>
          <div className="subtitle">
            I design and build internal tools at{" "}
            <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer" className="yc-link">
              Y Combinator
            </a>
          </div>
        </div> */}


        {/* <div className="nav-links">
          <a href="https://github.com/evebouf" target="_blank" rel="noopener noreferrer" className="nav-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="nav-link">
            LinkedIn
          </a>
          <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="nav-link">
            Twitter
          </a>
          <button onClick={copyEmailToClipboard} className="nav-link email-button">
            {emailCopied ? '✨ Copied!' : 'Email'}
          </button>
        </div> */}
      </div>

      <div className="footer-icons">
        <div className="footer-left">
          <div className="footer-icon">MADE IN SF.CA</div>
        </div>
        <div className="footer-center">
          <div className="footer-icon">DEV</div>
          <div className="footer-icon">DESIGN</div>
          <div className="footer-icon">BRANDING</div>
        </div>
        <div className="footer-right">
          <div className="footer-text">INTERNET 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
