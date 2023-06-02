let nome1, nome2, nome3;

nome1 = nome2 = nome3 = "João";
// nome1 = nome2 = "João";
// nome1 = "João";
// João

console.log(nome1);
console.log(nome2);
console.log(nome3);

let sobrenome1, sobrenome2, sobrenome3;
sobrenome1 = "Primeiro" + (sobrenome2 = "Segundo" + (sobrenome3 = "Terceiro"));
// sobrenome1 = Primeiro + Segundo + Terceiro
console.log(sobrenome1);
console.log(sobrenome2);
console.log(sobrenome3);

let numero1 = 1;
numero1 = numero1 + 5;

console.log((numero1 += 8));
console.log(numero1);

let nomeCompleto = "Thiago";
console.log(1 + (nomeCompleto += "Santos"));

console.log("CAIXA");
let caixa = 0;

caixa += 10;
console.log("Saldo Atual:" + caixa);
caixa += 20;
console.log("Saldo Atual:" + caixa);
console.log((caixa *= 2));
console.log((caixa /= 2));
console.log((caixa -= 2));
