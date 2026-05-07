import React from 'react';
import { Profile } from './components/sections/Profile';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

import { ContactSection } from './components/sections/ContactSection';
import { SiteFooter } from './components/sections/SiteFooter';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
    }}>
      {/* Centered column - wider like reference */}
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '48px 24px 80px',
      }}>
        <Profile />
        <div className="divider" />
        <AboutSection />
        <div className="divider" />
        <SkillsSection />
        <div className="divider" />
        <ProjectsSection />
        <div className="divider" />
        <ContactSection />
      </div>
      <SiteFooter />
    </div>
  );
}

export default App;
