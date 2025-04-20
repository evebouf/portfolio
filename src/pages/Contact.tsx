import * as React from 'react';

const Contact: React.FC = () => {
  return React.createElement('section', { className: 'page contact' },
    React.createElement('h1', null, 'Contact'),
    React.createElement('p', null, 'How can people reach you? Add a form or your email here.')
  );
};

export default Contact;
