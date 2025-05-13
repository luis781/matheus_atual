import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Treino {
  id: number;
  data: string;
  horario: string;
  tipo: string;
  duracao: string;
  status: 'Agendado' | 'Em Andamento' | 'Concluído';
  jogadores: number;
}

interface Jogador {
  id: number;
  nome: string;
  posicao: string;
  status: 'Ativo' | 'Lesionado' | 'Suspenso';
  ultimaAvaliacao: number;
}

interface Exercicio {
  id: number;
  nome: string;
  categoria: string;
  duracao: string;
  intensidade: 'Baixa' | 'Média' | 'Alta';
  objetivos: string[];
  descricao: string;
  material: string[];
  observacoes: string;
  videoUrl?: string;
}

export function TreinadorDashboard() {
  const [treinos] = useState<Treino[]>([
    {
      id: 1,
      data: '2024-03-20',
      horario: '18:00',
      tipo: 'Técnico',
      duracao: '1h30',
      status: 'Agendado',
      jogadores: 15,
    },
    {
      id: 2,
      data: '2024-03-22',
      horario: '18:00',
      tipo: 'Físico',
      duracao: '1h',
      status: 'Agendado',
      jogadores: 12,
    },
  ]);

  const [jogadores] = useState<Jogador[]>([
    {
      id: 1,
      nome: 'João Silva',
      posicao: 'Atacante',
      status: 'Ativo',
      ultimaAvaliacao: 8.5,
    },
    {
      id: 2,
      nome: 'Pedro Santos',
      posicao: 'Meio-Campo',
      status: 'Lesionado',
      ultimaAvaliacao: 7.8,
    },
  ]);

  const [exercicios] = useState<Exercicio[]>([
    {
      id: 1,
      nome: 'Rondo 4x4',
      categoria: 'Técnico',
      duracao: '15 min',
      intensidade: 'Média',
      objetivos: ['Passe', 'Posse de Bola', 'Pressing'],
      descricao: 'Exercício de posse de bola em espaço reduzido',
      material: ['Bolas', 'Coletes'],
      observacoes: 'Manter alta intensidade',
    },
    {
      id: 2,
      nome: 'Finalização em Movimento',
      categoria: 'Técnico',
      duracao: '20 min',
      intensidade: 'Alta',
      objetivos: ['Finalização', 'Movimentação'],
      descricao: 'Treino de finalização com bola em movimento',
      material: ['Bolas', 'Cones'],
      observacoes: 'Focar na precisão',
    },
  ]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard do Treinador</h1>
          <p className="mt-1 text-sm text-gray-500">
            Gerencie seus treinos, jogadores e exercícios
          </p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Próximo Treino</dt>
                    <dd className="text-lg font-medium text-gray-900">{treinos[0].tipo} - {treinos[0].horario}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Jogadores Ativos</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {jogadores.filter(j => j.status === 'Ativo').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Exercícios</dt>
                    <dd className="text-lg font-medium text-gray-900">{exercicios.length}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Média Avaliações</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {(jogadores.reduce((acc, j) => acc + j.ultimaAvaliacao, 0) / jogadores.length).toFixed(1)}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seções Principais */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Próximos Treinos */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Próximos Treinos</h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {treinos.map((treino) => (
                  <li key={treino.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {treino.tipo} - {new Date(treino.data).toLocaleDateString('pt-BR')}
                        </p>
                        <p className="text-sm text-gray-500">
                          {treino.horario} - {treino.duracao} - {treino.jogadores} jogadores
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          treino.status === 'Agendado' ? 'bg-blue-100 text-blue-800' :
                          treino.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {treino.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <Link
                to="/treinos"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Ver todos os treinos →
              </Link>
            </div>
          </div>

          {/* Jogadores */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Jogadores</h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {jogadores.map((jogador) => (
                  <li key={jogador.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {jogador.nome}
                        </p>
                        <p className="text-sm text-gray-500">
                          {jogador.posicao}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          jogador.status === 'Ativo' ? 'bg-green-100 text-green-800' :
                          jogador.status === 'Lesionado' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {jogador.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <Link
                to="/jogadores"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Ver todos os jogadores →
              </Link>
            </div>
          </div>
        </div>

        {/* Biblioteca de Exercícios */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Biblioteca de Exercícios</h3>
            </div>
            <div className="border-t border-gray-200">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                {exercicios.map((exercicio) => (
                  <div key={exercicio.id} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-gray-900">{exercicio.nome}</h4>
                    <p className="text-sm text-gray-500 mt-1">{exercicio.categoria}</p>
                    <div className="mt-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        exercicio.intensidade === 'Baixa' ? 'bg-green-100 text-green-800' :
                        exercicio.intensidade === 'Média' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {exercicio.intensidade}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{exercicio.descricao}</p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Objetivos:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exercicio.objetivos.map((objetivo, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {objetivo}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Material:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exercicio.material.map((item, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    {exercicio.videoUrl && (
                      <div className="mt-2">
                        <a
                          href={exercicio.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-500"
                        >
                          Ver vídeo →
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <Link
                to="/exercicios"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Ver todos os exercícios →
              </Link>
            </div>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="mt-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/treinos/novo"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Agendar Treino
            </Link>
            <Link
              to="/jogadores/novo"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Adicionar Jogador
            </Link>
            <Link
              to="/treinos/exercicios/novo"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Novo Exercício
            </Link>
            <Link
              to="/avaliacoes/nova"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700"
            >
              Nova Avaliação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 