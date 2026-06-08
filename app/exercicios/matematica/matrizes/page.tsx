import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2016 - Meio de Ano",
    imagemUrl: "/questoes/matematica/exs_matrizes/ex1_matrizes.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'B',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Matrizes"
      questoes={questoes}
    />
  );
}