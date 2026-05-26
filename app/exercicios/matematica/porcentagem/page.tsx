import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2026",
    imagemUrl: "/questoes/matematica/porcentagem/ex1_porcentagem.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'A',
    explicacao:
      "Resolução: O cálculo da razão do consumo per capita entre 2013 e 1998 resulta em aproximadamente 75%, validando a alternativa A."
  },

  {
    id: 2,
    vestibular: "UNESP 2020",
    imagemUrl: "/questoes/matematica/porcentagem/ex2_porcentagem.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'C',
    explicacao:
      "Analisando o sentido Centro-Bairro (CB) no período da manhã, a velocidade média aumentou, o que implica uma redução de ~21,7% no tempo de deslocamento."
  },

  {
    id: 3,
    vestibular: "UNESP 2020",
    imagemUrl: "/questoes/matematica/porcentagem/ex3_porcentagem.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'A',
    explicacao:
      "Resolução: A redução total de sal é de 7g (12g para 5g) em 6 anos (2019 a 2025). Como a redução é linear, calculamos a economia acumulada ano a ano. A soma das economias anuais resulta em R$ 67,2 milhões, valor que está entre R$ 65 e R$ 70 milhões."
  }
];

export default function PorcentagemPage() {
  return (
    <ExercisePage
      titulo="Porcentagem"
      questoes={questoes}
    />
  );
}