import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function AdicionarJogador() {
  const [nome, setNome] = useState('');
  const [posicao, setPosicao] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !posicao || !dataNascimento || !numero || !email || !password) {
      setMensagem('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    // Aqui podes adicionar a lógica para guardar o jogador e criar o login (API/backend)
    const novoJogador = { nome, posicao, dataNascimento, numero, email, password };
    console.log('Jogador criado:', novoJogador);
    setMensagem('Jogador criado com sucesso!');
    setTimeout(() => {
      navigate('/jogadores');
    }, 1000);
    setNome('');
    setPosicao('');
    setDataNascimento('');
    setNumero('');
    setEmail('');
    setPassword('');
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
            Criar Jogador
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Preenche os dados do novo jogador da tua equipa.
          </p>
        </div>
        {mensagem && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-center mb-4">
            {mensagem}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={nome}
              onChange={e => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="posicao" className="block text-sm font-medium text-gray-700 mb-1">
              Posição
            </label>
            <input
              id="posicao"
              name="posicao"
              type="text"
              required
              value={posicao}
              onChange={e => setPosicao(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Avançado, Defesa, Guarda-Redes"
            />
          </div>
          <div>
            <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700 mb-1">
              Data de Nascimento
            </label>
            <input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              required
              value={dataNascimento}
              onChange={e => setDataNascimento(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
              Número da Camisola
            </label>
            <input
              id="numero"
              name="numero"
              type="number"
              min="1"
              max="99"
              required
              value={numero}
              onChange={e => setNumero(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email do jogador"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password para login"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Criar Jogador
          </button>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
            >
              Voltar
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
} 