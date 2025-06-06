import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ubicanos from './pages/Ubicanos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ubicanos" element={<Ubicanos />} />
    </Routes>
  );
}

export default App;