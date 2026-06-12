import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sky-500 text-white shadow-md w-full relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Container Principal do Menu */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:h-16 gap-2 sm:gap-0">
          {/* Logo / Nome do Projeto */}
          <div className="font-black text-xl tracking-tight">
            <Link href="/">UnespParaTodos</Link>
          </div>

          {/* LINKS DE NAVEGAÇÃO */}
          <div className="flex items-center gap-4 text-xs sm:text-sm md:text-base font-bold">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Página Principal
            </Link>

            {/* 1. BOTÃO DE EXERCÍCIOS (Aparece em todos os dispositivos) */}
            <Link
              href="/exercicios"
              className="hover:opacity-80 transition-opacity"
            >
              Exercícios
            </Link>

            {/* 2. MENU DROPDOWN DE MATÉRIAS (Apenas no Computador!) */}
            <div className="hidden sm:inline-block relative group">
              <button className="hover:opacity-80 transition-opacity flex items-center gap-1 font-bold pb-2">
                Matérias ▾
              </button>

              <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block z-50">
                <div className="bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                  <Link
                    href="/matematica"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Matemática
                  </Link>
                  <Link
                    href="/portugues"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Língua Portuguesa
                  </Link>
                  <Link
                    href="/quimica"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Química
                  </Link>
                  <Link
                    href="/fisica"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Física
                  </Link>
                  <Link
                    href="/geografia"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Geografia
                  </Link>
                  <Link
                    href="/historia"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    História
                  </Link>
                  <Link
                    href="/filosofia"
                    className="block px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                  >
                    Filosofia
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/sobre" className="hover:opacity-80 transition-opacity">
              Sobre Nós
            </Link>

            <Link
              href="/feedback"
              className="hover:opacity-80 transition-opacity"
            >
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
