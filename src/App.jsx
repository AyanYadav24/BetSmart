import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import BetCalculator from './BetCalculator';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BetCalculator" element={<BetCalculator />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;