import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UEG 2024/2 - MEDICINA",
    imagemUrl: "/questoes/matematica/exs_progressao_geometrica/ex1_PG.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'A',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Progressão Geométrica"
      questoes={questoes}
    />
  );
}