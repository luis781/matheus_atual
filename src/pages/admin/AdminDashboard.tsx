import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Painel do Administrador</h1>
        <div className="grid grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/admin/jogadores')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded transition"
          >
            Gerir Jogadores
          </button>
          <button
            onClick={() => navigate('/admin/treinadores')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded transition"
          >
            Gerir Treinadores
          </button>
          <button
            onClick={() => navigate('/admin/exercicios')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded transition"
          >
            Gerir Exercícios
          </button>
          <button
            onClick={() => navigate('/admin/calendario')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded transition"
          >
            Gerir Calendário de Jogos
          </button>
        </div>
      </div>
    </div>
  );
}