import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Publication from './components/Publication';

function App() {
  return (
    <div className="min-h-screen bg-dark text-light grid-bg">
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Publication />
      </main>
      <Footer />
    </div>
  );
}

export default App;