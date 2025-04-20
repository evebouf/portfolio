import * as React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="page home">
      <section className="hero-section">
        <div className="main-text">
          <h1>
            <span>Use your</span>
            <span className="emphasis">purchasing power</span>
            <span>for</span>
            <span className="emphasis">positive</span>
            <span>change.</span>
          </h1>
        </div>

        <div className="badges-container">
          <div className="badges-row">
            <span className="badge zero-waste">✸ ZERO WASTE PRODUCT</span>
            <span className="badge low-impact">✧ LOW IMPACT</span>
            <span className="badge biodegradable">✤ BIODEGRADABLE</span>
            <span className="badge recycled">♺ RECYCLED PRODUCT</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
