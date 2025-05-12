import { motion } from 'framer-motion';
import { useState } from 'react';

export function Subscreva() {
    const [selectedPlan, setSelectedPlan] = useState<string>('mensal');

    const plans = [
        {
            id: 'mensal',
            nome: 'Plano Mensal',
            preco: '29,99€',
            periodo: 'mês',
            caracteristicas: [
                'Acesso a todos os treinos',
                'Análise de desempenho básica',
                'Suporte por email',
                'Atualizações mensais'
            ]
        },
        {
            id: 'trimestral',
            nome: 'Plano Trimestral',
            preco: '79,99€',
            periodo: 'trimestre',
            caracteristicas: [
                'Todas as características do plano mensal',
                'Análise de desempenho avançada',
                'Suporte prioritário',
                'Atualizações semanais',
                '10% de desconto'
            ]
        },
        {
            id: 'anual',
            nome: 'Plano Anual',
            preco: '249,99€',
            periodo: 'ano',
            caracteristicas: [
                'Todas as características do plano trimestral',
                'Análise de desempenho premium',
                'Suporte 24/7',
                'Atualizações em tempo real',
                '25% de desconto',
                'Sessão de consultoria gratuita'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                        Subscreva Agora
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Escolha o plano ideal para o seu desenvolvimento no futebol
                    </p>
                </motion.div>

                {/* Planos de Subscrição */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {plans.map((plan) => (
                        <div 
                            key={plan.id}
                            className={`bg-white rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-300 ${
                                selectedPlan === plan.id ? 'ring-2 ring-blue-500 transform scale-105' : ''
                            }`}
                            onClick={() => setSelectedPlan(plan.id)}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.nome}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">{plan.preco}</span>
                                <span className="text-gray-600">/{plan.periodo}</span>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {plan.caracteristicas.map((caracteristica, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {caracteristica}
                                    </li>
                                ))}
                            </ul>
                            <button 
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                                    selectedPlan === plan.id 
                                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                            >
                                Selecionar Plano
                            </button>
                        </div>
                    ))}
                </motion.div>

                {/* Formulário de Subscrição */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete a sua Subscrição</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    id="nome"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Palavra-passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                Confirmar Palavra-passe
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                Li e aceito os <a href="#" className="text-blue-600 hover:text-blue-500">Termos e Condições</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                        >
                            Subscrever Agora
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
} 