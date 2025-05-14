import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock de próximo treino (podes depois substituir por dados reais)
const proximoTreino = {
  data: '2024-03-25',
  hora: '18:00',
  tipo: 'Técnico',
  local: 'Estádio Municipal',
};

export default function ConfirmarPresenca() {
  const navigate = useNavigate();
  const [confirmado, setConfirmado] = useState(false);

  const handleConfirmar = () => {
    setConfirmado(true);
    // Aqui podes adicionar lógica para guardar a confirmação (API/backend)
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center relative">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Confirmar Presença</h1>
        <div className="mb-6 text-gray-700">
          <p className="font-semibold mb-2">Próximo Treino:</p>
          <div className="bg-blue-50 rounded p-4 mb-4">
            <p><span className="font-medium">Data:</span> {new Date(proximoTreino.data).toLocaleDateString('pt-PT')}</p>
            <p><span className="font-medium">Hora:</span> {proximoTreino.hora}</p>
            <p><span className="font-medium">Tipo:</span> {proximoTreino.tipo}</p>
            <p><span className="font-medium">Local:</span> {proximoTreino.local}</p>
          </div>
        </div>
        {!confirmado ? (
          <>
            <button
              onClick={handleConfirmar}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition mb-4 w-full"
            >
              Confirmar Presença
            </button>
            <p className="text-sm text-gray-500 mb-4">Por favor, confirma a tua presença para ajudar na organização do treino.</p>
          </>
        ) : (
          <div className="mb-4">
            <p className="text-green-700 font-semibold text-lg mb-2">Presença confirmada com sucesso!</p>
            <p className="text-gray-600 text-sm">Obrigado pela confirmação. Até ao treino!</p>
          </div>
        )}
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded transition absolute bottom-4 right-4"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}