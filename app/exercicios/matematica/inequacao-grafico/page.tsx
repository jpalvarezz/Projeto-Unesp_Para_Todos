import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2022",
    imagemUrl: "/questoes/matematica/exs_inequacao_grafico/ex1_IG.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'A',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Gráfico de Inequações"
      questoes={questoes}
    />
  );
}