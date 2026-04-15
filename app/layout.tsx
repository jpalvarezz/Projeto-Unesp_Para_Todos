import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unesp para Todos",
  description: "Plataforma de estudos focada no vestibular da Unesp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} relative min-h-screen bg-gray-50 flex flex-col`}>
        
        {/* CAMADA DE FUNDO: Logos espalhados por TUDO, sem interrupções */}
        <div 
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: "url('/logo-unesp.png')", 
            backgroundSize: "150px", 
            backgroundRepeat: "repeat" 
          }}
        ></div>

        {/* MENU */}
        <div className="relative z-20">
          <Navbar />
        </div>
        
        {/* CONTEÚDO CENTRAL: Agora totalmente transparente para mostrar o fundo! */}
        <main className="relative z-10 flex-grow w-full max-w-7xl mx-auto min-h-screen px-4 py-8">
          {children}
        </main>
        
      </body>
    </html>
  );
}