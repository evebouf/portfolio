import * as React from 'react';
import './Home.css';

interface DesignProject {
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  tags: Array<{
    color: string;
    label: string;
  }>;
}

const Home: React.FC = () => {
  const designProjects: DesignProject[] = [
    {
      title: 'Eco-Friendly Packaging',
      subtitle: 'Sustainable Design System',
      image: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      tags: [
        { color: '#2ea44f', label: 'Sustainable' },
        { color: '#4ECDC4', label: 'Design System' },
        { color: '#FFD93D', label: 'Packaging' }
      ]
    },
    {
      title: 'Ocean Conservation App',
      subtitle: 'Mobile UX/UI Design',
      image: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?auto=format&fit=crop&w=800&q=80',
      rating: 4,
      tags: [
        { color: '#4ECDC4', label: 'Mobile' },
        { color: '#FF6B6B', label: 'UX/UI' },
        { color: '#2ea44f', label: 'Nature' }
      ]
    },
    {
      title: 'Renewable Energy Brand',
      subtitle: 'Visual Identity & Guidelines',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      tags: [
        { color: '#FFD93D', label: 'Branding' },
        { color: '#FF6B6B', label: 'Identity' },
        { color: '#2ea44f', label: 'Clean Energy' }
      ]
    },
    {
      title: 'Zero Waste Website',
      subtitle: 'Web Design & Development',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      rating: 4,
      tags: [
        { color: '#4ECDC4', label: 'Web' },
        { color: '#FFD93D', label: 'UI Design' },
        { color: '#2ea44f', label: 'Eco' }
      ]
    }
  ];

  return (
    <div className="page home">
      <section className="hero-section">
        <div className="main-text">
          <h1>
            {/* <span>Hi, I'm Eve, a</span>
            <span className="emphasis">product designer</span>
            <span>at Y Combinator based in beautiful</span>
            <span className="emphasis">San Francisco</span>
            <span>.</span> */}
          </h1>
          <h1>
            <span>Hi, I'm Eve, a product designer at Y Combinator based in beautiful San Francisco.</span>
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

      <section className="projects-section">
        <div className="section-header">
          <h2 className="title">Design Projects</h2>
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Start small. Start here. Search for a project."
              className="search-input"
            />
            <button className="menu-button">≡</button>
          </div>
        </div>

        <div className="projects-grid">
          {designProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-details">
                <div className="tags-row">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="tag"
                      style={{ backgroundColor: tag.color }}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="rating-bar">
                  <div 
                    className="rating-fill" 
                    style={{ width: `${(project.rating / 5) * 100}%` }}
                  />
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
