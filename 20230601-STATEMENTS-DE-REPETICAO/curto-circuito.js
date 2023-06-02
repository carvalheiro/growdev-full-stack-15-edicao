console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);

let nome = 0;

console.log(nome || "Usuário não digitou o nome");

// || -> se o valor da esquerda for true, ele retorna o valor da esquerda
// && -> se o valor da esquerda for true ele retorna o valor da direita

console.log(1 + 3 * 2 || (0 && 3 + 1 + (nome = 4)));

// 1 + 6 || 0 && 4 + 4
// 7 || 0 && 8
// 7

console.log((6 && 7 + 5 * (nome += 2)) || (4 * 5 && false));
// 7 + 5 * (nome += 2)) || (4 * 5 && false)
// 7 + 5 * 2 || (4 * 5 && false)
// 17 && (4 * 5 && false)
