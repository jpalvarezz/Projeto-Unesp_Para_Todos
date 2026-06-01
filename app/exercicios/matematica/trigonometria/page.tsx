import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2014",
    imagemUrl: "/questoes/matematica/exs_trigonometria/ex1_trigonometria.jpeg",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'A',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Trigonometria"
      questoes={questoes}
    />
  );
}