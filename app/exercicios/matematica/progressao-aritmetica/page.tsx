import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UEMG - 2025",
    imagemUrl: "/questoes/matematica/exs_progressao_aritmetica/ex1_PA.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'A',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Progressão Aritmética"
      questoes={questoes}
    />
  );
}