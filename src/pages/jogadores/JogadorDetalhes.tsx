import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock de dados (substituir por fetch real depois)
const jogadores = [
  {
    id: '1',
    nome: 'João Silva',
    numero: 9,
    posicao: 'Atacante',
    idade: 18,
    ultimaAvaliacao: 8.5,
    descricao: 'Jogador rápido e habilidoso, destaque no ataque.',
    avatar: '',
    estatisticas: {
      golos: 12,
      assistencias: 7,
      jogos: 20,
      cartoesAmarelos: 2,
      cartoesVermelhos: 0
    },
    avaliacoes: [
      { data: '2024-06-01', valor: 8.5 },
      { data: '2024-05-20', valor: 8.2 },
      { data: '2024-05-10', valor: 7.9 }
    ],
    treinos: [
      { data: '2024-06-02', tema: 'Finalização' },
      { data: '2024-05-28', tema: 'Velocidade' }
    ]
  },
  {
    id: '2',
    nome: 'Pedro Santos',
    numero: 10,
    posicao: 'Meio-Campo',
    idade: 19,
    ultimaAvaliacao: 7.8,
    descricao: 'Meio-campista criativo, bom passe e visão de jogo.',
    avatar: '',
    estatisticas: {
      golos: 5,
      assistencias: 12,
      jogos: 22,
      cartoesAmarelos: 1,
      cartoesVermelhos: 0
    },
    avaliacoes: [
      { data: '2024-06-01', valor: 7.8 },
      { data: '2024-05-20', valor: 7.5 },
      { data: '2024-05-10', valor: 7.2 }
    ],
    treinos: [
      { data: '2024-06-02', tema: 'Passe' },
      { data: '2024-05-28', tema: 'Resistência' }
    ]
  },
  {
    id: '3',
    nome: 'Miguel Costa',
    numero: 4,
    posicao: 'Defesa',
    idade: 17,
    ultimaAvaliacao: 8.2,
    descricao: 'Defensor sólido, excelente posicionamento.',
    avatar: '',
    estatisticas: {
      golos: 2,
      assistencias: 3,
      jogos: 18,
      cartoesAmarelos: 3,
      cartoesVermelhos: 1
    },
    avaliacoes: [
      { data: '2024-06-01', valor: 8.2 },
      { data: '2024-05-20', valor: 8.0 },
      { data: '2024-05-10', valor: 7.7 }
    ],
    treinos: [
      { data: '2024-06-02', tema: 'Defesa' },
      { data: '2024-05-28', tema: 'Tática' }
    ]
  }
];

const JogadorDetalhes: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const jogador = jogadores.find(j => j.id === id);
  // Simular tipo de utilizador
  const isTreinador = true;

  if (!jogador) {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Jogador não encontrado</h2>
        <button onClick={() => navigate(-1)} className="text-blue-600 underline">Voltar</button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 max-w-3xl">
      <button onClick={() => navigate(-1)} className="text-blue-600 underline mb-4">&larr; Voltar</button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          {/* Avatar */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 text-3xl font-bold mr-6">
            {jogador.avatar ? (
              <img src={jogador.avatar} alt={jogador.nome} className="w-20 h-20 rounded-full object-cover" />
            ) : (
              jogador.nome.charAt(0)
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{jogador.nome}</h1>
            <p className="text-gray-600">Nº {jogador.numero} &bull; {jogador.posicao}</p>
            <p className="text-gray-500">Idade: {jogador.idade} anos</p>
          </div>
          {isTreinador && (
            <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Editar Jogador</button>
          )}
        </div>
        <div className="mb-4"><span className="font-semibold">Descrição:</span> {jogador.descricao}</div>
        {/* Estatísticas */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Estatísticas</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{jogador.estatisticas.golos}</div>
              <div className="text-gray-600 text-sm">Golos</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{jogador.estatisticas.assistencias}</div>
              <div className="text-gray-600 text-sm">Assistências</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{jogador.estatisticas.jogos}</div>
              <div className="text-gray-600 text-sm">Jogos</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{jogador.estatisticas.cartoesAmarelos}</div>
              <div className="text-gray-600 text-sm">Amarelos</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-center">
              <div className="text-lg font-bold">{jogador.estatisticas.cartoesVermelhos}</div>
              <div className="text-gray-600 text-sm">Vermelhos</div>
            </div>
          </div>
        </div>
        {/* Histórico de Avaliações */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Últimas Avaliações</h2>
          <ul>
            {jogador.avaliacoes.map((av, idx) => (
              <li key={idx} className="flex justify-between border-b py-1 text-gray-700">
                <span>{new Date(av.data).toLocaleDateString('pt-PT')}</span>
                <span className="font-bold">{av.valor}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Treinos */}
        <div className="mb-2">
          <h2 className="text-xl font-semibold mb-2">Participação em Treinos</h2>
          <ul>
            {jogador.treinos.map((treino, idx) => (
              <li key={idx} className="flex justify-between border-b py-1 text-gray-700">
                <span>{new Date(treino.data).toLocaleDateString('pt-PT')}</span>
                <span>{treino.tema}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JogadorDetalhes; 