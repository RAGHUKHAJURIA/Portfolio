import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: 'Running' | 'Completed' | 'In Progress';
  isMain?: boolean;
  githubUrl: string;
  liveUrl: string;
}

const PROJECTS: Project[] = [
  {
    title: 'Attainers',
    description:
      'Attainers is an AI-powered platform built for a YouTube learning ecosystem, where admins can manage courses, PDFs, blogs, and mock tests from a single dashboard. It also features an AI agent that automatically generates mock tests from simple prompts, reducing manual effort and speeding up content creation.',
    image: '/images/attainers.png',
    tags: ['React', 'Node.js', 'Gen AI', 'RestAPIs', 'Tailwind'],
    status: 'Running',
    githubUrl: 'https://github.com/RAGHUKHAJURIA/Attainers.git',
    liveUrl: 'https://attainers.vercel.app/',
  },

  {
    title: 'Thynkly',
    description:
      'Thynkly is a modern collaborative whiteboard platform built with Next.js that enables real-time visual collaboration on an infinite canvas. It includes advanced drawing tools, smart selection and eraser features, zoom controls, text and image support, and optimized high-performance rendering.',
    image: '/images/thynkly.png',
    tags: ['Next.js', 'typescript', 'Canvas API', 'Real-time', 'tailwind'],
    status: 'In Progress',
    githubUrl: 'https://github.com/RAGHUKHAJURIA/Board.git',
    liveUrl: 'https://thynklly.vercel.app/board',
  },

  {
    title: 'Neuro Ops',
    description:
      'NeuroOps is an AI-powered CI/CD pipeline repair system that can predict potential failures before pipeline execution, reducing errors and deployment risks. It automatically monitors workflows, analyzes logs, generates AI-based fixes, supports Terraform self-healing, GitHub automation, security verification, and provides a real-time dashboard for pipeline management.',
    image: '/images/neuro.png',
    tags: ['React.js', 'javascript','tailwind', 'github-actions', 'Node.js', 'llm'],
    status: 'In Progress',
    githubUrl: 'https://github.com/RAGHUKHAJURIA/Neuro-ops.git',
    liveUrl: 'https://cicd-automation.vercel.app/',
  },

  {
    title: 'Karo Pitch',
    description:
      'A modern frontend application focused on clean UI/UX, smooth animations, responsive design, and high-performance user interactions for an engaging user experience.',
    image: '/images/kro.png',
    tags: ['Next.js', 'typescript','tailwind'],
    status: 'Running',
    githubUrl: 'https://github.com/RAGHUKHAJURIA/kropitch.git',
    liveUrl: 'https://kropitch.vercel.app/',
  },

   {
    title: 'Retrofit-First',
    description:
      'This project is a deterministic retrofit feasibility engine designed to evaluate the safety and suitability of residential building retrofit plans using EPC data, property archetypes, climate conditions, and predefined engineering rules. It automatically analyzes moisture risks, ventilation safety, retrofit sequencing, and EPC uplift pathways to generate fast, auditable, and rule-governed feasibility decisions without relying on AI-based predictions.',
    image: '/images/retro.png',
    tags: ['Next.js', 'typescript','tailwind', 'Engine-Based-Rules'],
    status: 'Running',
    githubUrl: 'https://github.com/RAGHUKHAJURIA/Retrofit-Engine.git',
    liveUrl: 'https://retrofit-engine.vercel.app/',
  },

   {
    title: 'Ankur',
    description:
      'Ankur is a full-stack MERN-based school management system that streamlines admissions, payments, student records, and content management through scalable REST APIs. Implemented secure JWT authentication with role-based access control, automated student onboarding, and integrated PhonePe payment gateway with webhook handling. Designed scalable backend architecture using MongoDB and GridFS for secure document storage and efficient data management.',
    image: '/images/school.png',
    tags: ['React', 'Node.js','MongoDb', 'RestAPIs', 'Tailwind', 'PhonePe-integration'],
    status: 'Running',
    githubUrl: 'https://github.com/RAGHUKHAJURIA/AnkurSchool.git',
    liveUrl: 'https://ankur-school-xi.vercel.app/',
  },


];

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Running:     { bg: '#0d2018', text: '#22c55e', border: '#1a3a25' },
  Completed:   { bg: '#1a1a2e', text: '#818cf8', border: '#2d2b6a' },
  'In Progress': { bg: '#1c1a10', text: '#fbbf24', border: '#3a3010' },
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const c = STATUS_COLORS[status] ?? STATUS_COLORS['Completed'];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      padding: '2px 8px', borderRadius: '999px',
      border: `1px solid ${c.border}`, background: c.bg,
      color: c.text, fontSize: '11px', fontWeight: '500',
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: c.text, display: 'inline-block' }} />
      {status}
    </span>
  );
};

export const ProjectsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <div className="fade-up" style={{ animationDelay: '0.3s' }}>
      <p className="section-title">Projects.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {displayed.map((project) => (
          <div key={project.title} className="project-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '20px' }}>
            {/* Thumbnail with scroll-pan animation */}
            <div style={{
              width: '260px',
              height: '160px',
              flexShrink: 0,
              flexGrow: 0,
              background: '#0a0a0a',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              {project.title === 'Attainers' && project.isMain ? (
                <div className="project-scroll-pan" style={{
                  width: '100%',
                  height: '400%',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top center',
                }} />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/260x160/111/333?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column' }}>
              {/* Row 1: title + badges + icons */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', lineHeight: 1.2 }}>
                    {project.title}
                  </span>
                  {project.isMain && (
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      padding: '2px 8px', borderRadius: '999px',
                      border: '1px solid #3a1f6a', background: '#1a0a30',
                      color: '#a855f7', fontSize: '11px', fontWeight: '500',
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
                      Main Project
                    </span>
                  )}
                  <StatusBadge status={project.status} />
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--text-dim)')}
                  >
                    <Github size={18} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--text-dim)')}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="chip" style={{ fontSize: '12px', padding: '3px 10px', background: 'transparent' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {PROJECTS.length > 2 && (
        <button className="show-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {showAll ? 'Show less' : `Show all ${PROJECTS.length} projects`}
        </button>
      )}
    </div>
  );
};
