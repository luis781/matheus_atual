import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Treino {
  id: number;
  data: string;
  horario: string;
  tipo: string;
  duracao: string;
  status: 'Confirmado' | 'Pendente' | 'Realizado';
}

interface Avaliacao {
  id: number;
  data: string;
  tipo: string;
  nota: number;
  comentario: string;
}

interface Objetivo {
  id: number;
  titulo: string;
  descricao: string;
  prazo: string;
  status: 'Em Andamento' | 'Concluído' | 'Atrasado';
  progresso: number;
}

export function JogadorDashboard() {
  const [treinos] = useState<Treino[]>([
    {
      id: 1,
      data: '2024-03-20',
      horario: '18:00',
      tipo: 'Técnico',
      duracao: '1h30',
      status: 'Confirmado',
    },
    {
      id: 2,
      data: '2024-03-22',
      horario: '18:00',
      tipo: 'Físico',
      duracao: '1h',
      status: 'Pendente',
    },
  ]);

  const [avaliacoes] = useState<Avaliacao[]>([
    {
      id: 1,
      data: '2024-03-15',
      tipo: 'Técnica',
      nota: 8.5,
      comentario: 'Bom desempenho no treino de finalização',
    },
    {
      id: 2,
      data: '2024-03-10',
      tipo: 'Física',
      nota: 7.8,
      comentario: 'Necessita melhorar resistência',
    },
  ]);

  const [objetivos] = useState<Objetivo[]>([
    {
      id: 1,
      titulo: 'Melhorar Finalização',
      descricao: 'Aumentar taxa de acerto em finalizações',
      prazo: '2024-04-15',
      status: 'Em Andamento',
      progresso: 65,
    },
    {
      id: 2,
      titulo: 'Resistência Física',
      descricao: 'Aumentar capacidade aeróbica',
      prazo: '2024-04-30',
      status: 'Em Andamento',
      progresso: 40,
    },
  ]);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard do Jogador</h1>
          <p className="mt-1 text-sm text-gray-500">
            Acompanhe seus treinos, progresso e objetivos
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Média de Avaliações</dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {(avaliacoes.reduce((acc, av) => acc + av.nota, 0) / avaliacoes.length).toFixed(1)}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Presença</dt>
                    <dd className="text-lg font-medium text-gray-900">85%</dd>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Objetivos Ativos</dt>
                    <dd className="text-lg font-medium text-gray-900">{objetivos.length}</dd>
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
                          {treino.horario} - {treino.duracao}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          treino.status === 'Confirmado' ? 'bg-green-100 text-green-800' :
                          treino.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
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
                Ver todos os treinos
              </Link>
            </div>
          </div>

          {/* Avaliações Recentes */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Avaliações Recentes</h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {avaliacoes.map((avaliacao) => (
                  <li key={avaliacao.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {avaliacao.tipo} - {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
                        </p>
                        <p className="text-sm text-gray-500">
                          {avaliacao.comentario}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Nota: {avaliacao.nota}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <Link
                to="/avaliacoes"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Ver todas as avaliações
              </Link>
            </div>
          </div>
        </div>

        {/* Objetivos */}
        <div className="mt-8">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Meus Objetivos</h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {objetivos.map((objetivo) => (
                  <li key={objetivo.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {objetivo.titulo}
                        </p>
                        <p className="text-sm text-gray-500">
                          {objetivo.descricao}
                        </p>
                        <div className="mt-2">
                          <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                              <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                  Progresso
                                </span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-blue-600">
                                  {objetivo.progresso}%
                                </span>
                              </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                              <div
                                style={{ width: `${objetivo.progresso}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          objetivo.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-800' :
                          objetivo.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {objetivo.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <Link
                to="/objetivos"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Ver todos os objetivos
              </Link>
            </div>
          </div>
        </div>

        {/* Ações Rápidas */}
        <div className="mt-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/treinos/confirmar"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Confirmar Presença
            </Link>
            <Link
              to="/calendario"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Calendário de Jogos
            </Link>
            <Link
              to="/desempenho"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              Ver Desempenho
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 