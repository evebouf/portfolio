import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/fonts.css';
import Home from './pages/Home';
import BlueprintPage from './pages/BlueprintPage';
import MonoBlueprintPage from './pages/MonoBlueprintPage';
import Homepage from './pages/Homepage';
import Photography from './pages/Photography';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blueprint" element={<BlueprintPage />} />
            <Route path="/mono-blueprint" element={<MonoBlueprintPage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="*" element={<MonoBlueprintPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
