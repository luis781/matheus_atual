import { Navbar } from "./components/Navbar";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registar } from './pages/Registar';
import { Sobre } from './pages/Sobre';
import { Dashboard } from './pages/dashboard/Dashboard';
import { JogadorDashboard } from './pages/dashboard/JogadorDashboard';
import { ListaJogadores } from './pages/jogadores/ListaJogadores';
import { Treinos } from './pages/treinos/Treinos';
import { ExerciciosTreino } from './pages/treinos/ExerciciosTreino';
import { Avaliacoes } from './pages/avaliacoes/Avaliacoes';
import { Subscreva } from './pages/Subscreva';
import { RecuperarPassword } from './pages/RecuperarPassword';
import { AdicionarJogador } from './pages/jogadores/AdicionarJogador';
import { AgendarTreino } from './pages/treinos/AgendarTreino';
import { NovaAvaliacao } from './pages/avaliacoes/NovaAvaliacao';
import { Desempenho } from './pages/Desempenho';
import { EditarAvaliacao } from './pages/avaliacoes/EditarAvaliacao';
import { DetalhesTreino } from './pages/treinos/DetalhesTreino';
import { TreinadorDashboard } from './pages/dashboard/TreinadorDashboard';
import ObjetivosJogador from './pages/jogadores/ObjetivosJogador';
import NovoExercicio from './pages/treinos/NovoExercicio';
import CalendarioJogos from './pages/calendario/CalendarioJogos';
import ConfirmarPresenca from './pages/treinos/ConfirmarPresenca';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './style.css';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function AppContent() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registar" element={<Registar />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {user?.tipo === 'treinador' ? (
                <TreinadorDashboard />
              ) : user?.tipo === 'jogador' ? (
                <JogadorDashboard />
              ) : (
                <Dashboard />
              )}
            </PrivateRoute>
          }
        />
        <Route
          path="/jogadores"
          element={
            <PrivateRoute>
              <ListaJogadores />
            </PrivateRoute>
          }
        />
        <Route
          path="/jogadores/novo"
          element={
            <PrivateRoute>
              <AdicionarJogador />
            </PrivateRoute>
          }
        />
        <Route
          path="/treinos"
          element={
            <PrivateRoute>
              <Treinos />
            </PrivateRoute>
          }
        />
        <Route
          path="/treinos/exercicios"
          element={
            <PrivateRoute>
              <ExerciciosTreino />
            </PrivateRoute>
          }
        />
        <Route
          path="/treinos/novo"
          element={
            <PrivateRoute>
              <AgendarTreino />
            </PrivateRoute>
          }
        />
        <Route
          path="/treinos/:id"
          element={
            <PrivateRoute>
              <DetalhesTreino />
            </PrivateRoute>
          }
        />
        <Route
          path="/avaliacoes"
          element={
            <PrivateRoute>
              <Avaliacoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/avaliacoes/nova"
          element={
            <PrivateRoute>
              <NovaAvaliacao />
            </PrivateRoute>
          }
        />
        <Route path="/avaliacoes/:id" element={<EditarAvaliacao />} />
        <Route path="/subscreva" element={<Subscreva />} />
        <Route path="/recuperar-password" element={<RecuperarPassword />} />
        <Route
          path="/desempenho"
          element={
            <PrivateRoute>
              <Desempenho />
            </PrivateRoute>
          }
        />
        <Route
          path="/objetivos"
          element={
            <PrivateRoute>
              <ObjetivosJogador />
            </PrivateRoute>
          }
        />
        <Route
          path="/treinos/exercicios/novo"
          element={
            <PrivateRoute>
              <NovoExercicio />
            </PrivateRoute>
          }
        />
        <Route
          path="/calendario"
          element={
            <PrivateRoute>
              <CalendarioJogos />
            </PrivateRoute>
          }
        />
        <Route
          path="/treinos/confirmar"
          element={
            <PrivateRoute>
              <ConfirmarPresenca />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}
