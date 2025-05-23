import React from 'react';
import { Link } from 'react-router-dom';

interface Jogador {
  id: number;
  nome: string;
  posicao: string;
  idade: number;
  numero: number;
  ultimaAvaliacao: number;
}

export function ListaJogadores() {
  // Dados de exemplo - substituir por dados reais do backend
  const jogadores: Jogador[] = [
    { id: 1, nome: 'João Silva', posicao: 'Atacante', idade: 18, numero: 9, ultimaAvaliacao: 8.5 },
    { id: 2, nome: 'Pedro Santos', posicao: 'Meio-Campo', idade: 19, numero: 10, ultimaAvaliacao: 7.8 },
    { id: 3, nome: 'Miguel Costa', posicao: 'Defesa', idade: 17, numero: 4, ultimaAvaliacao: 8.2 },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Jogadores</h1>
          <Link
            to="/jogadores/novo"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Adicionar Jogador
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {jogadores.map((jogador) => (
              <li key={jogador.id}>
                <div className="flex items-center justify-between hover:bg-gray-50 px-4 py-4 sm:px-6">
                  <Link to={`/jogadores/${jogador.id}`} className="flex-1 flex items-center min-w-0">
                    <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg font-medium text-gray-600">{jogador.numero}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-blue-600">{jogador.nome}</p>
                      <p className="text-sm text-gray-500">{jogador.posicao}</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-gray-900">Idade</p>
                      <p className="text-sm font-medium text-gray-500">{jogador.idade} anos</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">Última Avaliação</p>
                      <p className="text-sm font-medium text-gray-500">{jogador.ultimaAvaliacao}</p>
                    </div>
                    <Link
                      to={`/avaliacoes?jogador=${jogador.id}`}
                      className="ml-6 inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Ver Avaliações
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 