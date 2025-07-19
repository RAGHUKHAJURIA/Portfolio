import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white transition-colors duration-300">
        {/* Static Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Subtle animated orbs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-800/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000" />

          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-slide"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                backgroundSize: '200px 100%',
              }}
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                }}
              />
            ))}
          </div>
        </div>

        <Navigation />
        <main className="relative z-10">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
