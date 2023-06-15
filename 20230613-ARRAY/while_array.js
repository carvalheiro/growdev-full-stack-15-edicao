"use strict";
const numeros = [1, 2, 3, 4];
let indice = 0;
let soma = 0;
while (indice <= 3) {
  console.log("O item na posicao " + indice + " é igual a: " + numeros[indice]);
  soma = soma + numeros[indice];
  indice = indice + 1;
}
console.log("A soma total é: " + soma);
console.log("O array tem " + indice + " items");
console.log("fim");
