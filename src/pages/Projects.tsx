import * as React from 'react';

const Projects: React.FC = () => {
  return React.createElement('section', { className: 'page projects' },
    React.createElement('h1', null, 'Projects'),
    React.createElement('p', null, 'Showcase your design or development projects here.')
  );
};

export default Projects;
