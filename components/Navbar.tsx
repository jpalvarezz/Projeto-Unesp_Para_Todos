import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-sky-500 shadow-lg text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Nome do Site */}
        <Link href="/" className="text-2xl font-black tracking-tight text-white hover:opacity-90">
          UnespParaTodos
        </Link>

        {/* Links de Navegação */}
        <ul className="flex gap-8 items-center font-medium">
          <li>
            <Link href="/" className="hover:text-sky-100 transition-colors">Página Principal</Link>
          </li>
          <li>
            <Link href="/sobre" className="hover:text-sky-100 transition-colors">Sobre Nós</Link>
          </li>
          
          {/* Dropdown Materiais */}
          <li className="relative group">
            <button className="hover:text-sky-100 transition-colors py-2 flex items-center gap-1">
              Materiais <span className="text-xs">▼</span>
            </button>
            
            {/* Painel Dropdown com TODAS as matérias e hover colorido */}
            <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col p-3 text-gray-800 max-h-[80vh] overflow-y-auto">
              
              <Link href="/matematica" className="px-4 py-2 hover:bg-sky-50 hover:text-sky-700 rounded-xl transition-colors font-semibold">
                Matemática
              </Link>
              
              <Link href="/portugues" className="px-4 py-2 hover:bg-rose-50 hover:text-rose-700 rounded-xl transition-colors font-semibold">
                Língua Portuguesa
              </Link>
              
              <Link href="/quimica" className="px-4 py-2 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors font-semibold">
                Química
              </Link>
              
              <Link href="/fisica" className="px-4 py-2 hover:bg-purple-50 hover:text-purple-700 rounded-xl transition-colors font-semibold">
                Física
              </Link>
              
              <Link href="/geografia" className="px-4 py-2 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-colors font-semibold">
                Geografia
              </Link>
              
              <Link href="/historia" className="px-4 py-2 hover:bg-orange-50 hover:text-orange-700 rounded-xl transition-colors font-semibold">
                História
              </Link>
              
              <Link href="/filosofia" className="px-4 py-2 hover:bg-violet-50 hover:text-violet-700 rounded-xl transition-colors font-semibold">
                Filosofia
              </Link>
              
              <Link href="/sociologia" className="px-4 py-2 hover:bg-pink-50 hover:text-pink-700 rounded-xl transition-colors font-semibold">
                Sociologia
              </Link>
              
              <Link href="/ingles" className="px-4 py-2 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition-colors font-semibold">
                Inglês
              </Link>

            </div>
          </li>

          <li>
            <Link href="/exercicios" className="hover:text-sky-100 transition-colors">Exercícios</Link>
          </li>
          
          {/* Botão de Feedback */}
          <li>
            <Link href="/feedback" className="bg-white text-sky-600 font-bold px-5 py-2 rounded-full hover:shadow-lg hover:bg-sky-50 transition-all transform hover:-translate-y-0.5 inline-block">
              Feedback
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}