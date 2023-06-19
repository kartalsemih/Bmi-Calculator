import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// components
import Mainpage from './components/Mainpage';
// components
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
