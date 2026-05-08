'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAlert } from './AlertContext';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { addAlert } = useAlert();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      addAlert('warning', 'Por favor completa todos los campos');
      return;
    }

    if (email !== 'markito' || password !== '1234') {
      addAlert('error', 'Usuario o contraseña incorrectos');
      return;
    }

    addAlert('success', '¡Bienvenido markito!');
    setEmail('');
    setPassword('');
    router.push('/projects');
  };

  return (
    <div className="w-full max-w-sm mx-auto">
     <h1 className="text-2xl font-semibold text-black mb-8">
  Bienvenid@ a 
  <span className="bg-orange-100 text-orange-400 px-2 py-1 rounded-md">ProjectFolder</span> 
  <br />
  todos los proyectos acá!
</h1>
      <h2 className="mb-3 -mt-4 text-gray-600">user: markito    pass: 1234</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-1">
            User
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <input
              id="user"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 bg-gray-50 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm"
              placeholder="user"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 bg-gray-50 rounded-md text-black placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Ingresar
        </button>
      </form>
    </div>
  )
}
