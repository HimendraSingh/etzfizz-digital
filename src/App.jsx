import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const navRef = useRef(null);

  return (
    <div className="app-root" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Fixed Ambient Cyber Grid */}
      <div className="cyber-grid" aria-hidden="true" />

      {/* Navigation */}
      <Navbar ref={navRef} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with GSAP Initial Load Animation */}
        <Hero navRef={navRef} />

        {/* Services: What We Build */}
        <Services />

        {/* About: Why ITZFIZZ */}
        <About />

        {/* Final Call To Action */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
