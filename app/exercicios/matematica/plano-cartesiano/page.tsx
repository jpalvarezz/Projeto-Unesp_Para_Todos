import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNIVESP 2026",
    imagemUrl: "/questoes/matematica/exs_plano_cartesiano/ex1_PC.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'B',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Plano Cartesiano"
      questoes={questoes}
    />
  );
}