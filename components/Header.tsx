'use client';

import { useState } from 'react';
import Link from 'next/link';
import LogoutModal from './LogoutModal';

export default function Header() {
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
