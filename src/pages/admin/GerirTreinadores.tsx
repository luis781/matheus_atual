import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Treinador {
  id: number;
  nome: string;
  especialidade: string;
}

export default function GerirTreinadores() {
  const [treinadores, setTreinadores] = useState<Treinador[]>([
    { id: 1, nome: 'Pedro Santos', especialidade: 'Tático' },
    { id: 2, nome: 'Ana Costa', especialidade: 'Físico' },
  ]);

  const [editId, setEditId] = useState<number|null>(null);
  const [editNome, setEditNome] = useState('');
  const [editEspecialidade, setEditEspecialidade] = useState('');
  const [editError, setEditError] = useState('');
  const [lastActive, setLastActive] = useState<{[id:number]:string}>({});

  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('treinadores');
    if (stored) setTreinadores(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('treinadores', JSON.stringify(treinadores));
  }, [treinadores]);

  useEffect(() => {
    const stored = localStorage.getItem('treinadoresLastActive');
    if (stored) setLastActive(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('treinadoresLastActive', JSON.stringify(lastActive));
  }, [lastActive]);

  const handleAdicionar = () => {
    const nome = prompt('Nome do treinador:');
    const especialidade = prompt('Especialidade do treinador:');

    if (nome && especialidade) {
      setTreinadores([...treinadores, { id: treinadores.length + 1, nome, especialidade }]);
    }
  };

  const handleExcluir = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir este treinador?')) {
      setTreinadores(treinadores.filter((treinador) => treinador.id !== id));
    }
  };

  const handleEdit = (t: Treinador) => {
    setEditId(t.id);
    setEditNome(t.nome);
    setEditEspecialidade(t.especialidade);
    setEditError('');
  };

  const handleSave = (id: number) => {
    if (!editNome || !editEspecialidade) {
      setEditError('Preencha todos os campos!');
      return;
    }
    setTreinadores(treinadores.map(t => t.id === id ? { ...t, nome: editNome, especialidade: editEspecialidade } : t));
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  const handleSimularLogin = (id: number) => {
    const now = new Date().toLocaleString();
    setLastActive({ ...lastActive, [id]: now });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Gerir Treinadores</h1>
      <button
        onClick={() => navigate('/admin/treinadores/novo')}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        Novo Treinador
      </button>
      <ul className="bg-white shadow rounded-lg divide-y divide-gray-200">
        {treinadores.map((treinador) => (
          <li key={treinador.id} className="p-4 flex justify-between items-center">
            {editId === treinador.id ? (
              <form onSubmit={e => { e.preventDefault(); handleSave(treinador.id); }} className="w-full">
                <div className="mb-4">
                  <label className="block font-bold text-gray-900 mb-1">Nome</label>
                  <input value={editNome} onChange={e=>setEditNome(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-gray-900 mb-1">Especialidade</label>
                  <input value={editEspecialidade} onChange={e=>setEditEspecialidade(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
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
                  <p className="text-lg font-medium text-gray-900">{treinador.nome}</p>
                  <p className="text-sm text-gray-500">{treinador.especialidade}</p>
                  <p className="text-xs text-gray-400">Última atividade: {lastActive[treinador.id] || 'Nunca'}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>handleEdit(treinador)} className="text-blue-600 hover:text-blue-800 font-medium">Editar</button>
                  <button onClick={()=>handleSimularLogin(treinador.id)} className="text-gray-600 hover:text-gray-800 font-medium">Simular Login</button>
                  <button onClick={()=>handleExcluir(treinador.id)} className="text-red-600 hover:text-red-800 font-medium">Excluir</button>
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