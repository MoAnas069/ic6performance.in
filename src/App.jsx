import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import EngineeringPage from './pages/EngineeringPage';
import SystemsPage from './pages/SystemsPage';
import CarbonFiberPage from './pages/CarbonFiberPage';
import ContactPage from './pages/ContactPage';

/* AnimatedRoutes Wrapper for AnimatePresence */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/systems" element={<SystemsPage />} />
        <Route path="/engineering" element={<EngineeringPage />} />
        <Route path="/quality" element={<CarbonFiberPage />} />
        <Route path="/final" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-aether-black text-aether-text">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/*" element={<AnimatedRoutes />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
