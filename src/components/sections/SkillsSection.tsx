import React from 'react';
import { Bot } from 'lucide-react';

const SKILLS = [
  { name: 'React', icon: <img src="https://cdn.simpleicons.org/react/white" width="14" alt="React" /> },
  { name: 'Next.js', icon: <img src="https://cdn.simpleicons.org/nextdotjs/white" width="14" alt="Next.js" /> },
  { name: 'Node.js', icon: <img src="https://cdn.simpleicons.org/nodedotjs/white" width="14" alt="Node.js" /> },
  { name: 'JavaScript', icon: <img src="https://cdn.simpleicons.org/javascript/white" width="14" alt="JavaScript" /> },
  { name: 'TypeScript', icon: <img src="https://cdn.simpleicons.org/typescript/white" width="14" alt="TypeScript" /> },
  { name: 'Python', icon: <img src="https://cdn.simpleicons.org/python/white" width="14" alt="Python" /> },
  { name: 'C++', icon: <img src="https://cdn.simpleicons.org/cplusplus/white" width="14" alt="C++" /> },
  { name: 'Java', icon: <img src="https://cdn.simpleicons.org/openjdk/white" width="14" alt="Java" /> },
  { name: 'MongoDB', icon: <img src="https://cdn.simpleicons.org/mongodb/white" width="14" alt="MongoDB" /> },
  { name: 'Express', icon: <img src="https://cdn.simpleicons.org/express/white" width="14" alt="Express" /> },
  { name: 'Git', icon: <img src="https://cdn.simpleicons.org/git/white" width="14" alt="Git" /> },
  { name: 'Gen AI', icon: <Bot size={14} /> },
  { name: 'LangChain', icon: <img src="https://cdn.simpleicons.org/langchain/white" width="14" alt="LangChain" /> },
  { name: 'REST APIs', icon: <img src="https://cdn.simpleicons.org/postman/white" width="14" alt="REST APIs" /> },
  { name: 'Docker', icon: <img src="https://cdn.simpleicons.org/docker/white" width="14" alt="Docker" /> },
  { name: 'AWS', icon: <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg" width="14" alt="AWS" style={{ filter: 'brightness(0) invert(1)' }} /> },
  { name: 'Linux', icon: <img src="https://cdn.simpleicons.org/linux/white" width="14" alt="Linux" /> },
];

export const SkillsSection: React.FC = () => {
  return (
    <div className="fade-up" style={{ animationDelay: '0.2s' }}>
      <p className="section-title">Skills &amp; Tools.</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {SKILLS.map((skill) => (
          <span key={skill.name} className="chip">
            <span style={{ fontSize: '13px' }}>{skill.icon}</span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
