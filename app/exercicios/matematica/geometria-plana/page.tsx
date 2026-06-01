import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2023",
    imagemUrl: "/questoes/matematica/exs_geometria_plana/ex1_GP.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'E',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Geometria Plana"
      questoes={questoes}
    />
  );
}