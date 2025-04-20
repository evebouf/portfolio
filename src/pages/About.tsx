import * as React from 'react';
import { HTMLAttributes } from 'react';

const About: React.FC = () => {
  return React.createElement('section', { className: 'page about' },
    React.createElement('h1', null, 'About Me'),
    React.createElement('p', null, 'Write a brief introduction about yourself here.')
  );
};

export default About;
