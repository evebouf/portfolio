import * as React from 'react';
import './App.css';
import Home from './pages/Home';

const App: React.FC = () => {
  return React.createElement('div', null,
    React.createElement('main', null,
      React.createElement(Home)
    )
  );
};

export default App;
