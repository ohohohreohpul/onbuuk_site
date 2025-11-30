import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyBuuk from './components/WhyBuuk';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster position="top-right" />
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <WhyBuuk />
          <CTA />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;