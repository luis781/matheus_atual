import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardCard {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  link: string;
  color: string;
}

export function Dashboard() {
  const cards: DashboardCard[] = [
    {
      title: "Total de Jogadores",
      value: 24,
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "/jogadores",
      color: "bg-blue-500"
    },
    {
      title: "Próximo Treino",
      value: "Hoje, 18:00",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: "/treinos",
      color: "bg-green-500"
    },
    {
      title: "Avaliações Pendentes",
      value: 3,
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      link: "/avaliacoes",
      color: "bg-yellow-500"
    },
    {
      title: "Média de Desempenho",
      value: "8.5",
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      link: "/desempenho",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Bem-vindo ao FuteCoach. Aqui está o resumo das suas atividades.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 rounded-md p-3 ${card.color}`}>
                    {card.icon}
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {card.title}
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {card.value}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-5 py-3">
                <Link
                  to={card.link}
                  className="text-sm font-medium text-blue-700 hover:text-blue-900"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Seções Adicionais */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Próximos Treinos */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Próximos Treinos</h2>
            <div className="space-y-3">
              {[
                { data: "24/03", hora: "18:00", tipo: "Técnico" },
                { data: "26/03", hora: "17:30", tipo: "Tático" },
                { data: "28/03", hora: "18:00", tipo: "Físico" }
              ].map((treino, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-md p-2">
                      <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{treino.data} - {treino.hora}</p>
                      <p className="text-sm text-gray-500">{treino.tipo}</p>
                    </div>
                  </div>
                  <Link to="/treinos" className="text-sm text-blue-600 hover:text-blue-900">
                    Ver detalhes
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Últimas Avaliações */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Últimas Avaliações</h2>
            <div className="space-y-3">
              {[
                { jogador: "João Silva", nota: 8.5, data: "22/03" },
                { jogador: "Pedro Santos", nota: 7.8, data: "21/03" },
                { jogador: "Miguel Costa", nota: 8.2, data: "20/03" }
              ].map((avaliacao, index) => (
                <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-2">
                      <span className="text-sm font-medium text-green-600">{avaliacao.nota}</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{avaliacao.jogador}</p>
                      <p className="text-sm text-gray-500">{avaliacao.data}</p>
                    </div>
                  </div>
                  <Link to="/avaliacoes" className="text-sm text-blue-600 hover:text-blue-900">
                    Ver detalhes
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 