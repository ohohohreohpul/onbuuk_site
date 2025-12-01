import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import UIShowcase from './components/UIShowcase';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
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
          <UIShowcase />
          <HowItWorks />
          <Integrations />
          <Testimonials />
          <Pricing />
          <CTA />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;