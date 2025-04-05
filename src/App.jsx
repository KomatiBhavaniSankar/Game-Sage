import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'; // Adjust path if necessary
import Contact from './pages/Contact';
import AutoAds from './components/AutoAds';
import './App.css';

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
       <Route path="/Contact" element={<Contact />} />
        </Routes>
        <AutoAds />
        <Footer />
      </>
    </Router>
  );
};

export default App;
