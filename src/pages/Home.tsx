import React, { useState, useEffect } from 'react';
import './Home.css';

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
      setTimeout(() => setEmailCopied(false), 2000); // Hide message after 2 seconds
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <div className="home-container">

      <div className="page home">
        <div className="hero-outer">
          <div className="desktop-buttons">
            <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              LinkedIn
              <span className="material-icons">north_east</span>
            </a>
            <a href="https://github.com/evebouf" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              GitHub
              <span className="material-icons">north_east</span>
            </a>
            <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              Twitter
              <span className="material-icons">north_east</span>
            </a>
            <button onClick={copyEmailToClipboard} className="linkedin-button">
              {emailCopied ? '✨ Copied!' : 'Email me'}
              <span className="material-icons">{emailCopied ? 'check' : 'mail'}</span>
            </button>
            <button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle dark mode"
            >
              <span className="material-icons">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>

          <section className="hero-section">
            <div className="hero-name">Eve Bouffard</div>
            <div className="hero-content">
              <h1 className="hero-title">Designing in ©ode </h1>
              <div className="intro-text">
                <div className="type-line">
                  I design and build internal tools at{" "}
                  <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer" className="linkedin-button">
                    <img src="/yc.png" alt="Y Combinator" className="yc-logo" />
                    Y Combinator
                    <span className="material-icons">north_east</span>
                  </a>
                  {" in beautiful San Francisco, CA"}
                  <img src="/sf-icon.png" alt="Location icon" className="location-icon" />
                </div>
              </div>
            </div>
          </section>
          
          <div className="mobile-theme-toggle">
            <button
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle dark mode"
            >
              <span className="material-icons">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
          
          <div className="mobile-buttons">
            <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              LinkedIn
              <span className="material-icons">north_east</span>
            </a>
            <a href="https://github.com/evebouf" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              GitHub
              <span className="material-icons">north_east</span>
            </a>
            <a href="https://x.com/eve_bouff" target="_blank" rel="noopener noreferrer" className="linkedin-button">
              Twitter
              <span className="material-icons">north_east</span>
            </a>
            <button onClick={copyEmailToClipboard} className="linkedin-button">
              {emailCopied ? '✨ Copied!' : 'Email me'}
              <span className="material-icons">{emailCopied ? 'check' : 'mail'}</span>
            </button>
          </div>
        </div>

        {/* <section className="ts-slider">
          <div className="ts-track">
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
            <span className="ts-title">ts</span>
          </div>
        </section> */}





        <section className="services-section">
          <div className="section-header">
            <div className="sliding-title">
              <div className="sliding-track">
                <span className="title">UX/UI Design</span>
                <span className="title">Brand Design</span>
                <span className="title">Graphic Design</span>
                <span className="title">Swag Design</span>
                <span className="title">Web Design</span>
                <span className="title">Logo Design</span>
                <span className="title">Print Design</span>
                <span className="title">Visual Identity</span>
                <span className="title">Design Systems</span>
                <span className="title">Prototyping</span>
                <span className="title">User Research</span>
                <span className="title">Interface Design</span>
                <span className="title">Creative Direction</span>
                <span className="title">UX/UI Design</span>
                <span className="title">Brand Design</span>
                <span className="title">Graphic Design</span>
                <span className="title">Swag Design</span>
                <span className="title">Web Design</span>
                <span className="title">Logo Design</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
