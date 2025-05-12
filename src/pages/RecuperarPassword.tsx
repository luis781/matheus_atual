import { useState } from 'react';
import { motion } from 'framer-motion';

export function RecuperarPassword() {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui podes adicionar a lógica para enviar o email de recuperação
    setEnviado(true);
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
            Recuperar Palavra-passe
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Introduz o teu email e enviaremos instruções para recuperares a tua palavra-passe.
          </p>
        </div>
        {enviado ? (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-center">
            Se o email existir na nossa base de dados, vais receber instruções para recuperar a tua palavra-passe.
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Enviar instruções
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
} 