export default function Sobre() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-sky-500 mb-4">
            Sobre Nós
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma plataforma criada para ajudar estudantes a conquistarem
            sua aprovação na UNESP através de materiais organizados,
            exercícios e conteúdos de qualidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-sky-500 transition-all">
            <h2 className="text-2xl font-bold text-sky-500 mb-4">
              🎯 Missão
            </h2>

            <p className="text-gray-300">
              Democratizar o acesso ao conhecimento e oferecer uma
              preparação acessível para o vestibular.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-emerald-500 transition-all">
            <h2 className="text-2xl font-bold text-emerald-500 mb-4">
              🚀 Visão
            </h2>

            <p className="text-gray-300">
              Tornar-se uma referência para estudantes que desejam
              ingressar na UNESP.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition-all">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">
              💡 Valores
            </h2>

            <p className="text-gray-300">
              Educação, acessibilidade, dedicação, qualidade e
              compromisso com os estudantes.
            </p>
          </div>

        </div>

        {/* História */}
        <section className="mt-20 bg-zinc-900 rounded-3xl p-10 border border-zinc-800">
          <h2 className="text-4xl font-bold text-sky-500 mb-6">
            Nossa História
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            O UnespParaTodos nasceu da ideia de reunir conteúdos,
            materiais e exercícios em um único lugar de forma acessível, facilitando a
            preparação de estudantes para o vestibular da UNESP.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Nosso objetivo é oferecer uma plataforma intuitiva e
            organizada, ajudando alunos a estudarem de forma mais
            eficiente e focada.
          </p>
        </section>

      </div>
    </main>
  );
}