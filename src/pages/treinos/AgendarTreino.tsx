import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function AgendarTreino() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [duracao, setDuracao] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui podes adicionar a lógica para guardar o treino (API/backend)
    setMensagem('Treino agendado com sucesso!');
    setTimeout(() => {
      navigate('/treinos');
    }, 1000);
    setData('');
    setHora('');
    setDuracao('');
    setTipo('');
    setDescricao('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md"
      >
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-2">
            Agendar Treino
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Preenche os dados para agendar um novo treino.
          </p>
        </div>
        {mensagem && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-center mb-4">
            {mensagem}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
              Data
            </label>
            <input
              id="data"
              name="data"
              type="date"
              required
              value={data}
              onChange={e => setData(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mb-1">
              Hora
            </label>
            <input
              id="hora"
              name="hora"
              type="time"
              required
              value={hora}
              onChange={e => setHora(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="duracao" className="block text-sm font-medium text-gray-700 mb-1">
              Duração (minutos)
            </label>
            <input
              id="duracao"
              name="duracao"
              type="number"
              min="1"
              required
              value={duracao}
              onChange={e => setDuracao(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: 90"
            />
          </div>
          <div>
            <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Treino
            </label>
            <input
              id="tipo"
              name="tipo"
              type="text"
              required
              value={tipo}
              onChange={e => setTipo(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Técnico, Físico, Tático"
            />
          </div>
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              rows={3}
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Notas ou objetivos do treino"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Agendar Treino
          </button>
        </form>
      </motion.div>
    </div>
  );
} 