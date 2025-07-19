import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="home-container">

      <div className="page home">
        <div className="hero-outer">
          <div className="top-buttons">
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
                  <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer" className="yc-link">
                    <img src="/yc.png" alt="Y Combinator" className="yc-logo" />
                    Y Combinator
                  </a>
                </div>
                <div className="type-line">
                   in beautiful San Francisco, CA
                  <img src="/sf-icon.png" alt="Location icon" className="location-icon" />
                </div>
              </div>
            </div>
          </section>
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





        <section className="contact-section">
          <div className="section-header">
            <div className="sliding-title">
              <div className="sliding-track">
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
                <span className="title">Contact</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
