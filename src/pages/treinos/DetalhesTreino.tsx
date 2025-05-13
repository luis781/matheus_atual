import { useNavigate, useParams } from 'react-router-dom';

// Mock de treinos
const mockTreinos = [
  {
    id: '1',
    nome: 'Treino Técnico',
    data: '2024-03-20',
    hora: '18:00',
    duracao: '1h30',
    tipo: 'Técnico',
    presencas: 18,
    total: 24,
    jogadores: [
      'João Silva', 'Pedro Santos', 'Miguel Costa', 'Rui Alves', 'Carlos Pinto', 'André Lopes', 'Bruno Dias', 'Fábio Sousa', 'Tiago Ramos', 'Ricardo Lima', 'Diogo Martins', 'Gonçalo Rocha', 'Hugo Mendes', 'Paulo Nunes', 'Vítor Gomes', 'Alexandre Cruz', 'Eduardo Teixeira', 'Marco Silva'
    ],
    observacoes: 'Foco em finalização e posse de bola.'
  },
  {
    id: '2',
    nome: 'Treino Físico',
    data: '2024-03-22',
    hora: '18:00',
    duracao: '1h',
    tipo: 'Físico',
    presencas: 20,
    total: 24,
    jogadores: [
      'João Silva', 'Pedro Santos', 'Miguel Costa', 'Rui Alves', 'Carlos Pinto', 'André Lopes', 'Bruno Dias', 'Fábio Sousa', 'Tiago Ramos', 'Ricardo Lima', 'Diogo Martins', 'Gonçalo Rocha', 'Hugo Mendes', 'Paulo Nunes', 'Vítor Gomes', 'Alexandre Cruz', 'Eduardo Teixeira', 'Marco Silva', 'Nuno Freitas', 'Sérgio Moreira'
    ],
    observacoes: 'Circuito de resistência e velocidade.'
  }
];

export function DetalhesTreino() {
  const navigate = useNavigate();
  const { id } = useParams();
  const treino = mockTreinos.find(t => t.id === id) || mockTreinos[0];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{treino.nome}</h1>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
          <div className="text-gray-700">
            <span className="font-medium">Data:</span> {new Date(treino.data).toLocaleDateString('pt-PT')}
            <span className="ml-4 font-medium">Hora:</span> {treino.hora}
            <span className="ml-4 font-medium">Duração:</span> {treino.duracao}
          </div>
          <div className="text-gray-700">
            <span className="font-medium">Tipo:</span> {treino.tipo}
          </div>
        </div>
        <div className="mb-4">
          <span className="font-medium text-gray-700">Presenças confirmadas:</span> {treino.presencas} de {treino.total}
        </div>
        <div className="mb-6">
          <span className="font-medium text-gray-700">Jogadores confirmados:</span>
          <ul className="list-disc list-inside mt-2 text-gray-800 text-sm grid grid-cols-2 md:grid-cols-3 gap-x-4">
            {treino.jogadores.map(j => (
              <li key={j}>{j}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <span className="font-medium text-gray-700">Observações:</span>
          <div className="mt-1 text-gray-800 text-sm bg-gray-100 rounded p-3">
            {treino.observacoes}
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate('/treinos')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded transition border border-gray-200"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 