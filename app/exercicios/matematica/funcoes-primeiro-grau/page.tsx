import ExercisePage from '@/components/ExercisePage';

const questoes = [
  {
    id: 1,
    vestibular: "UNESP 2018",
    imagemUrl: "/questoes/matematica/exs_funcoes_primeiro_grau/ex1_FPG.png",
    alternativas: ['A', 'B', 'C', 'D', 'E'],
    correta: 'B',
    explicacao:
      ""
  },

];

export default function Page() {
  return (
    <ExercisePage
      titulo="Funções do Primeiro Grau"
      questoes={questoes}
    />
  );
}