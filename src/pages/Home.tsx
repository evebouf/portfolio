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
      title: 'YC Interview Scheduler',
      subtitle: 'Interview Scheduling System',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      tags: [
        { label: 'Product Design' },
        { label: 'System Design' },
        { label: 'UX Research' }
      ]
    },
    {
      title: 'YC Application Portal',
      subtitle: 'Application Management Platform',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      rating: 4,
      tags: [
        { label: 'Product Design' },
        { label: 'UX Research' },
        { label: 'Design System' }
      ]
    },
    {
      title: 'YC Founder Directory',
      subtitle: 'Community Platform',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      rating: 5,
      tags: [
        { label: 'Product Design' },
        { label: 'Design System' },
        { label: 'Research' }
      ]
    },
    {
      title: 'Step Together',
      subtitle: 'Health & Wellness Platform',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      rating: 4,
      tags: [
        { label: 'Product Design' },
        { label: 'UX Research' },
        { label: 'Design System' }
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
