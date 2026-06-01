import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2022",
    imagemUrl: "/questoes/matematica/exs_inequacao/ex1_inequacao.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'C',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Inequações"
      questoes={questoes}
    />
  );
}