// const filter = function (lista, callback) {
//   // é o array que tu que filtrar
//   // callback é uma função que  vai ser chamada para cada elemento array
//   // o primeiro parametro da callback é o elemento atual que estou iterando
//   // callback term que retornar true ou false
//   // se retornar true, o elemento atual vai para o novo array
//   // se retornar false, o elemento atual não vai para o novo array

//   const novoArray = [];
//   for (let i = 0; i < lista.length; i++) {
//     const itemAutaltal = lista[i];
//     console.log("itemAutaltal");
//     console.log(itemAutaltal);
//     const deveAparecerNoNovoArray = callback(itemAutaltal);
//     const ultimoIndiceDoNovoArray = novoArray.length - 1;
//     console.log("deveAparecerNoNovoArray");
//     console.log(deveAparecerNoNovoArray);
//     if (deveAparecerNoNovoArray) {
//       novoArray[ultimoIndiceDoNovoArray + 1] = itemAutaltal;
//     }
//   }
//   console.log("novoArray");
//   console.log(novoArray);
//   return novoArray;
// };

// const map = function (lista, callback) {
//   // é o array que tu que filtrar
//   // callback é uma função que  vai ser chamada para cada elemento array
//   // o primeiro parametro da callback é o elemento atual que estou iterando
//   // callback term que retornar true ou false
//   // se retornar true, o elemento atual vai para o novo array
//   // se retornar false, o elemento atual não vai para o novo array

//   const novoArray = [];
//   for (let i = 0; i < lista.length; i++) {
//     const itemAutaltal = lista[i];
//     console.log("itemAutaltal");
//     console.log(itemAutaltal);
//     const novoItem = callback(itemAutaltal);
//     novoArray[i] = novoItem;
//   }
//   console.log("novoArray");
//   console.log(novoArray);
//   return novoArray;
// };
// // const retronoFilter = filter([1, 5], function banana(parametro1) {
// //   return parametro1 < 3;
// // });

// console.log("retronoFilter");
// // console.log(retronoFilter);

// console.log(
//   filter([null, 1, 3, undefined, ""], function (item) {
//     console.log("item");

//     return !!item;
//   })
// );

// const arrayDeObjetos = [];
// console.log(arrayDeObjetos.filter());

console.log(
  [2, 3, 1].map(function (item) {
    return item * 2;
  })
);
