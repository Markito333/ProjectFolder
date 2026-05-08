'use client'

import LoginForm from '@/components/LoginForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100">
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 bg-white">
          <img
            src="/imgs/c4bcb74e20a03e5cbdfe2de2bc10c562.jpg"
            alt="Login visual"
            className="w-full h-auto max-h-96 object-cover rounded-lg"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
