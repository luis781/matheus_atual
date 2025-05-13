import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Exercicio {
  id: number;
  nome: string;
  categoria: string;
  duracao: string;
  intensidade: string;
  objetivos: string[];
  descricao: string;
  material?: string[];
  observacoes?: string;
  videoUrl?: string;
}

interface ExercicioFormProps {
  exercicio?: Exercicio;
  onSubmit: (exercicio: Omit<Exercicio, 'id'>) => void;
  onCancel: () => void;
}

function ExercicioForm({ exercicio, onSubmit, onCancel }: ExercicioFormProps) {
  const [formData, setFormData] = useState<Omit<Exercicio, 'id'>>(
    exercicio || {
      nome: '',
      categoria: '',
      duracao: '',
      intensidade: '',
      objetivos: [],
      descricao: '',
      material: [],
      observacoes: '',
      videoUrl: '',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleObjetivoChange = (objetivo: string) => {
    const objetivos = formData.objetivos.includes(objetivo)
      ? formData.objetivos.filter((o) => o !== objetivo)
      : [...formData.objetivos, objetivo];
    setFormData({ ...formData, objetivos });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
          Nome do Exercício
        </label>
        <input
          type="text"
          id="nome"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
          Categoria
        </label>
        <select
          id="categoria"
          value={formData.categoria}
          onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Selecione uma categoria</option>
          <option value="Técnico">Técnico</option>
          <option value="Tático">Tático</option>
          <option value="Técnico-Tático">Técnico-Tático</option>
          <option value="Físico">Físico</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="duracao" className="block text-sm font-medium text-gray-700">
            Duração
          </label>
          <input
            type="text"
            id="duracao"
            value={formData.duracao}
            onChange={(e) => setFormData({ ...formData, duracao: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="intensidade" className="block text-sm font-medium text-gray-700">
            Intensidade
          </label>
          <select
            id="intensidade"
            value={formData.intensidade}
            onChange={(e) => setFormData({ ...formData, intensidade: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">Selecione a intensidade</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Objetivos</label>
        <div className="mt-2 space-y-2">
          {['Passe', 'Drible', 'Finalização', 'Posicionamento', 'Pressão', 'Transição', 'Velocidade', 'Resistência'].map((objetivo) => (
            <label key={objetivo} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                checked={formData.objetivos.includes(objetivo)}
                onChange={() => handleObjetivoChange(objetivo)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{objetivo}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          id="descricao"
          value={formData.descricao}
          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="material" className="block text-sm font-medium text-gray-700">
          Material Necessário
        </label>
        <input
          type="text"
          id="material"
          value={formData.material?.join(', ')}
          onChange={(e) => setFormData({ ...formData, material: e.target.value.split(',').map(m => m.trim()) })}
          placeholder="Separados por vírgula"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
          URL do Vídeo (opcional)
        </label>
        <input
          type="url"
          id="videoUrl"
          value={formData.videoUrl}
          onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
          Observações
        </label>
        <textarea
          id="observacoes"
          value={formData.observacoes}
          onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          {exercicio ? 'Salvar Alterações' : 'Criar Exercício'}
        </button>
      </div>
    </form>
  );
}

export function ExerciciosTreino() {
  const navigate = useNavigate();
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    {
      id: 1,
      nome: "Posse de Bola 4x4",
      categoria: "Técnico-Tático",
      duracao: "15 min",
      intensidade: "Média",
      objetivos: ["Passe", "Movimentação", "Pressão"],
      descricao: "Exercício de posse de bola em espaço reduzido com 4 jogadores de cada equipe.",
      material: ["Cones", "Bolas", "Coletes"],
      observacoes: "Adaptar o espaço conforme o número de jogadores",
      videoUrl: "https://example.com/video1"
    },
    {
      id: 2,
      nome: "Finalização após Drible",
      categoria: "Técnico",
      duracao: "20 min",
      intensidade: "Alta",
      objetivos: ["Drible", "Finalização", "Velocidade"],
      descricao: "Exercício de finalização após ultrapassar obstáculos com bola dominada.",
      material: ["Cones", "Bolas", "Gols"],
      observacoes: "Focar na qualidade do drible antes da finalização"
    },
    {
      id: 3,
      nome: "Jogo Reduzido 7x7",
      categoria: "Tático",
      duracao: "25 min",
      intensidade: "Alta",
      objetivos: ["Posicionamento", "Transição", "Finalização"],
      descricao: "Jogo em campo reduzido com regras específicas para trabalhar transições.",
      material: ["Bolas", "Coletes", "Gols"],
      observacoes: "Manter o jogo fluido, poucas interrupções"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [exercicioEditando, setExercicioEditando] = useState<Exercicio | undefined>();
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [busca, setBusca] = useState("");

  const categorias = ["Todos", "Técnico", "Tático", "Técnico-Tático", "Físico"];

  const handleSubmit = (novoExercicio: Omit<Exercicio, 'id'>) => {
    if (exercicioEditando) {
      setExercicios(exercicios.map(e => 
        e.id === exercicioEditando.id ? { ...novoExercicio, id: e.id } : e
      ));
    } else {
      setExercicios([...exercicios, { ...novoExercicio, id: Math.max(...exercicios.map(e => e.id)) + 1 }]);
    }
    setShowForm(false);
    setExercicioEditando(undefined);
  };

  const handleEdit = (exercicio: Exercicio) => {
    setExercicioEditando(exercicio);
    setShowForm(true);
  };

  const exerciciosFiltrados = exercicios.filter(exercicio => {
    const matchCategoria = categoriaAtiva === "Todos" || exercicio.categoria === categoriaAtiva;
    const matchBusca = exercicio.nome.toLowerCase().includes(busca.toLowerCase()) ||
                      exercicio.descricao.toLowerCase().includes(busca.toLowerCase()) ||
                      exercicio.objetivos.some(o => o.toLowerCase().includes(busca.toLowerCase()));
    return matchCategoria && matchBusca;
  });

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

        {showForm ? (
          <div className="bg-white shadow sm:rounded-lg p-6 mb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              {exercicioEditando ? 'Editar Exercício' : 'Novo Exercício'}
            </h2>
            <ExercicioForm
              exercicio={exercicioEditando}
              onSubmit={handleSubmit}
              onCancel={() => {
                setShowForm(false);
                setExercicioEditando(undefined);
              }}
            />
          </div>
        ) : (
          <>
            {/* Filtros e Busca */}
            <div className="mb-6 space-y-4">
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
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar exercícios..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Lista de Exercícios */}
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {exerciciosFiltrados.map((exercicio) => (
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
                          {exercicio.material && exercicio.material.length > 0 && (
                            <div className="mt-2">
                              <span className="text-sm font-medium text-gray-700">Material: </span>
                              <span className="text-sm text-gray-500">{exercicio.material.join(', ')}</span>
                            </div>
                          )}
                          {exercicio.videoUrl && (
                            <div className="mt-2">
                              <a
                                href={exercicio.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:text-blue-500"
                              >
                                Ver vídeo do exercício
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="ml-4 flex-shrink-0 space-x-2">
                          <button
                            onClick={() => handleEdit(exercicio)}
                            className="font-medium text-blue-600 hover:text-blue-500"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm('Tem certeza que deseja excluir este exercício?')) {
                                setExercicios(exercicios.filter(e => e.id !== exercicio.id));
                              }
                            }}
                            className="font-medium text-red-600 hover:text-red-500"
                          >
                            Excluir
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
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

export { ExercicioForm }; 