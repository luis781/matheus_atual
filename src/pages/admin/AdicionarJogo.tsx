import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdicionarJogo() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [adversario, setAdversario] = useState('');
  const [local, setLocal] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validação dos campos
    if (!data || !hora || !adversario || !local) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Lógica para salvar o jogo (API ou estado local)
    const novoJogo = { data, hora, adversario, local, observacoes };
    console.log('Jogo Adicionado:', novoJogo);

    // Simular envio bem-sucedido
    setSuccess(true);

    // Redirecionar para a página de lista de jogos ou calendário
    setTimeout(() => {
      navigate('/admin/calendario'); // Substitua pela rota desejada
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Adicionar Jogo</h1>
        <p className="text-sm text-gray-500 mb-6">
          Preenche os dados do novo jogo para o calendário.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">Jogo adicionado com sucesso!</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-700">
              Data <span className="text-red-500">*</span>
            </label>
            <input
              id="data"
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
              Hora <span className="text-red-500">*</span>
            </label>
            <input
              id="hora"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="adversario" className="block text-sm font-medium text-gray-700">
              Adversário <span className="text-red-500">*</span>
            </label>
            <input
              id="adversario"
              type="text"
              value={adversario}
              onChange={(e) => setAdversario(e.target.value)}
              required
              placeholder="Nome do adversário"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="local" className="block text-sm font-medium text-gray-700">
              Local <span className="text-red-500">*</span>
            </label>
            <input
              id="local"
              type="text"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              required
              placeholder="Local do jogo"
            />
          </div>
          <div>
            <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
              Observações
            </label>
            <textarea
              id="observacoes"
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Observações adicionais (opcional)"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Adicionar Jogo
          </button>
        </form>
        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={() => navigate('/admin/calendario')}
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}