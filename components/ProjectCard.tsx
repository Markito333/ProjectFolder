'use client';

import { Project } from '@/types';

export default function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <div
      onClick={() => onSelect(project)}
      style={{ cursor: 'pointer' }}
    >
      <div
        style={{
          position: 'relative',
          borderRadius: '10px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f4',
          border: '1px solid #f0f0f0',
          transition: 'box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{ position: 'relative', width: '100%', paddingBottom: '75%', overflow: 'hidden' }}>
          <img
            src={project.mainPhoto}
            alt={project.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            loading="lazy"
          />
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '3px 8px',
              borderRadius: '999px',
              fontSize: '10px',
              fontWeight: 500,
              backgroundColor:
                project.status === 'public'
                  ? 'rgba(187,247,208,0.9)'
                  : project.status === 'in-progress'
                    ? 'rgba(254,243,199,0.9)'
                    : 'rgba(254,202,202,0.9)',
              color:
                project.status === 'public'
                  ? '#166534'
                  : project.status === 'in-progress'
                    ? '#92400e'
                    : '#991b1b',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                backgroundColor:
                  project.status === 'public'
                    ? '#166534'
                    : project.status === 'in-progress'
                      ? '#92400e'
                      : '#991b1b',
                display: 'inline-block',
              }}
            />
            {project.status === 'public'
              ? 'Público'
              : project.status === 'in-progress'
                ? 'En progreso'
                : 'Privado'}
          </div>
        </div>
        <div style={{ padding: '10px 12px 12px' }}>
          <h3
            style={{
              margin: 0,
              fontSize: '13px',
              fontWeight: 600,
              color: '#1c1917',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
