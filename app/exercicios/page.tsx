import Link from 'next/link';

export default function ExerciciosPage() {
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4'>

            {/* Container Principal */}
            <div className='max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12'>
                <h1 className="text-4xl font-black text-center text-sky-600 mb-4">
                    Central de Exercícios
                </h1>
                <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                    Teste seus conhecimentos com questões no formato do vestibular da Unesp. Escolha sua modalidade de treino abaixo:
                </p>

                {/* Grid de Opções de Exercícios */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Card: Provas Anteriores */}
                    <div className='md: col-span-2 bg-sky-50 border border-sky-100 p-8 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1 mt-2'>
                        <div>
                            <h2 className='text-2xl font-bold text-sky-700 mb-3'>Provas Anteriores</h2>
                            <p className="text-gray-600 mb-6">
                                Resolva as provas completas da 1ª e 2ª fase das edições passadas da Unesp.
                            </p>
                        </div>
                        <Link
                            href="https://vestibular.brasilescola.uol.com.br/downloads/universidade-estadual-paulista.htm"
                            target='_blank'
                            rel="noopener noreferrer"
                            className="block text-center bg-sky-500 text-white px-4 py-3 rounded-xl font-bold hover:bg-sky-600 transition-colors w-full shadow-md"
                        >
                            Acessar Provas
                        </Link>
                    </div>

                    {/* Card: Questões por Matéria (Ocupa 2 colunas no PC) */}
                    <div className="md:col-span-2 bg-purple-50 border border-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1 mt-2">
                        <h2 className="text-2xl font-bold text-purple-700 mb-3">Questões por Matéria</h2>
                        <p className="text-gray-600 mb-6">
                            Foque nos seus pontos fracos escolhendo disciplinas específicas para treinar através do nosso banco de questões.
                        </p>

                        {/* "Tags" das matérias para ilustrar */}
                        <div className="flex gap-3 flex-wrap">
                            {/* Botões clicáveis das matérias */}
                            <div className="flex gap-3 flex-wrap">
                                <Link
                                    href="/exercicios/matematica"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Matemática
                                </Link>

                                <Link
                                    href="/exercicios/biologia"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Biologia
                                </Link>

                                <Link
                                    href="/exercicios/historia"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    História
                                </Link>

                                <Link
                                    href="/exercicios/quimica"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Química
                                </Link>

                                <Link
                                    href="/exercicios/lp"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Lingua Portuguesa
                                </Link>

                                <Link
                                    href="/exercicios/fisica"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Física
                                </Link>

                                <Link
                                    href="/exercicios/geografia"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Geografia
                                </Link>

                                <Link
                                    href="/exercicios/filosofia"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Filosfia
                                </Link>

                                <Link
                                    href="/exercicios/sociologia"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Sociologia
                                </Link>

                                <Link
                                    href="/exercicios/ingles"
                                    className="bg-white text-purple-600 px-4 py-2 rounded-xl text-sm font-bold border border-purple-200 shadow-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
                                >
                                    Ingles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}