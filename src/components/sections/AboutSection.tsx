import React from 'react';
import { Twitter, Mail, Download } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="fade-up" style={{ animationDelay: '0.1s' }}>
      {/* About Me */}
      <p className="section-title">About Me.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
        <p>
          Hey, I’m <span style={{ color: 'var(--text)', fontWeight: '500' }}>Raghu Khajuria</span> — a <span style={{ color: 'var(--text)' }}>full-stack developer</span> and AI-focused builder passionate about creating scalable applications and solving real-world problems through technology.
        </p>
        <p>
          I have a strong foundation in computer science fundamentals and problem solving, with 300+ solved coding problems across platforms like{' '}
          <a href="https://leetcode.com/u/Raghu_khajuria/" target="_blank" rel="noopener noreferrer" className="text-link">LeetCode</a> and{' '}
          <a href="https://www.geeksforgeeks.org/profile/khajuriaifv2?tab=activity" target="_blank" rel="noopener noreferrer" className="text-link">GeeksforGeeks</a>. 
          I also enjoy exploring cybersecurity challenges, open-source contributions, and modern developer tooling.
        </p>
        <p>
          Currently pursuing Computer Science Engineering at <span style={{ color: 'var(--text)' }}>Ramaiah Institute of Technology</span> with a CGPA of 9.06, I’m always looking to collaborate on impactful ideas, challenging engineering problems, and innovative products.
        </p>
      </div>

      {/* Reach out */}
      <div style={{ marginTop: '24px' }}>
        <p className="section-title">Reach out to me.</p>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
          I’m also active on X (Twitter), so feel free to reach out there or connect via email.
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <a
            href="https://x.com/khajuria_raghu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <Twitter size={14} />
            Twitter
          </a>
          <a href="mailto:khajuriaraghu41@gmail.com" className="btn">
            <Mail size={14} />
            Email
          </a>
        </div>
      </div>

      {/* Hire Me */}
      <div style={{ marginTop: '24px' }}>
        <p className="section-title">Hire Me.</p>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '14px', lineHeight: 1.6 }}>
          I'm currently available for internships, full-time opportunities, and freelance projects.
          If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help
          bring your ideas to life!
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <a href="mailto:khajuriaraghu41@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex' }}>
            <Mail size={14} />
            Hire Me
          </a>
          <a href="/my-resume.pdf" download="Raghu_Khajuria_Resume.pdf" className="btn" style={{ display: 'inline-flex' }}>
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};
