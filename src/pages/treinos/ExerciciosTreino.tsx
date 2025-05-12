import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Exercicio {
  id: number;
  nome: string;
  categoria: string;
  duracao: string;
  intensidade: string;
  objetivos: string[];
  descricao: string;
}

export function ExerciciosTreino() {
  const [exercicios] = useState<Exercicio[]>([
    {
      id: 1,
      nome: "Posse de Bola 4x4",
      categoria: "Técnico-Tático",
      duracao: "15 min",
      intensidade: "Média",
      objetivos: ["Passe", "Movimentação", "Pressão"],
      descricao: "Exercício de posse de bola em espaço reduzido com 4 jogadores de cada equipe."
    },
    {
      id: 2,
      nome: "Finalização após Drible",
      categoria: "Técnico",
      duracao: "20 min",
      intensidade: "Alta",
      objetivos: ["Drible", "Finalização", "Velocidade"],
      descricao: "Exercício de finalização após ultrapassar obstáculos com bola dominada."
    },
    {
      id: 3,
      nome: "Jogo Reduzido 7x7",
      categoria: "Tático",
      duracao: "25 min",
      intensidade: "Alta",
      objetivos: ["Posicionamento", "Transição", "Finalização"],
      descricao: "Jogo em campo reduzido com regras específicas para trabalhar transições."
    }
  ]);

  const categorias = ["Todos", "Técnico", "Tático", "Técnico-Tático", "Físico"];
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Exercícios de Treino</h1>
            <p className="mt-1 text-sm text-gray-500">
              Gerencie sua biblioteca de exercícios de treino
            </p>
          </div>
          <Link
            to="/treinos/exercicios/novo"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Novo Exercício
          </Link>
        </div>

        {/* Filtros */}
        <div className="mb-6">
          <div className="flex space-x-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaAtiva(categoria)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  categoriaAtiva === categoria
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Exercícios */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {exercicios
              .filter(
                (exercicio) =>
                  categoriaAtiva === "Todos" || exercicio.categoria === categoriaAtiva
              )
              .map((exercicio) => (
                <li key={exercicio.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center">
                          <div className="bg-blue-100 rounded-md p-2 mr-4">
                            <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{exercicio.nome}</h3>
                            <div className="mt-1">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2">
                                {exercicio.categoria}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                                {exercicio.duracao}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                {exercicio.intensidade}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">{exercicio.descricao}</p>
                        <div className="mt-2">
                          {exercicio.objetivos.map((objetivo) => (
                            <span
                              key={objetivo}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mr-2"
                            >
                              {objetivo}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <Link
                          to={`/treinos/exercicios/${exercicio.id}`}
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Editar
                        </Link>
                      </div>
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