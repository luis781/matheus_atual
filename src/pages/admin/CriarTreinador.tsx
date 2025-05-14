import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CriarTreinador() {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    if (!nome || !especialidade || !email || !password) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    // Aqui podes chamar uma API para criar o treinador, ou guardar localmente
    const novoTreinador = { nome, especialidade, email, password };
    console.log('Treinador criado:', novoTreinador);
    setSuccess(true);
    setTimeout(() => {
      navigate('/admin/treinadores');
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Novo Treinador</h1>
        <p className="text-sm text-gray-500 mb-6">
          Preenche os dados do novo treinador e cria o login dele.
        </p>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">Treinador criado com sucesso!</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome <span className="text-red-500">*</span>
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              placeholder="Nome do treinador"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="especialidade" className="block text-sm font-medium text-gray-700">
              Especialidade <span className="text-red-500">*</span>
            </label>
            <input
              id="especialidade"
              type="text"
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              required
              placeholder="Ex: Tático, Físico, Técnico"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email do treinador"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password para login"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Criar Treinador
          </button>
        </form>
        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={() => navigate('/admin/treinadores')}
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
} 