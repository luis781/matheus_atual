import React from 'react';
import { Link } from 'react-router-dom';
import futMenino from '../assets/fut_menino.png';

export function Home() {
  return (
    <main className="flex items-center justify-between px-20 py-0 min-h-[calc(100vh-128px)]">
      <section className="max-w-2xl">
        <h1 className="text-5xl font-extrabold mb-6 text-black leading-tight">De jogador a craque.</h1>
        <p className="text-lg text-gray-600 mb-8">
          Acompanhe a sua evolução, fortaleça a sua equipa e atinja o próximo nível com o FuteCoach.
        </p>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Começar Agora
          </Link>
          <Link
            to="/sobre-nos"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Saber Mais
          </Link>
        </div>
      </section>
      <img src={futMenino} alt="Jogador FuteCoach" className="max-w-xl" />
    </main>
  );
} 