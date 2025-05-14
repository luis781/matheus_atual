import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Jogador {
  id: number;
  nome: string;
  posicao: string;
  idade: number;
}

export default function GerirJogadores() {
  const [jogadores, setJogadores] = useState<Jogador[]>([
    { id: 1, nome: 'João Silva', posicao: 'Atacante', idade: 25 },
    { id: 2, nome: 'Carlos Mendes', posicao: 'Meio-Campo', idade: 28 },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('jogadores');
    if (stored) setJogadores(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('jogadores', JSON.stringify(jogadores));
  }, [jogadores]);

  const [editId, setEditId] = useState<number|null>(null);
  const [editNome, setEditNome] = useState('');
  const [editPosicao, setEditPosicao] = useState('');
  const [editIdade, setEditIdade] = useState('');
  const [lastActive, setLastActive] = useState<{[id:number]:string}>({});
  const [showModal, setShowModal] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [editError, setEditError] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('jogadoresLastActive');
    if (stored) setLastActive(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('jogadoresLastActive', JSON.stringify(lastActive));
  }, [lastActive]);

  useEffect(() => {
    if (showModal && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [showModal]);

  const handleAdicionar = () => {
    const nome = prompt('Nome do jogador:');
    const posicao = prompt('Posição do jogador:');
    const idade = parseInt(prompt('Idade do jogador:') || '0', 10);

    if (nome && posicao && idade) {
      setJogadores([...jogadores, { id: jogadores.length + 1, nome, posicao, idade }]);
    }
  };

  const handleExcluir = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este jogador?')) {
      setJogadores(jogadores.filter((jogador) => jogador.id !== id));
    }
  };

  const handleEdit = (j: Jogador) => {
    setEditId(j.id);
    setEditNome(j.nome);
    setEditPosicao(j.posicao);
    setEditIdade(j.idade.toString());
    setEditError('');
    setShowModal(true);
  };

  const handleSave = (id: number) => {
    if (!editNome || !editPosicao || !editIdade) {
      setEditError('Preencha todos os campos!');
      return;
    }
    setJogadores(jogadores.map(j => j.id === id ? { ...j, nome: editNome, posicao: editPosicao, idade: parseInt(editIdade) } : j));
    setEditId(null);
    setShowModal(false);
  };

  const handleCancel = () => {
    setEditId(null);
    setShowModal(false);
  };

  const handleActivity = (id: number) => {
    const now = new Date().toLocaleString();
    setLastActive({ ...lastActive, [id]: now });
  };

  // Função para simular login/atividade real
  const handleSimularLogin = (id: number) => {
    const now = new Date().toLocaleString();
    setLastActive({ ...lastActive, [id]: now });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Gerir Jogadores</h1>
      <button
        onClick={() => navigate('/admin/jogadores/novo')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Novo Jogador
      </button>
      <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {jogadores.map((jogador) => (
          <li key={jogador.id} className="p-4 flex justify-between items-center">
            {editId === jogador.id ? (
              <form onSubmit={e => { e.preventDefault(); handleSave(jogador.id); }} className="w-full">
                <div className="mb-4">
                  <label className="block font-bold text-gray-900 mb-1">Nome</label>
                  <input value={editNome} onChange={e=>setEditNome(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-gray-900 mb-1">Posição</label>
                  <input value={editPosicao} onChange={e=>setEditPosicao(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-gray-900 mb-1">Idade</label>
                  <input value={editIdade} onChange={e=>setEditIdade(e.target.value)} type="number" className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                {editError && <p className="text-red-500 text-sm mb-2">{editError}</p>}
                <div className="flex justify-end gap-2 mt-6">
                  <button type="button" onClick={handleCancel} className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded">Cancelar</button>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Guardar</button>
                </div>
              </form>
            ) : (
              <>
                <div>
                  <p className="text-lg font-medium text-gray-900">{jogador.nome}</p>
                  <p className="text-sm text-gray-500">{jogador.posicao} - {jogador.idade} anos</p>
                  <p className="text-xs text-gray-400">Última atividade: {lastActive[jogador.id] || 'Nunca'}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>handleEdit(jogador)} className="text-blue-600 hover:text-blue-800 font-medium">Editar</button>
                  <button onClick={()=>handleSimularLogin(jogador.id)} className="text-gray-600 hover:text-gray-800 font-medium">Simular Login</button>
                  <button onClick={()=>handleExcluir(jogador.id)} className="text-red-600 hover:text-red-800 font-medium">Excluir</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-8">
        <button
          type="button"
          onClick={() => window.location.href = '/admin'}
          className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}