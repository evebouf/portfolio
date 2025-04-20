import * as React from 'react';
import './Home.css';

interface Tag {
  label: string;
}

interface DesignProject {
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  tags: Array<Tag>;
}

const Home: React.FC = () => {
  const designProjects: DesignProject[] = [
    {
      title: 'Eco-Friendly Packaging',
      subtitle: 'Sustainable Design System',
      image: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      tags: [
        { label: 'Sustainable' },
        { label: 'Design System' },
        { label: 'Packaging' }
      ]
    },
    {
      title: 'Ocean Conservation App',
      subtitle: 'Mobile UX/UI Design',
      image: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?auto=format&fit=crop&w=800&q=80',
      rating: 4,
      tags: [
        { label: 'Web Design' },
        { label: 'UX Research' },
        { label: 'Eco-friendly' }
      ]
    },
    {
      title: 'Renewable Energy Brand',
      subtitle: 'Visual Identity & Guidelines',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      tags: [
        { label: 'Branding' },
        { label: 'Identity' },
        { label: 'Clean Energy' }
      ]
    },
    {
      title: 'Zero Waste Website',
      subtitle: 'Web Design & Development',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      rating: 4,
      tags: [
        { label: 'Web' },
        { label: 'UI Design' },
        { label: 'Eco' }
      ]
    }
  ];

  return (
    <div className="home-container">
      <div className="page home">
        <section className="hero-section">
          <div className="main-text">
            <h1>
              Hi, I'm Eve, a product designer at Y Combinator
              <br />
              based in beautiful San Francisco, CA.
            </h1>
          </div>
        </section>

        <section className="ts-slider">
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
        </section>

        <div className="badges-container">
          <div className="badges-row">
            <span className="badge zero-waste">✸ ZERO WASTE PRODUCT</span>
            <span className="badge low-impact">✧ LOW IMPACT</span>
            <span className="badge biodegradable">✤ BIODEGRADABLE</span>
            <span className="badge recycled">♺ RECYCLED PRODUCT</span>
          </div>
        </div>

        <section className="projects-section">
          <div className="section-header">
            <div className="sliding-title">
              <div className="sliding-track">
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
                <span className="title">Projects</span>
              </div>
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
                    {project.tags.map(tag => (
                      <span key={tag.label} className="tag">
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  <div className="rating-bar" style={{ width: `${project.rating * 20}%` }} />
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
