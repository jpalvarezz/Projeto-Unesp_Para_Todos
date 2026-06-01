import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2023",
    imagemUrl: "/questoes/matematica/exs_geometria_espacial/ex1_GE.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'C',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Geometria Espacial"
      questoes={questoes}
    />
  );
}