"use strict";
// data é um array de objetos
// cada objeto tem uma propriedade nome, sexo e salario
// nome é uma string que representa o nome do funcionario
// sexo é uma string "M" (masculino) "F" (feminino)
// salario é um numero que representa o salário do funcionario
const pessoas = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",

    sexo: "F",
    salario: 3350.25,
  },
];

const quantidadeDePessoas = pessoas.length;

// 1. Imprima no console a quantidade de pessoas Total.
console.log("Imprima no console a quantidade de pessoas Total:");
console.log(quantidadeDePessoas);
console.log("-------------------------------------------");
// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
console.log(
  "2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino:"
);
const listaFuncionarias = pessoas.filter(function (pessoa) {
  if (pessoa.sexo === "F") {
    return true;
  } else {
    return false;
  }
});

/* forma 2 de resolver o exercicio
const listaFuncionarias = [];

for (const pessoa of pessoas) {
  if (pessoa.sexo === "F") {
    listaFuncionarias.push(pessoa);
  }
}
*/
console.log(listaFuncionarias.length);

console.log("-------------------------------------------");
// 3. Imprima no console a soma do salário de todas as pessoas.
console.log("3. Imprima no console a soma do salário de todas as pessoas.");

/* opcao 1
let soma = 0;
for (let indice = 0; indice < pessoas.length; indice++) {
  const pessoa = pessoas[indice];
  soma += pessoa.salario;
}
*/
/* opcao 2
let soma = 0;
for (const pessoa of pessoas) {
  soma += pessoa.salario;
}
*/

let somaTodosSalarios = 0;
pessoas.forEach(function (pessoa) {
  somaTodosSalarios += pessoa.salario;
});

console.log(somaTodosSalarios);

console.log("-------------------------------------------");
// 4. Imprima no console a média do salário de todas as pessoas.
console.log("4. Imprima no console a média do salário de todas as pessoas.");
// soma dos valores / quantide de items
// soma dos salarios / quantidade de pessoas

const mediaTodosSalarios = somaTodosSalarios / quantidadeDePessoas;
// console.log(mediaTodosSalarios.toFixed(2)); // exemplo com arredondamento
console.log(mediaTodosSalarios);

console.log("-------------------------------------------");
// 5. Imprima no console a soma do salário de todos as pessoas do sexo masculino
console.log(
  "5. Imprima no console a soma do salário de todos as pessoas do sexo masculino"
);
const listaFuncionarios = pessoas.filter(function (pessoa) {
  /* forma um (mais código)
  // if (pessoa.sexo === "M") {
  //   return true;
  // } else {
  //   return false;
  // }
  */
  return pessoa.sexo === "M";
});

let somaSalariosFuncionarios = 0;
listaFuncionarios.forEach(function (pessoa) {
  somaSalariosFuncionarios += pessoa.salario;
});

console.log(somaSalariosFuncionarios);
console.log("-------------------------------------------");
// 6. Imprima no console a média do salário de todas as pessoas do sexo
console.log(
  "6. Imprima no console a média do salário de todas as pessoas do sexo"
);
// somaSalariosHomens / quantidade de homens
const quantidadeDeFuncionarios = listaFuncionarios.length;
const mediaSalarioFuncionarios =
  somaSalariosFuncionarios / quantidadeDeFuncionarios;
console.log(mediaSalarioFuncionarios.toFixed(2));
console.log("-------------------------------------------");
// 7. Imprima no console se existe algum salario acima de 7000
console.log("7. Utilize a função Some, para descobrir se existe algum salário");
/* opcao1
let existeSalarioAcimaDe7000 = false;
for (const pessoa of pessoas) {
  console.log("rodou");
  if (pessoa.salario >= 7000) {
    existeSalarioAcimaDe7000 = true;
  }
}
*/
/* opcao 2
let existeSalarioAcimaDe7000 = false;
let indice = 0;
while (indice < pessoas.length && existeSalarioAcimaDe7000 !== true) {
  console.log("rodou");
  const pessoa = pessoas[indice];
  if (pessoa.salario >= 7000) {
    existeSalarioAcimaDe7000 = true;
  }
  indice++;
}
*/
const existeSalarioAcimaDe7000 = pessoas.some(function (pessoa) {
  return pessoa.salario >= 7000;
});
console.log(existeSalarioAcimaDe7000);

// contrário falso.
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
// 10. Imprima os nomes utilizando o MAP
