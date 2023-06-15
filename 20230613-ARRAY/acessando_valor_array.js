const gaveta = [1]; // ENDERECO: ARRAY_1;
const gaveta2 = [gaveta]; // ENDERECO: ARRAY_2;
const gaveta3 = [gaveta2]; // ENDERECO: ARRAY_3;

gaveta3[1] = 5;
gaveta2[1] = 2 + 2;
gaveta3[0][2] = "A";

console.log(gaveta3[0][0][0]);
console.log("----------------------");
let iteracoes = 0;
for (const item of gaveta3) {
  console.log(item);
  iteracoes++;
}

console.log(iteracoes);

console.log(([] && [])[0] === []);
