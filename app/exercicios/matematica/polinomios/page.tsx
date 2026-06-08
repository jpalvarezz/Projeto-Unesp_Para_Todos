import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "FAMEMA 2020",
    imagemUrl: "/questoes/matematica/exs_polinomios/ex1_polinomios.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'E',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Polinomios"
      questoes={questoes}
    />
  );
}