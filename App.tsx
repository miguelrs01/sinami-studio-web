import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { GameDetail } from './pages/GameDetail';
import { Contact } from './pages/Contact';
import { AboutPage } from './pages/AboutPage';
import { GamesPage } from './pages/GamesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:id/play" element={<GameDetail />} />
            <Route path="/games/:id" element={<GameDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch all */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
