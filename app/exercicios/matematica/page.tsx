import Link from 'next/link';

const temasMatematica = [
    { nome: 'Porcentagem', slug: 'porcentagem' },
    { nome: 'Geometria Plana', slug: 'geometria-plana' },
    { nome: 'Análise Combinatória', slug: 'analise-combinatoria' },
];

export default function MatematicaPage() {
    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4'>
            <div className='max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12'>
                
                {/* Botão de Voltar */}
                <Link href="/exercicios" className="text-sky-600 hover:text-sky-800 mb-8 inline-flex items-center gap-2 font-semibold transition-colors">
                    ← Voltar para Central
                </Link>

                <div className="mb-10 text-center md:text-left">
                    <h1 className="text-4xl font-black text-purple-700 mb-2">
                        Matemática
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Selecione o conteúdo que deseja praticar:
                    </p>
                </div>

                {/* Grid de Temas */}
                <div className='grid grid-cols-1 gap-4'>
                    {temasMatematica.map((tema) => (
                        <Link 
                            key={tema.slug}
                            href={`/exercicios/matematica/${tema.slug}`}
                            className="group p-6 bg-purple-50 border border-purple-100 rounded-2xl hover:bg-purple-600 transition-all duration-300 shadow-sm flex justify-between items-center"
                        >
                            <span className="text-xl font-bold text-purple-700 group-hover:text-white transition-colors">
                                {tema.nome}
                            </span>
                            <span className="text-purple-400 group-hover:text-white text-2xl font-black transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}