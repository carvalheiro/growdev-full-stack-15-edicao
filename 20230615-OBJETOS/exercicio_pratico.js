// notas 50
// notas 10
// notas 1

const listaFuncionario = [
  { nome: "João", salario: 967, notas50: 0, notas10: 0, notas1: 0 },
  { nome: "Maria", salario: 3553, notas50: 0, notas10: 0, notas1: 0 },
];

console.log("Esqueci alguém?");

listaFuncionario[2] = {
  nome: "Sérgio",
  salario: 65,
  notas50: 0,
  notas10: 0,
  notas1: 0,
};

console.log("Gente, confere o salário de vocês pra ver se está certo:");
console.log(listaFuncionario);

listaFuncionario[2].salario = 6500;

console.log("Beleza, vou calcular quantas notas é preciso para cada um");

for (const funcionario of listaFuncionario) {
  // salario é um objeto, toda iteracao vai ter um objeto com a mesma estrutura
  let nota50 = 0;
  let nota10 = 0;
  let nota1 = 0;
  let valorSaque = funcionario.salario;

  while (valorSaque >= 50) {
    valorSaque -= 50;
    nota50++;
  }
  while (valorSaque >= 10) {
    valorSaque -= 10;
    nota10++;
  }
  while (valorSaque >= 1) {
    valorSaque -= 1;
    nota1++;
  }
  funcionario.notas50 = nota50;
  funcionario.notas10 = nota10;
  funcionario.notas1 = nota1;
}
