import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "FGV",
    imagemUrl: "/questoes/matematica/exs_analise_combinatoria/ex1_AC.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'E',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Análise Combinatória"
      questoes={questoes}
    />
  );
}