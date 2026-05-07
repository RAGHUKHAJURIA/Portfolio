import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Top row: avatar + name + status + socials */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        {/* Avatar */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '8px',
          overflow: 'hidden',
          flexShrink: 0,
          border: '1px solid var(--border)',
        }}>
          <img
            src="/images/profile.jpg"
            alt="Raghu Khajuria"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Raghu+Khajuria&background=1a1a1a&color=888&size=72';
            }}
          />
        </div>

        {/* Name + tagline */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
            <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text)', lineHeight: 1 }}>
              Raghu Khajuria
            </h1>
            {/* Available badge */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '2px 8px',
              borderRadius: '999px',
              border: '1px solid #1a3a25',
              background: '#0d2018',
              color: 'var(--accent-green)',
              fontSize: '11px',
              fontWeight: '500',
            }}>
              <span className="status-dot" />
              Available
            </span>
          </div>

          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            Full Stack Developer · AI Enthusiast
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <a href="https://github.com/RAGHUKHAJURIA" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
              <Github size={16} />
            </a>
            <a href="https://leetcode.com/u/Raghu_khajuria/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LeetCode">
              <img src="https://cdn.simpleicons.org/leetcode/white" width="16" height="16" alt="LeetCode" />
            </a>
            <a href="https://x.com/khajuria_raghu" target="_blank" rel="noopener noreferrer" className="social-btn" title="Twitter / X">
              <Twitter size={16} />
            </a>
            <a href="https://www.linkedin.com/in/raghu-khajuria-753a182b1/" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:raghu@example.com" className="social-btn" title="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
