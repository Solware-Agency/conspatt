import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Ubicanos from './pages/Ubicanos';
import { Activity } from 'lucide-react';
import './preloader.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle navigation errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('Cannot navigate to URL')) {
        console.warn('Navigation error detected, reloading page...');
        window.location.reload();
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  // Handle route changes
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div id="preloader" className={fadeOut ? 'fade-out' : ''}>
          <div id="loader">
            <Activity size={50} color="#9370DB" />
          </div>
        </div>
      )}
      {!loading && (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ubicanos" element={<Ubicanos />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;