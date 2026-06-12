import Link from "next/link";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      
      {/* A Caixa Branca Principal */}
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12">
        
        {/* Cabeçalho do Formulário */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-sky-600 mb-2">
            Fale Conosco
          </h1>
          <p className="text-gray-600">
            Tem alguma dúvida, sugestão ou encontrou algum erro? Mande uma mensagem pra gente!
          </p>
        </div>

        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="flex flex-col gap-5"
        >
          
          <input 
            type="hidden" 
            name="access_key" 
            value="40f4db55-6c56-468a-a63d-36c21a9e2e2f" 
          />

          <input 
            type="hidden" 
            name="redirect" 
            value="https://projeto-unesp-para-todos.vercel.app/" 
          />

          {/* Caixa do Nome */}
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold text-slate-700">
              Qual é o seu nome?
            </label>
            <input 
              type="text" 
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              className="text-slate-900 border border-gray-300 rounded-xl p-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-gray-50"
              required
            />
          </div>

          {/* Caixa da Mensagem / Dúvida */}
          <div className="flex flex-col gap-2">
            <label htmlFor="mensagem" className="font-semibold text-slate-700">
              Sua Dúvida ou Sugestão
            </label>
            <textarea 
              id="mensagem"
              name="mensagem"
              rows={5}
              placeholder="Escreva aqui tudo o que você precisa..."
              className=" text-slate-900 border border-gray-300 rounded-xl p-3 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all bg-gray-50 resize-y"
              required
            ></textarea>
          </div>

          {/* Botão de Enviar */}
          <button 
            type="submit"
            className="mt-4 bg-sky-500 text-white font-bold text-lg py-3 px-6 rounded-xl hover:bg-sky-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Enviar Mensagem
          </button>

        </form>

        {/* Link para voltar ao Início */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-sky-600 font-medium transition-colors">
            &larr; Voltar para a página inicial
          </Link>
        </div>

      </div>
    </div>
  );
}