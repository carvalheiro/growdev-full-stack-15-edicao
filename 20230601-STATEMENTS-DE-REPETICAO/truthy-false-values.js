if (10) {
  console.log("10 é truthy");
} else {
  console.log("10 é falsy");
}
if (21) {
  console.log("21 é truthy");
} else {
  console.log("21 é falsy");
}
if (-10) {
  console.log("-10 é truthy");
} else {
  console.log("-10 é falsy");
}
if (0) {
  console.log("0 é truthy");
} else {
  console.log("0 é falsy");
}

console.log("TODO NUMERO É TRUTHY, EXCETO O 0");

if ("TESTE") {
  console.log("TESTE é truthy");
} else {
  console.log("TESTE é falsy");
}

if ("0") {
  console.log("'0' é truthy");
} else {
  console.log("'0' é falsy");
}

if ("") {
  console.log("'' é truthy");
} else {
  console.log("'' é falsy");
}

console.log("TODO STRING É TRUTHY, EXCETO A STRING VAZIA");

if (undefined) {
  console.log("undefined é truthy");
} else {
  console.log("undefined é falsy");
}

if (null) {
  console.log("null é truthy");
} else {
  console.log("null é falsy");
}

console.log("testando operador de conversao", !!0);
