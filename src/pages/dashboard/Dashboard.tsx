import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { JogadorDashboard } from './JogadorDashboard';
import { TreinadorDashboard } from './TreinadorDashboard';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardCard {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  link: string;
  color: string;
}

export function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    // Se não houver user, podes redirecionar para login ou mostrar loading
    return null;
  }

  if (user.tipo === 'jogador') {
    return <JogadorDashboard />;
  }

  if (user.tipo === 'treinador') {
    return <TreinadorDashboard />;
  }

  // Se o tipo não for reconhecido, podes redirecionar ou mostrar erro
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
} 