"use strict";
const numeros = [1, 2, 3, 4];
numeros[0] = 1;
numeros[1] = 2;
numeros[2] = 3;
numeros[3] = 4;
// ENDERECO[VALOR]
// VALOR[VALOR] -
// ENDEROCE[POSICAO]
let soma = 0;

for (let posicao = 0; posicao <= 3; posicao++) {
  console.log("Nessa posicao, o valor é: " + numeros[posicao]);
  soma = soma + numeros[posicao];
}

console.log("Soma é: " + soma);
