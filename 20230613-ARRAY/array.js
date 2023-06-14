const gaveta = []; // ENDERECO: ARRAY_1;
const gaveta2 = []; // ENDERECO: ARRAY_2;
const gaveta3 = []; // ENDERECO: ARRAY_3;

console.log(gaveta);
console.log(gaveta2);
console.log(gaveta3);
console.log("------------------");
gaveta2[0] = gaveta;

console.log(gaveta);
console.log(gaveta2);
console.log(gaveta3);

console.log("------------------");
gaveta[0] = "Meias";

console.log(gaveta);
console.log(gaveta2);
console.log(gaveta3);

console.log("------------------");
gaveta3[0] = gaveta2;

console.log(gaveta);
console.log(gaveta2);
console.log(gaveta3);
