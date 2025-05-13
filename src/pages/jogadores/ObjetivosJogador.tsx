import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Objetivo {
  id: number;
  titulo: string;
  descricao: string;
  prazo: string;
  status: 'Em Andamento' | 'Concluído' | 'Atrasado';
  progresso: number;
}

export default function ObjetivosJogador() {
  const navigate = useNavigate();
  const [objetivos, setObjetivos] = useState<Objetivo[]>([
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

  const [novoObjetivo, setNovoObjetivo] = useState({
    titulo: '',
    descricao: '',
    prazo: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novoObjetivo.titulo || !novoObjetivo.descricao || !novoObjetivo.prazo) return;
    setObjetivos([
      ...objetivos,
      {
        id: objetivos.length ? Math.max(...objetivos.map(o => o.id)) + 1 : 1,
        titulo: novoObjetivo.titulo,
        descricao: novoObjetivo.descricao,
        prazo: novoObjetivo.prazo,
        status: 'Em Andamento',
        progresso: 0,
      },
    ]);
    setNovoObjetivo({ titulo: '', descricao: '', prazo: '' });
  };

  const atualizarProgresso = (id: number, novoProgresso: number) => {
    setObjetivos(objetivos.map(obj =>
      obj.id === id
        ? {
            ...obj,
            progresso: novoProgresso,
            status:
              novoProgresso >= 100
                ? 'Concluído'
                : new Date(obj.prazo) < new Date() && novoProgresso < 100
                ? 'Atrasado'
                : 'Em Andamento',
          }
        : obj
    ));
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50">
      <div className="max-w-3xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Meus Objetivos</h1>
          <p className="mt-1 text-sm text-gray-500">Acompanhe e defina seus objetivos de treino</p>
        </div>
        {/* Formulário para novo objetivo */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Adicionar Novo Objetivo</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Título"
              value={novoObjetivo.titulo}
              onChange={e => setNovoObjetivo({ ...novoObjetivo, titulo: e.target.value })}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Descrição"
              value={novoObjetivo.descricao}
              onChange={e => setNovoObjetivo({ ...novoObjetivo, descricao: e.target.value })}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="date"
              placeholder="Prazo"
              value={novoObjetivo.prazo}
              onChange={e => setNovoObjetivo({ ...novoObjetivo, prazo: e.target.value })}
              className="border rounded px-3 py-2"
              required
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-3 bg-blue-600 text-white rounded px-4 py-2 mt-2 hover:bg-blue-700"
            >
              Guardar Objetivo
            </button>
          </form>
        </div>
        {/* Lista de Objetivos */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Objetivos Atuais</h3>
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
                      <p className="text-sm text-gray-500 mt-1">
                        Prazo: {new Date(objetivo.prazo).toLocaleDateString('pt-BR')}
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
                      <div className="mt-2">
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={objetivo.progresso}
                          onChange={(e) => atualizarProgresso(objetivo.id, parseInt(e.target.value))}
                          className="w-full"
                        />
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