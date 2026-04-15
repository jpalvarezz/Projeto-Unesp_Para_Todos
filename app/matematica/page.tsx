import Link from 'next/link';
import dadosMatematica from '@/data/matematica.json';

export default function MatematicaPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Voltar para o início
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-b pb-4">
          Matemática: Escolha um Tópico
        </h1>

        {/* Lista de botões gerada a partir do JSON */}
        <div className="grid grid-cols-1 gap-4">
          {dadosMatematica.map((topico) => (
            <Link 
              key={topico.id}
              href={`/matematica/${topico.slug}`}
              // 1. Mudamos o fundo para azul escuro (bg-blue-600) e o texto para branco (text-white)
              // 2. Aumentamos a sombra (shadow-md)
              // 3. No hover, deixamos o azul um pouco mais escuro (hover:bg-blue-800)
              className="group flex justify-between items-center p-5 bg-blue-600 text-white rounded-xl hover:bg-blue-800 transition-all shadow-md transform hover:-translate-y-1"
            >
              <span className="text-xl font-semibold">{topico.titulo}</span>
      
              {/* O selo de "Ver PDF" agora fica com fundo branco e texto azul para dar destaque */}
              <span className="bg-white text-blue-700 font-bold text-sm px-4 py-2 rounded-full shadow-sm">
        Ver PDF
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}