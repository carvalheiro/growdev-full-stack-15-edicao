const objeto = {};
const objeto2 = objeto;
console.log(objeto === objeto2);
//SINTAXE {nomePropriedade: VALOR, nomePropriedade2: VALOR}
console.log({ nome: "Thiago", idade: 25 + 1 });

const pessoa = {
  nome: "thiago",
};

// VALOR.nomepropriedade

// ENDERECO.nomepropriedade
console.log(pessoa.nome);
console.log((0 || pessoa).nome);

const aluna = {
  nome: "Kely",
};

aluna.nome = "Kelly";

aluna.idade = 33;
console.log(aluna);

aluna.idade++;
console.log(aluna);

// sintaxe ---> VALOR.nomepropriedade = VALOR
