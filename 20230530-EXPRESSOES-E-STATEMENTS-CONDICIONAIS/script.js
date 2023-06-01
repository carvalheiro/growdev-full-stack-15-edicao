var numero1;
numero1 = 1;
console.log(numero1 + 3); // 4
numero1 = 5;
console.log(numero1 + 5); // 10
console.log("OPERADORES ARITMÉTICOS");
numero1 = numero1 + numero1;
console.log(numero1); // 10
console.log("concatenando numero");
console.log("1" + "1 teste"); // 11 Teste
console.log(5 - 4); // 1
console.log(5 * 4); // 20
console.log(5 / 4); // 1.25
console.log(4 - 3 * 5);
console.log(4 - (3 * 5) / 2);
// console.log(4 - 15 / 2)
// console.log(4 - 7.5)
// console.log(-3.5)
console.log(((4 - 3 * 5) * 5) / 2);
// console.log(1 * 5 / 2)
// console.log(5 / 2)
// console.log(2.5)

console.log("OPERADORES DE COMPARAÇÃO");

console.log(false === false); // true
console.log(true === false); // false
console.log(1 === 3); // false
console.log(1 === 1); // true
console.log("1" === 1);

console.log(1 == 1); // true
console.log("1" == 1); // true
console.log(0 == false); //

console.log(1 !== false);
console.log(1 !== 1); // false
console.log(true !== true); // false
console.log("1" !== 1); // true

console.log(1 != 1); // false
console.log("1" != 1); // false

console.log(1 > 1); // false
console.log(2 > 1); // true
console.log(3 > 4); // false

console.log(1 < 2); // true
console.log(2 < 1); // false

console.log(1 >= 1); // true
console.log(1 >= 2); // false

console.log(1 <= 1); // true
console.log(2 <= 1); // fa;se

// OPERADORES LÓGICOS
console.log("OPERADORES LÓGICOS");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false

var condicao1 = 5 === 5; // true
var condicao2 = 5 > 6; // false

console.log(condicao1 && condicao2); // false
console.log(condicao1 || condicao2); // true

console.log("combinação de operadores");
console.log(5 === 5 && 20 > 19);
