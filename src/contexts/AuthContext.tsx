import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: number;
  email: string;
  nome: string;
  tipo: 'treinador' | 'jogador' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se já existe um usuário logado no localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simular uma verificação de login
    if (email && password) {
      // Determinar o tipo de usuário baseado no email
      let tipo: 'treinador' | 'jogador' | 'admin' = 'jogador';
      if (email.includes('treinador')) {
        tipo = 'treinador';
      } else if (email.includes('admin')) {
        tipo = 'admin';
      }

      // Usuário de exemplo
      const loggedUser = {
        id: 1,
        email: email,
        nome: tipo === 'treinador' ? 'Treinador' : tipo === 'admin' ? 'Administrador' : 'Jogador',
        tipo: tipo
      };

      // Salvar no localStorage
      localStorage.setItem('user', JSON.stringify(loggedUser));
      setUser(loggedUser);

      // Redirecionar para o dashboard
      navigate('/dashboard');
    } else {
      throw new Error('Email e senha são obrigatórios');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
} 