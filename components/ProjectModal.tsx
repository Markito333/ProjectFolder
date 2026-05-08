'use client';

import { useEffect, useState, useCallback } from 'react';
import { Project } from '@/types';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const allPhotos = [project.mainPhoto, ...project.photos];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % allPhotos.length);
  }, [allPhotos.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);
  }, [allPhotos.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '85vh',
          backgroundColor: '#fff',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            flex: '1 1 60%',
            backgroundColor: '#f5f5f4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: '400px',
          }}
        >
          <img
            src={allPhotos[currentIndex]}
            alt=""
            style={{
              maxWidth: '100%',
              maxHeight: '80vh',
              objectFit: 'contain',
              padding: '24px',
            }}
          />

          {allPhotos.length > 1 && (
            <>
              <button
                onClick={goPrev}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#444',
                  fontSize: '16px',
                }}
              >
                ‹
              </button>
              <button
                onClick={goNext}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  color: '#444',
                  fontSize: '16px',
                }}
              >
                ›
              </button>
            </>
          )}
        </div>

        <div
          style={{
            flex: '0 0 40%',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 500,
                backgroundColor:
                  project.status === 'public'
                    ? '#bbf7d0'
                    : project.status === 'in-progress'
                      ? '#fef3c7'
                      : '#fecaca',
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
            </span>
            {allPhotos.length > 1 && (
              <span style={{ fontSize: '11px', color: '#a8a29e', marginLeft: 'auto' }}>
                {currentIndex + 1} / {allPhotos.length}
              </span>
            )}
          </div>

          <p style={{ margin: 0, fontSize: '11px', fontWeight: 500, color: '#a8a29e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {project.company}
          </p>
          <h2 style={{ margin: '4px 0 16px', fontSize: '22px', fontWeight: 700, color: '#1c1917', lineHeight: 1.2 }}>
            {project.title}
          </h2>
          <p style={{ margin: 0, fontSize: '14px', color: '#57534e', lineHeight: 1.6, flex: 1 }}>
            {project.description}
          </p>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#78716c' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Duración: <strong style={{ color: '#444' }}>{project.duration}</strong></span>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '12px',
                  padding: '8px 16px',
                  backgroundColor: '#1c1917',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#444'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1c1917'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {project.link}
              </a>
            )}
          </div>

          {allPhotos.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
              {allPhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: i === currentIndex ? '2px solid #000' : '2px solid transparent',
                    padding: 0,
                    cursor: 'pointer',
                    opacity: i === currentIndex ? 1 : 0.5,
                    transition: 'opacity 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = i === currentIndex ? '1' : '0.5'; }}
                >
                  <img
                    src={photo}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </button>
              ))}
            </div>
          )}

          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.06)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '16px',
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
