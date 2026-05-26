import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2023",
    imagemUrl: "/questoes/matematica/exs_equacao_segundo_grau/ex1_ESG.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'D',
    explicacao:
      "teste"
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Equação do Segundo Grau"
      questoes={questoes}
    />
  );
}