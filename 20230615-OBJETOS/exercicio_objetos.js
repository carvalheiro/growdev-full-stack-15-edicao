const pessoa = {
  nome: "Thiago",
  idade: 20,
  filhos: [],
  noiva: null,
};

console.log("Thiago com " + pessoa.idade + ":");
console.log(pessoa);

pessoa.idade++;
pessoa.noiva = "louise";

console.log("Thiago com " + pessoa.idade + ":");
console.log(pessoa);

pessoa.idade = 24;

const ultimoIndice = pessoa.filhos.length - 1;

pessoa.filhos[pessoa.filhos.length] = {
  nome: "margot",
  fede: true,
  filhos: [],
};

console.log("Thiago com " + pessoa.idade + ":");
console.log(pessoa);

console.log(pessoa.filhos[0].filhos.length);
//OBJETO.filhos[0].filhos.length
//ARRAY[0].filhos.lenth
//OBJETO.filhos.lenth
//ARRAY.length
pessoa.filhos[1];
