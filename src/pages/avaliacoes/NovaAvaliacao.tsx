import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const atributos = {
  ofensivo: [
    'Bolas paradas', 'Jogo aéreo', 'Remate', 'Drible', 'Passe de risco', 'Passe longo', 'Passe curto', 'Transição defensiva/ofensiva',
    'Velocidade de execução', 'Primeiro toque', 'Controlo de bola', 'Posicionamento', 'Leitura de jogo'
  ],
  defensivo: [
    'Bolas paradas', 'Transição ofensiva/defensiva', 'Jogo aéreo', 'Desarme', 'Antecipação', 'Marcação', 'Posicionamento', 'Leitura de jogo'
  ],
  fisico: [
    'Impulsão', 'Agilidade', 'Mudança de velocidade', 'Velocidade', 'Contacto físico', 'Força', 'Resistência'
  ],
  psicologico: [
    'Rigor', 'Ambição', 'Liderança', 'Controlo emocional', 'Atitude', 'Agressividade', 'Personalidade'
  ]
};

// Agrupamento dos atributos por grupo
const grupos = {
  tecnica: [
    'Remate', 'Passe curto', 'Primeiro toque', 'Controlo de bola', 'Drible', 'Passe de risco', 'Passe longo', 'Bolas paradas'
  ],
  tatica: [
    'Leitura de jogo', 'Posicionamento', 'Transição defensiva/ofensiva', 'Transição ofensiva/defensiva', 'Antecipação', 'Marcação'
  ],
  fisica: [
    'Velocidade de execução', 'Impulsão', 'Agilidade', 'Mudança de velocidade', 'Velocidade', 'Contacto físico', 'Força', 'Resistência', 'Jogo aéreo'
  ],
  mental: [
    'Rigor', 'Ambição', 'Liderança', 'Controlo emocional', 'Atitude', 'Agressividade', 'Personalidade'
  ]
};

function SliderAtributo({ label, value, onChange }: { label: string, value: number | null, onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <span className="text-gray-900 font-semibold mb-1 text-sm">{label} *</span>
      <div className="flex items-center w-full gap-2">
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={value ?? 0}
          onChange={e => onChange(Number(e.target.value))}
          className="flex-1 h-2 accent-blue-600 bg-gray-200 rounded-lg appearance-none"
          style={{ maxWidth: '100%' }}
        />
        <span
          className="w-10 text-center bg-gray-100 text-gray-900 rounded px-2 py-0.5 border border-gray-200 text-xs cursor-help"
          title="N/D significa 'Não Definido'"
        >
          {value !== null ? value : 'N/D'}
        </span>
      </div>
    </div>
  );
}

function calcularMedia(valores: { [key: string]: number | null }, atributos: string[]) {
  const nums = atributos.map(attr => valores[attr]).filter(v => v !== null) as number[];
  if (nums.length === 0) return 'N/D';
  return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
}

export function NovaAvaliacao() {
  const navigate = useNavigate();
  // Estado para todos os atributos
  const [valores, setValores] = useState<{ [key: string]: number | null }>(
    Object.fromEntries(
      Object.values(atributos).flat().map(attr => [attr, null])
    )
  );

  // Estado para os dados gerais
  const [dadosGerais, setDadosGerais] = useState({
    data: '',
    nome: '',
    numero: '',
    posicao: ''
  });

  type TabType = 'dados' | 'atributos';
  const [tab, setTab] = useState<TabType>('dados');

  const handleChange = (attr: string, val: number) => {
    setValores(v => ({ ...v, [attr]: val }));
  };

  const handleSalvar = () => {
    // Aqui podes guardar os dados (API/backend)
    alert('Avaliação criada com sucesso!');
    navigate('/avaliacoes');
  };

  // Cálculo das médias
  const mediaTecnica = calcularMedia(valores, grupos.tecnica);
  const mediaTatica = calcularMedia(valores, grupos.tatica);
  const mediaFisica = calcularMedia(valores, grupos.fisica);
  const mediaMental = calcularMedia(valores, grupos.mental);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2">
      {tab === 'dados' && (
        <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8 lg:p-12 px-2 md:px-8 lg:px-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Nova Avaliação</h1>
          <div className="flex border-b border-gray-200 mb-8 justify-center">
            <button
              className={`px-4 py-2 font-semibold text-sm focus:outline-none ${tab === ('dados' as TabType) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
              onClick={() => setTab('dados')}
            >
              DADOS GERAIS
            </button>
            <button
              className={`px-4 py-2 font-semibold text-sm focus:outline-none ml-2 ${tab === ('atributos' as TabType) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
              onClick={() => setTab('atributos')}
            >
              ATRIBUTOS
            </button>
          </div>

          <form className="grid grid-cols-1 gap-y-4">
            <div className="col-span-1">
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="data">Data *</label>
              <input id="data" type="date" value={dadosGerais.data} onChange={e => setDadosGerais(d => ({ ...d, data: e.target.value }))}
                className="w-full bg-gray-100 text-gray-900 border border-gray-200 rounded px-3 py-2 mb-4 focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="nome">Nome do Jogador *</label>
              <input id="nome" type="text" value={dadosGerais.nome} onChange={e => setDadosGerais(d => ({ ...d, nome: e.target.value }))}
                className="w-full bg-gray-100 text-gray-900 border border-gray-200 rounded px-3 py-2 mb-4 focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="numero">Número da Camisola *</label>
              <input id="numero" type="number" value={dadosGerais.numero} onChange={e => setDadosGerais(d => ({ ...d, numero: e.target.value }))}
                className="w-full bg-gray-100 text-gray-900 border border-gray-200 rounded px-3 py-2 mb-4 focus:outline-none" />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-900 font-semibold mb-1" htmlFor="posicao">Posição *</label>
              <input id="posicao" type="text" value={dadosGerais.posicao} onChange={e => setDadosGerais(d => ({ ...d, posicao: e.target.value }))}
                className="w-full bg-gray-100 text-gray-900 border border-gray-200 rounded px-3 py-2 mb-4 focus:outline-none" />
            </div>
          </form>
          {/* Botões */}
          <div className="flex gap-4 justify-end mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded transition border border-gray-200"
            >
              Voltar
            </button>
            <button
              onClick={handleSalvar}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
            >
              Salvar
            </button>
          </div>
        </div>
      )}

      {tab === 'atributos' && (
        <div className="max-w-7xl w-full mx-auto bg-white rounded-xl shadow-lg p-4 md:p-8 lg:p-12 px-2 md:px-8 lg:px-16">
          {/* Médias dos grupos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-gray-500 font-medium mb-1">Técnica</div>
              <div className="text-2xl font-bold text-gray-900">{mediaTecnica}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-gray-500 font-medium mb-1">Tática</div>
              <div className="text-2xl font-bold text-gray-900">{mediaTatica}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-gray-500 font-medium mb-1">Física</div>
              <div className="text-2xl font-bold text-gray-900">{mediaFisica}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-gray-500 font-medium mb-1">Mental</div>
              <div className="text-2xl font-bold text-gray-900">{mediaMental}</div>
            </div>
          </div>
          <p className="text-center text-gray-500 mb-8 text-sm">N/D significa "Não Definido". Arraste o slider para definir o valor do atributo.</p>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Ofensivo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {atributos.ofensivo.map(attr => (
                <SliderAtributo
                  key={attr}
                  label={attr}
                  value={valores[attr]}
                  onChange={val => handleChange(attr, val)}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Defensivo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {atributos.defensivo.map(attr => (
                <SliderAtributo
                  key={attr}
                  label={attr}
                  value={valores[attr]}
                  onChange={val => handleChange(attr, val)}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Físico</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {atributos.fisico.map(attr => (
                <SliderAtributo
                  key={attr}
                  label={attr}
                  value={valores[attr]}
                  onChange={val => handleChange(attr, val)}
                />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Psicológico</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {atributos.psicologico.map(attr => (
                <SliderAtributo
                  key={attr}
                  label={attr}
                  value={valores[attr]}
                  onChange={val => handleChange(attr, val)}
                />
              ))}
            </div>
          </div>
          {/* Botões */}
          <div className="flex gap-4 justify-end mt-8">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded transition border border-gray-200"
            >
              Voltar
            </button>
            <button
              onClick={handleSalvar}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 