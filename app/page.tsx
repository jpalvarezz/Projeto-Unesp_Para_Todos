import Link from 'next/link';

export default function Home() {
  // Trocamos cores sólidas por gradientes modernos
  const materias = [
    { nome: "Matemática", slug: "matematica", gradiente: "from-blue-500 to-cyan-400" },
    { nome: "Língua Portuguesa", slug: "portugues", gradiente: "from-rose-500 to-red-400" },
    { nome: "Química", slug: "quimica", gradiente: "from-emerald-500 to-teal-400" },
    { nome: "Física", slug: "fisica", gradiente: "from-purple-500 to-indigo-400" },
    { nome: "Geografia", slug: "geografia", gradiente: "from-amber-500 to-orange-400" },
    { nome: "História", slug: "historia", gradiente: "from-orange-500 to-red-500" },
    { nome: "Filosofia", slug: "filosofia", gradiente: "from-violet-500 to-purple-500" },
    { nome: "Sociologia", slug: "sociologia", gradiente: "from-pink-500 to-rose-400" },
    { nome: "Inglês", slug: "ingles", gradiente: "from-teal-500 to-cyan-500" },
  ];

  return (
    // 1. FUNDO DINÂMICO: Um gradiente suave de azul/roxo bem claro que pega a tela toda
    <main className="min-h-screen p-8 flex flex-col items-center">
      
      {/* 2. EFEITO VIDRO (Glassmorphism) no cabeçalho */}
      <div className="text-center max-w-3xl mb-16 mt-8 p-10 rounded-3xl bg-white/700 backdrop-blur-md border border-white/60 shadow-xl">
        
        {/* 3. TEXTO COM DEGRADÊ */}
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-sky-500">
          Unesp para Todos
        </h1>
        
        <p className="text-xl text-gray-700 font-medium">
          Plataforma de estudos focada no vestibular. Escolha uma matéria abaixo para começar.
        </p>
      </div>

      {/* Grid de Botões Modernizados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {materias.map((materia) => (
          <Link 
            key={materia.slug} 
            href={`/${materia.slug}`}
            // Aplicamos o gradiente, sombras fortes, e um efeito de levantar e brilhar ao passar o mouse
            className={`bg-gradient-to-br ${materia.gradiente} relative group overflow-hidden text-white font-bold py-8 px-6 rounded-2xl text-center shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            {/* Efeito de brilho interno ao passar o mouse */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            
            <span className="relative z-10 text-2xl tracking-wide">{materia.nome}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}