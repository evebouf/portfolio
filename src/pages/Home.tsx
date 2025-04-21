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
      subtitle: 'A scheduling system that helps YC partners efficiently manage their time with startup founders during interview season.',
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
      subtitle: 'A streamlined platform designed to help founders submit and track their YC applications, with real-time status updates and integrated feedback systems.',
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
      subtitle: 'An internal tool that connects YC founders across batches, enabling knowledge sharing and collaboration while maintaining privacy and security.',
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
      subtitle: 'A wellness app that encourages daily movement through gamified challenges and social connections, helping remote teams stay active and engaged.',
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
        <div className="hero-outer">
          <a href="https://www.linkedin.com/in/eve-bouffard/" target="_blank" rel="noopener noreferrer" className="linkedin-button">
            LinkedIn
            <span className="material-icons">north_east</span>
          </a>
          <section className="hero-section">
            <div className="main-text">
              <h1>
                Hi, I'm Eve, a product designer at <a href="https://www.ycombinator.com" target="_blank" rel="noopener noreferrer" className="yc-link">Y&nbsp;Combinator</a> based in beautiful San Francisco, CA.
              </h1>
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



        <section className="projects-section">
          <div className="section-header">
            <div className="sliding-title">
              <div className="sliding-track">
                <span className="title">UX Research</span>
                <span className="title">Product Design</span>
                <span className="title">System Design</span>
                <span className="title">Front-End Dev</span>
                <span className="title">Design Systems</span>
                <span className="title">User Testing</span>
                <span className="title">UX Research</span>
                <span className="title">Product Design</span>
                <span className="title">System Design</span>
                <span className="title">Front-End Dev</span>
                <span className="title">Design Systems</span>
                <span className="title">User Testing</span>
                <span className="title">UX Research</span>
                <span className="title">Product Design</span>
                <span className="title">System Design</span>
                <span className="title">Front-End Dev</span>
                <span className="title">Design Systems</span>
                <span className="title">User Testing</span>
                <span className="title">UX Research</span>
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
                  <div>
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
                  <a href="#" className="project-button">
                    Open project
                    <span className="material-icons">north_east</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

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
