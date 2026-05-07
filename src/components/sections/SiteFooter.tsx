import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const links = [
    { icon: Mail, label: 'Mail', href: 'mailto:raghu@example.com' },
    { icon: Github, label: 'Github', href: 'https://github.com/RAGHUKHAJURIA' },
    { icon: Twitter, label: 'Twitter', href: 'https://x.com/khajuria_raghu' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/raghu-khajuria-753a182b1/' },
  ];

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '24px',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseOut={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Raghu Khajuria. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
