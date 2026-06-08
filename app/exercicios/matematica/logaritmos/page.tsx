import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2025",
    imagemUrl: "/questoes/matematica/exs_logaritmos/ex1_logaritmos.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'E',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Logaritmos"
      questoes={questoes}
    />
  );
}