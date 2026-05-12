'use client';

import { useState } from 'react';
import Link from 'next/link';
import LogoutModal from './LogoutModal';
import { ProjectStatus } from '@/types';

export default function Header({
  filter,
  setFilter,
  projectCount,
}: {
  filter?: ProjectStatus | 'all';
  setFilter?: (f: ProjectStatus | 'all') => void;
  projectCount?: number;
}) {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-3 group">
            <img
              src="/imgs/profile.jpg"
              alt=""
              className="w-9 h-9 rounded-full object-cover"
            />
            <div>
              <span className="font-semibold text-gray-900">
                Marcos <span className="text-amber-500">David</span> — Proyectos
              </span>
              <p className="text-xs text-gray-400 m-0 leading-tight">
                Todos mis trabajos organizados en un solo lugar.
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {filter && setFilter && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '14px', color: '#a8a29e' }}>
                  {projectCount} proyecto
                  {projectCount !== 1 && 's'}
                </span>
                <div style={{ position: 'relative' }}>
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as ProjectStatus | 'all')}
                    style={{
                      appearance: 'none',
                      padding: '8px 36px 8px 14px',
                      backgroundColor: '#e5e5e5',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#444',
                      cursor: 'pointer',
                      outline: 'none',
                      minWidth: '120px',
                    }}
                  >
                    <option value="all">Todos</option>
                    <option value="public">Públicos</option>
                    <option value="private">Privados</option>
                    <option value="in-progress">En progreso</option>
                  </select>
                  <svg
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '16px',
                      height: '16px',
                      color: '#a8a29e',
                      pointerEvents: 'none',
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            )}
            <button
              onClick={() => setShowLogout(true)}
              className="text-sm font-medium text-white bg-red-400 hover:bg-red-600 transition-colors px-4 py-2 rounded-lg"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {showLogout && <LogoutModal onClose={() => setShowLogout(false)} />}
    </>
  );
}
