import React from 'react';

const LeetCodeHeatmap: React.FC = () => {
  const graphUrl = `https://leetcard.jacoblin.cool/Raghu_khajuria?theme=dark&ext=heatmap`;

  return (
    <div style={{
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'var(--bg-card)',
    }}>
      <img
        src={graphUrl}
        alt="LeetCode activity graph for Raghu_khajuria"
        style={{ width: '100%', display: 'block' }}
      />
    </div>
  );
};

export const CodingActivity: React.FC = () => {
  return (
    <div className="fade-up" style={{ animationDelay: '0.4s' }}>
      <p className="section-title">Coding Activity.</p>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
        My LeetCode activity — I practice daily to keep my problem-solving sharp.
      </p>
      <LeetCodeHeatmap />
    </div>
  );
};
