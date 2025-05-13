import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Jogo {
  id: number;
  data: string;
  hora: string;
  adversario: string;
  local: string;
  observacoes?: string;
}

const jogosExemplo: Jogo[] = [
  {
    id: 1,
    data: '2024-03-25',
    hora: '16:00',
    adversario: 'FC Porto',
    local: 'Estádio Municipal',
    observacoes: 'Levar equipamento azul',
  },
  {
    id: 2,
    data: '2024-04-02',
    hora: '18:30',
    adversario: 'SL Benfica',
    local: 'Campo do Benfica',
  },
  {
    id: 3,
    data: '2024-04-10',
    hora: '15:00',
    adversario: 'SC Braga',
    local: 'Estádio Braga',
    observacoes: 'Jogo decisivo!',
  },
];

export default function CalendarioJogos() {
  const [jogos] = useState<Jogo[]>(jogosExemplo);
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 relative">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Calendário de Jogos</h1>
        <ul className="divide-y divide-gray-200">
          {jogos.map((jogo) => (
            <li key={jogo.id} className="py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-lg font-semibold text-blue-700">
                    {new Date(jogo.data).toLocaleDateString('pt-BR')} - {jogo.hora}
                  </p>
                  <p className="text-gray-900 font-medium">Adversário: {jogo.adversario}</p>
                  <p className="text-gray-600">Local: {jogo.local}</p>
                  {jogo.observacoes && (
                    <p className="text-sm text-yellow-700 mt-1">{jogo.observacoes}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded transition border border-gray-200"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 