const butao = document.querySelector("button");

const div = document.querySelector("div");

div.addEventListener("click", function (evento) {
  console.log("clicou na div", evento.currentTarget);
  // console.log("clicou no div", evento.target);
});

butao.addEventListener("click", function (evento) {
  console.log("clicou", evento.currentTarget);
});

setTimeout(function () {
  console.log("setTimeout");
}, 5000);

setInterval(function () {
  console.log("setInterval");
}, 5000);
