import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Ubicanos from './pages/Ubicanos';
import { Activity } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
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

  // Handle route changes
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle service worker errors
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message && (
        event.message.includes('Cannot navigate to URL') ||
        event.message.includes('_refreshClients') ||
        event.message.includes('service.worker')
      )) {
        console.warn('Service worker navigation error detected, ignoring...');
        event.preventDefault();
        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && typeof event.reason === 'string' && (
        event.reason.includes('Cannot navigate to URL') ||
        event.reason.includes('_refreshClients') ||
        event.reason.includes('service.worker')
      )) {
        console.warn('Service worker promise rejection detected, ignoring...');
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <ThemeProvider>
      <>
        {loading && (
          <div id="preloader" className={fadeOut ? 'fade-out' : ''}>
            <div id="loader">
              <Activity size={50} color="#9370DB" />
            </div>
          </div>
        )}
        {!loading && (
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ubicanos" element={<Ubicanos />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        )}
      </>
    </ThemeProvider>
  );
};

export default App;