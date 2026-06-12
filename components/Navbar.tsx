import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sky-500 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* No celular: vira coluna (flex-col) | No PC: vira linha (sm:flex-row) */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:h-16 gap-2 sm:gap-0">
          
          <div className="font-black text-xl tracking-tight">
            <Link href="/">UnespParaTodos</Link>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm md:text-base font-bold">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              Página Principal
            </Link>
            <Link href="/sobre" className="hover:opacity-80 transition-opacity">
              Sobre Nós
            </Link>
            <Link href="/feedback" className="hover:opacity-80 transition-opacity">
              Feedback
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}