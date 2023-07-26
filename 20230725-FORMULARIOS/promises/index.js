console.log(axios);
function setTimeoutPromise(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject("TES" + time);
    }, time);
  });
}

setTimeoutPromise(1000)
  .then(function (valor) {
    console.log("primeira reação", valor);
  })
  .catch(function (valor) {
    console.log("dentro do catch", valor);
  });

Promise.then().then().then().catch().then();

// setTimeout(function () {
//   console.log("primeira reação");
//   setTimeout(function () {
//     console.log("segunda reação");
//     setTimeout(function () {
//       console.log("terceira reação");
//     }, 3000);
//   }, 2000);
// }, 1000);

// const promise1 = setTimeoutPromise(1000);
// const promise2 = promise1.then(function () {
//   console.log("primeira reação");
//   return setTimeoutPromise(2000);
// });

// const promise3 = promise2.then(function () {
//   console.log("segunda reação");
//   return setTimeoutPromise(3000);
// });

// const promise4 = promise3.then(function () {
//   console.log("terceira reação");
// });

// promise4.then(function () {
//   console.log("fim das promises");
// });

// setTimeoutPromise(1000)
//   .then(function (valor) {
//     console.log("primeira reação", valor);
//     return setTimeoutPromise(2000);
//   })
//   .then(function (valor) {
//     console.log("segunda reação", valor);
//     return new Promise(function (resolve, reject) {
//       const button = document.querySelector("button");
//       button.addEventListener("click", function () {
//         resolve("clicou");
//       });
//     });
//   })
//   .then(function (valor) {
//     console.log("terceira reação", valor);
//     return 5;
//   })
//   .then(function (valor) {
//     console.log("fim das promises", valor);
//   });

console.log("fim do codigo");
