import Link from 'next/link';
import dadosMatematica from '@/data/matematica.json';

interface PageProps {
  readonly params: Promise<{
    readonly slug: string;
  }>;
}

export default async function VerPdfPage({ params }: PageProps) {

  const resolvedParams = await params;
  const topico = dadosMatematica.find((item) => item.slug === resolvedParams.slug);

  if (!topico) {
    return <div>Conteúdo não encontrado.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-4 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
        <Link href="/matematica" className="mb-4 text-blue-600 font-bold">
          ← Voltar para tópicos
        </Link>
        
        <h1 className="text-sky-600 text-2xl font-bold mb-4">{topico.titulo}</h1>

        <div className="flex-1 bg-white rounded-lg shadow-inner overflow-hidden border border-gray-300">
          <iframe
            src={topico.pdfUrl}
            className="w-full h-[80vh]"
            title={topico.titulo}
          />
        </div>
      </div>
    </main>
  );
}