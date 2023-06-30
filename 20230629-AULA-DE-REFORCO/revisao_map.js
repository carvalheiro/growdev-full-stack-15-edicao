const lista = [1, 2, 3, 4];
const funcao = function (parametro1, parametro2, parametro3) {
  console.log("executour");

  return parametro1 * 2;
};

const retorno = lista.map(funcao);

console.log(retorno);
