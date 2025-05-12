import { motion } from 'framer-motion';

export function Sobre() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Seção Principal */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                        Sobre Nós
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Revolucionando o treino de futebol com tecnologia de ponta
                    </p>
                </motion.div>

                {/* Seção da Missão */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-lg shadow-lg p-8 mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
                    <p className="text-lg text-gray-600">
                        O Futecoach surgiu da paixão pelo futebol e da necessidade de modernizar os métodos de treino. 
                        Nossa plataforma foi desenvolvida para conectar treinadores, jogadores e clubes, oferecendo 
                        ferramentas inovadoras que transformam a maneira como o futebol é treinado e desenvolvido. 
                        Acreditamos que a tecnologia pode e deve ser uma aliada fundamental no desenvolvimento 
                        desportivo, e é isso que nos motiva todos os dias.
                    </p>
                </motion.div>

                {/* Seção de Valores */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                >
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Inovação</h3>
                        <p className="text-gray-600">
                            Estamos sempre à procura de novas soluções e tecnologias para melhorar o desenvolvimento 
                            do futebol, mantendo-nos na vanguarda das tendências tecnológicas.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Excelência</h3>
                        <p className="text-gray-600">
                            Comprometidos com a qualidade em tudo o que fazemos, desde o desenvolvimento da plataforma 
                            até ao suporte aos nossos utilizadores.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidade</h3>
                        <p className="text-gray-600">
                            Construímos e fortalecemos uma comunidade unida no mundo do futebol, promovendo a 
                            colaboração e o crescimento conjunto.
                        </p>
                    </div>
                </motion.div>

                {/* Seção da Equipa */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white rounded-lg shadow-lg p-8"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Equipa</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Somos uma equipa multidisciplinar apaixonada por futebol e tecnologia. Unimos conhecimentos 
                        em desenvolvimento de software, análise de dados e profundo conhecimento do desporto para 
                        criar a melhor plataforma de treino de futebol.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">João Silva</h3>
                            <p className="text-gray-600 mb-2">Fundador & CEO</p>
                            <p className="text-gray-600">
                                Ex-treinador profissional com mais de 15 anos de experiência no futebol.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Santos</h3>
                            <p className="text-gray-600 mb-2">CTO</p>
                            <p className="text-gray-600">
                                Especialista em desenvolvimento de software e análise de dados desportivos.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Pedro Costa</h3>
                            <p className="text-gray-600 mb-2">Diretor de Treino</p>
                            <p className="text-gray-600">
                                Licenciado em Ciências do Desporto com especialização em metodologia de treino.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Seção de Contacto */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-white rounded-lg shadow-lg p-8 mt-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Contacte-nos</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Estamos sempre disponíveis para ajudar e responder às suas questões.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@futecoach.pt</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Telefone</h3>
                            <p className="text-gray-600">+351 123 456 789</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}