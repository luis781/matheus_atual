import { motion } from 'framer-motion';

export function Desempenho() {
  // Aqui podes buscar dados reais do backend ou usar dados mock
  const estatisticas = [
    { label: 'Jogos', valor: 24 },
    { label: 'Golos', valor: 12 },
    { label: 'Assistências', valor: 8 },
    { label: 'Minutos Jogados', valor: 1800 },
    { label: 'Cartões Amarelos', valor: 3 },
    { label: 'Cartões Vermelhos', valor: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 text-center">Desempenho</h1>
        <p className="text-center text-gray-500 mb-10">
          Consulta as tuas estatísticas e evolução ao longo da época.
        </p>

        {/* Estatísticas principais */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {estatisticas.map((item) => (
            <div key={item.label} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-600 mb-1">{item.valor}</span>
              <span className="text-gray-700 text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Gráfico de evolução (placeholder) */}
        <div className="bg-white rounded-lg shadow p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Evolução ao Longo do Tempo</h2>
          <div className="flex items-center justify-center h-48 text-gray-400">
            {/* Aqui podes integrar um gráfico real (ex: Chart.js, Recharts, etc) */}
            <span>Gráfico de evolução (placeholder)</span>
          </div>
        </div>

        {/* Resumo de avaliações (placeholder) */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Resumo das Avaliações</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex-1 text-center">
              <span className="block text-2xl font-bold text-green-600 mb-1">7.8</span>
              <span className="text-gray-700 text-sm">Média Geral</span>
            </div>
            <div className="flex-1 text-center">
              <span className="block text-2xl font-bold text-blue-600 mb-1">8.2</span>
              <span className="text-gray-700 text-sm">Técnica</span>
            </div>
            <div className="flex-1 text-center">
              <span className="block text-2xl font-bold text-yellow-600 mb-1">7.5</span>
              <span className="text-gray-700 text-sm">Tática</span>
            </div>
            <div className="flex-1 text-center">
              <span className="block text-2xl font-bold text-red-600 mb-1">7.0</span>
              <span className="text-gray-700 text-sm">Física</span>
            </div>
            <div className="flex-1 text-center">
              <span className="block text-2xl font-bold text-purple-600 mb-1">8.0</span>
              <span className="text-gray-700 text-sm">Mental</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 