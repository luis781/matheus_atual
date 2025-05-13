import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExercicioForm } from './ExerciciosTreino';

export default function NovoExercicio() {
  const navigate = useNavigate();

  const handleSubmit = (novoExercicio: any) => {
    // Aqui você pode adicionar lógica para salvar o exercício no backend
    alert('Exercício criado com sucesso!');
    navigate('/treinos/exercicios');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-md relative">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Criar Novo Exercício</h1>
        <ExercicioForm onSubmit={handleSubmit} onCancel={() => navigate('/treinos/exercicios')} />
      </div>
    </div>
  );
} 