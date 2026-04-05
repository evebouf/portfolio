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
import YCWebsite from './pages/YCWebsite';
import Bookmarks from './pages/Bookmarks';
import Food from './pages/Food';
import VictorianFlat from './pages/VictorianFlat';
import AgentBuilders from './pages/AgentBuilders';
import Login from './pages/Login';
import Ideas from './pages/Ideas';
import CanadaDesignStudio from './pages/CanadaDesignStudio';

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
            <Route path="/projects/yc-website" element={<YCWebsite />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/projects/food" element={<Food />} />
            <Route path="/projects/victorian-flat" element={<VictorianFlat />} />
            <Route path="/research/agent-builders" element={<AgentBuilders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/article/:slug" element={<Article />} />
            {import.meta.env.DEV && <Route path="/ideas" element={<Ideas />} />}
            {import.meta.env.DEV && <Route path="/ideas/canada-design-studio" element={<CanadaDesignStudio />} />}
            <Route path="*" element={<MonoBlueprintPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
