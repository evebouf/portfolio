import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/fonts.css';
import Home from './pages/Home';
import BlueprintPage from './pages/BlueprintPage';
import MonoBlueprintPage from './pages/MonoBlueprintPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blueprint" element={<BlueprintPage />} />
            <Route path="/mono-blueprint" element={<MonoBlueprintPage />} />
            <Route path="*" element={<MonoBlueprintPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
