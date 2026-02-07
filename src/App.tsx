import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/fonts.css';
import Home from './pages/Home';
import MonoBlueprintPage from './pages/MonoBlueprintPage';
import Homepage from './pages/Homepage';
import Photography from './pages/Photography';
import Article from './pages/Article';
import PaperEffects from './pages/PaperEffects';
import PaperFilters from './pages/PaperFilters';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/mono-blueprint" element={<MonoBlueprintPage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/explorations/paper-effects" element={<PaperEffects />} />
            <Route path="/explorations/paper-filters" element={<PaperFilters />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="*" element={<MonoBlueprintPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
