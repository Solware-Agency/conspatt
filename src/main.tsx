import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Suppress service worker navigation errors
const originalConsoleError = console.error;
console.error = (...args) => {
  const message = args.join(' ');
  if (message.includes('Cannot navigate to URL') || 
      message.includes('_refreshClients') || 
      message.includes('service.worker')) {
    return; // Suppress these specific errors
  }
  originalConsoleError.apply(console, args);
};

// Error boundary para capturar errores de navegación
class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Only catch navigation-related errors
    if (error.message && (
      error.message.includes('Cannot navigate to URL') ||
      error.message.includes('_refreshClients') ||
      error.message.includes('service.worker')
    )) {
      return { hasError: false }; // Don't show error boundary for these
    }
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    if (error.message && (
      error.message.includes('Cannot navigate to URL') ||
      error.message.includes('_refreshClients') ||
      error.message.includes('service.worker')
    )) {
      return; // Ignore service worker errors
    }
    console.error('Application error caught:', error, errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      return <div>Something went wrong with the application.</div>;
    }

    return (this.props as any).children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);