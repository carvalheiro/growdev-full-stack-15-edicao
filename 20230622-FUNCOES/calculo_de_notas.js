const calcularNotas = function (salario) {
  // salario precisa ser um numero
  // algoritimo que calcula a quandidade de notas dado um salario.

  let nota50 = 0;
  let nota10 = 0;
  let nota1 = 0;

  while (salario >= 50) {
    salario -= 50;
    nota50++;
  }
  while (salario >= 10) {
    salario -= 10;
    nota10++;
  }
  while (salario >= 1) {
    salario -= 1;
    nota1++;
  }

  // return  //valor
  console.log("dentro da funcao");
  // console.log(nota50, nota10, nota1);
  return [
    { nota: 50, quantidade: nota50 },
    { nota: 10, quantidade: nota10 },
    { nota: 1, quantidade: nota1 },
  ];
};

const notasArmando = calcularNotas(257);
console.log("Armando recebera:");
console.log(notasArmando);
