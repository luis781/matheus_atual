import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Jogo {
  id: number;
  data: string;
  hora: string;
  adversario: string;
  local: string;
  observacoes: string;
}

export default function GerenciarCalendario() {
  const [jogos, setJogos] = useState<Jogo[]>([
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
      observacoes: '',
    },
  ]);
  const navigate = useNavigate();

  const handleAdicionar = () => {
    const data = prompt('Data do jogo (YYYY-MM-DD):');
    const hora = prompt('Hora do jogo (HH:MM):');
    const adversario = prompt('Adversário:');
    const local = prompt('Local:');
    const observacoes = prompt('Observações (opcional):');

    if (data && hora && adversario && local) {
      setJogos([
        ...jogos,
        {
          id: jogos.length + 1,
          data,
          hora,
          adversario,
          local,
          observacoes: observacoes || '',
        },
      ]);
    }
  };

  const handleExcluir = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este jogo?')) {
      setJogos(jogos.filter((jogo) => jogo.id !== id));
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 p-8">
      <button
        onClick={() => navigate('/admin/jogos/novo')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Adicionar Jogo
      </button>
      <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {jogos.map((jogo) => (
          <li key={jogo.id} className="p-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-medium text-gray-900">
                {jogo.data} - {jogo.hora}
              </p>
              <p className="text-sm text-gray-500">
                Adversário: {jogo.adversario} | Local: {jogo.local}
              </p>
              {jogo.observacoes && (
                <p className="text-sm text-gray-400">Observações: {jogo.observacoes}</p>
              )}
            </div>
            <button
              onClick={() => handleExcluir(jogo.id)}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={() => navigate('/admin')}
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}