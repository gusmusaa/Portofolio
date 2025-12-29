import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/Skills';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-gray-100 selection:bg-accent selection:text-primary">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Certificates />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;