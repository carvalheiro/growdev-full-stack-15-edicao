const retorno = [1, 2, 3].reduce(function (
  retornoAnterior,
  item,
  indice,
  array
) {
  debugger;
  console.log("retornoAnterior", retornoAnterior);
  console.log("item", item);
  console.log("indice", indice);
  if (indice === 2) {
    return "batata";
  } else {
    return 1;
  }
},
0);

console.log(retorno);
