import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Home2 from './pages/Home2';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
