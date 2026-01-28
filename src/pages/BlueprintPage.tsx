import React from 'react';
import './BlueprintPage.css';

const BlueprintPage: React.FC = () => {
  return (
    <div className="blueprint-page">
      <div className="blueprint-container">
        <h1>Blueprint Page</h1>
        <p>This is a new page with a white background and blueprint blue text.</p>
        <div className="content-section">
          <h2>Welcome</h2>
          <p>
            This page demonstrates the blueprint blue color scheme (#0000FE) on a clean white background.
            The text is designed to be clear and readable while maintaining the distinctive blueprint aesthetic.
          </p>
        </div>
        <div className="content-section">
          <h3>Features</h3>
          <ul>
            <li>Clean white background</li>
            <li>Blueprint blue text (#0000FE)</li>
            <li>Modern typography</li>
            <li>Responsive design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlueprintPage;
