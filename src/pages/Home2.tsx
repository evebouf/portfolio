import React from 'react';
import './Home2.css';

interface Initiative {
  name: string;
  status: string;
  date: string;
  image?: string;
}

interface ClimateCard {
  title: string;
  image: string;
  ctaText: string;
}

const Home2: React.FC = () => {
  const initiatives: Initiative[] = [
    {
      name: 'Tree planting',
      status: 'active participation',
      date: '09/23',
      image: '/images/tree-planting.jpg'
    },
    {
      name: 'Beach cleanup',
      status: 'need participants',
      date: '10/23',
      image: '/images/beach-cleanup.jpg'
    },
    {
      name: 'Educational events',
      status: 'green practices',
      date: '10/23',
      image: '/images/education.jpg'
    },
    {
      name: 'Park cleaning',
      status: 'city cleaning',
      date: '10/23',
      image: '/images/park.jpg'
    }
  ];

  const climateCards: ClimateCard[] = [
    {
      title: 'Ocean Pollution',
      image: '/images/ocean.jpg',
      ctaText: 'EXPLORE PROBLEM'
    },
    {
      title: 'Glacier Melting',
      image: '/images/glacier.jpg',
      ctaText: 'EXPLORE PROBLEM'
    },
    {
      title: 'Forest Oil Range',
      image: '/images/forest.jpg',
      ctaText: 'EXPLORE PROBLEM'
    },
    {
      title: 'GHG Emissions',
      image: '/images/emissions.jpg',
      ctaText: 'EXPLORE PROBLEM'
    }
  ];

  return (
    <div className="home2-container">
      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-card primary">
          <div className="content-group">
            <div className="green-badge">
              <span className="dot"></span> Green Gang
            </div>
            <h1>
              Saving Nature & Fighting Climate Change Together.
            </h1>
            <div className="cta-group">
              <button className="btn-primary">Book your ticket</button>
              <div className="members">
                <div className="member-avatars">
                  <img src="/images/avatar1.jpg" alt="Member 1" />
                  <img src="/images/avatar2.jpg" alt="Member 2" />
                  <img src="/images/avatar3.jpg" alt="Member 3" />
                </div>
                <span>1.5k+ members at our community</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-card secondary">
          <img src="/images/nature.jpg" alt="Nature landscape" />
          <div className="overlay-text">
            <span className="tag">Case Studies</span>
            <p>People are organizing daily tasks to protecting the environment & nature</p>
            <div className="action-row">
              <button className="btn-play">▶</button>
              <span>Play the process</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-statement">
        <div className="earth-icon">🌍</div>
        <h2>Let's Make Our World Cleaner & Greener!</h2>
        <p>Join our mission to create a sustainable future through innovative solutions that address climate change & enhance sustainability</p>
        <div className="action-buttons">
          <button className="btn-outline">View Projects</button>
          <button className="btn-text">Learn More →</button>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-steps">
          <div className="step">We</div>
          <div className="step highlight">Protect</div>
          <div className="step arrow">→</div>
          <div className="step">Nature</div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="initiatives-section">
        <h2>Our initiatives for 2023</h2>
        <div className="initiatives-list">
          {initiatives.map((initiative, index) => (
            <div className="initiative-row" key={index}>
              <div className="initiative-info">
                <h3>{initiative.name}</h3>
                <span className="status">{initiative.status}</span>
              </div>
              <div className="initiative-date">{initiative.date}</div>
              {initiative.image && (
                <div className="initiative-image">
                  <img src={initiative.image} alt={initiative.name} />
                </div>
              )}
              <button className="btn-arrow">→</button>
            </div>
          ))}
        </div>
      </section>

      {/* Climate Issues Grid */}
      <section className="climate-grid">
        {climateCards.map((card, index) => (
          <div className="climate-card" key={index}>
            <img src={card.image} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <button className="btn-explore">{card.ctaText}</button>
            </div>
          </div>
        ))}
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <h2>Subscribe to our newsletter to get the latest updates on missions projects & initiatives.</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Email address" />
          <button className="btn-subscribe">Subscribe →</button>
        </div>
      </section>
    </div>
  );
};

export default Home2;
