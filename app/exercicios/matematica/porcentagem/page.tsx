'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2026",
    imagemUrl: "/questoes/matematica/porcentagem/ex1_porcentagem.png",
    alternativas: ['A', 'B', 'C', 'D'],
    correta: 'A',
    explicacao: "Resolução: O cálculo da razão do consumo per capita entre 2013 e 1998 resulta em aproximadamente 75%, validando a alternativa A."
  },
  {
    id: 2,
    vestibular: "UNESP 2020",
    imagemUrl: "/questoes/matematica/porcentagem/ex2_porcentagem.png",
    alternativas: ['A', 'B', 'C', 'D'],
    correta: 'C',
    explicacao: "Analisando o sentido Centro-Bairro (CB) no período da manhã, a velocidade média aumentou, o que implica uma redução de ~21,7% no tempo de deslocamento."
  },
  {
  id: 3,
  vestibular: "UNESP 2020",
  imagemUrl: "/questoes/matematica/porcentagem/ex3_porcentagem.png",
  alternativas: ['A', 'B', 'C', 'D'],
  correta: 'A',
  explicacao: "Resolução: A redução total de sal é de 7g (12g para 5g) em 6 anos (2019 a 2025). Como a redução é linear, calculamos a economia acumulada ano a ano. A soma das economias anuais resulta em R$ 67,2 milhões, valor que está entre R$ 65 e R$ 70 milhões."
}
];

export default function PorcentagemPage() {
  // Mudança: Agora controlamos a resposta de cada questão individualmente pelo ID
  const [respostas, setRespostas] = useState<{ [key: number]: string | null }>({});

  const handleSelecao = (questaoId: number, letra: string) => {
    setRespostas(prev => ({ ...prev, [questaoId]: letra }));
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 text-gray-900'>
      <div className='max-w-4xl w-full'>
        
        <Link href="/exercicios/matematica" className="text-purple-700 hover:text-purple-900 font-bold text-xs mb-8 inline-block">
          ← Voltar para Matemática
        </Link>

        <h1 className="text-2xl font-black mb-10 text-center text-gray-800 uppercase tracking-tighter">
          Lista de Exercícios: Porcentagem
        </h1>

        <div className="flex flex-col gap-16"> {/* Espaçamento grande entre as questões */}
          {questoes.map((q, index) => {
            const respostaSelecionada = respostas[q.id];

            return (
              <div key={q.id} className="w-full flex flex-col relative">
                
                {/* Indicador de número da questão */}
                <div className="absolute -left-2 md:-left-6 top-10 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Vestibular posicionado acima da questão */}
                <div className="mb-3 ml-8 md:ml-4 flex items-center gap-2">
                  <span className="text-purple-800 text-sm font-black uppercase tracking-tighter">
                    {q.vestibular}
                  </span>
                </div>

                {/* Container principal da Questão */}
                <div className="bg-white rounded-3xl shadow-sm p-5 md:p-8 border border-gray-200 hover:shadow-md transition-shadow">
                  
                  {/* IMAGEM */}
                  <div className="w-full flex justify-center mb-6">
                    <Image 
                      src={q.imagemUrl} 
                      alt={`Questão ${q.id}`} 
                      width={800} 
                      height={600} 
                      className="rounded-lg max-w-full object-contain"
                      style={{ maxHeight: '45vh', width: 'auto' }} 
                    />
                  </div>

                  {/* SEÇÃO DE RESPOSTA */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col items-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Selecione sua alternativa</p>
                    <div className="flex justify-center gap-3 md:gap-4">
                      {q.alternativas.map((letra) => {
                        const isSelected = respostaSelecionada === letra;
                        const isCorrect = letra === q.correta;

                        let btnClasses = "border-2 bg-white text-gray-600 border-gray-200 hover:border-purple-500 hover:bg-purple-50";
                        
                        if (isSelected) {
                          btnClasses = isCorrect 
                            ? "bg-green-600 border-green-600 text-white shadow-lg scale-105" 
                            : "bg-red-600 border-red-600 text-white shadow-lg scale-105";
                        }

                        return (
                          <button
                            key={letra}
                            onClick={() => handleSelecao(q.id, letra)}
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl transition-all font-black text-xl flex items-center justify-center ${btnClasses}`}
                          >
                            {letra}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* RESOLUÇÃO */}
                  {respostaSelecionada && (
                    <div className={`mt-6 p-5 rounded-2xl border-l-4 animate-in fade-in slide-in-from-top-2 ${
                      respostaSelecionada === q.correta ? 'bg-green-50 border-green-600' : 'bg-blue-50 border-blue-600'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-black text-xs uppercase tracking-widest">
                          {respostaSelecionada === q.correta ? '✅ Excelente!' : '💡 Resolução'}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700 font-medium">
                        {q.explicacao}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <footer className="mt-20 py-8 border-t border-gray-200 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Projeto Unesp Para Todos • {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}