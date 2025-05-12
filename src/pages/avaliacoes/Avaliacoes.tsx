import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Avaliacao {
  id: number;
  jogador: {
    id: number;
    nome: string;
    numero: number;
    posicao: string;
  };
  data: string;
  tecnica: number;
  tatica: number;
  fisica: number;
  mental: number;
  mediaGeral: number;
  observacoes: string;
}

export function Avaliacoes() {
  // Dados de exemplo - substituir por dados reais do backend
  const avaliacoes: Avaliacao[] = [
    {
      id: 1,
      jogador: {
        id: 1,
        nome: 'João Silva',
        numero: 9,
        posicao: 'Atacante',
      },
      data: '2024-03-15',
      tecnica: 8.5,
      tatica: 7.8,
      fisica: 8.2,
      mental: 8.0,
      mediaGeral: 8.1,
      observacoes: 'Excelente finalização, precisa melhorar posicionamento.',
    },
    {
      id: 2,
      jogador: {
        id: 2,
        nome: 'Pedro Santos',
        numero: 10,
        posicao: 'Meio-Campo',
      },
      data: '2024-03-15',
      tecnica: 8.7,
      tatica: 8.5,
      fisica: 7.8,
      mental: 8.3,
      mediaGeral: 8.3,
      observacoes: 'Ótima visão de jogo, líder em campo.',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Avaliações</h1>
          <Link
            to="/avaliacoes/nova"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Nova Avaliação
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="divide-y divide-gray-200">
            {avaliacoes.map((avaliacao) => (
              <div key={avaliacao.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-600">{avaliacao.jogador.numero}</span>
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        {avaliacao.jogador.nome}
                      </h2>
                      <p className="text-sm text-gray-500">{avaliacao.jogador.posicao}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{avaliacao.mediaGeral.toFixed(1)}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-500">Técnica</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{avaliacao.tecnica.toFixed(1)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-500">Tática</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{avaliacao.tatica.toFixed(1)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-500">Física</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{avaliacao.fisica.toFixed(1)}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-500">Mental</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{avaliacao.mental.toFixed(1)}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-500">{avaliacao.observacoes}</p>
                </div>

                <div className="mt-4">
                  <Link
                    to={`/avaliacoes/${avaliacao.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Editar avaliação
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 