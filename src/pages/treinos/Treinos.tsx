import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Treino {
  id: number;
  data: string;
  horario: string;
  tipo: string;
  duracao: string;
  jogadoresConfirmados: number;
  totalJogadores: number;
}

export function Treinos() {
  // Dados de exemplo - substituir por dados reais do backend
  const treinos: Treino[] = [
    {
      id: 1,
      data: '2024-03-20',
      horario: '18:00',
      tipo: 'Técnico',
      duracao: '1h30',
      jogadoresConfirmados: 18,
      totalJogadores: 24,
    },
    {
      id: 2,
      data: '2024-03-22',
      horario: '18:00',
      tipo: 'Físico',
      duracao: '1h',
      jogadoresConfirmados: 20,
      totalJogadores: 24,
    },
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Treinos</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gerencie os treinos da sua equipe
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/treinos/exercicios"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Biblioteca de Exercícios
            </Link>
            <Link
              to="/treinos/novo"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Agendar Treino
            </Link>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="divide-y divide-gray-200">
            {treinos.map((treino) => (
              <div key={treino.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h2 className="text-lg font-medium text-gray-900">
                          Treino {treino.tipo}
                        </h2>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {new Date(treino.data).toLocaleDateString('pt-BR')} às {treino.horario} - {treino.duracao}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">Presenças confirmadas</p>
                      <p className="text-sm text-gray-500">{treino.jogadoresConfirmados} de {treino.totalJogadores}</p>
                    </div>
                    <Link
                      to={`/treinos/${treino.id}`}
                      className="ml-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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