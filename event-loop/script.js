console.log("executou");
const button = document.getElementById("teste");
button.addEventListener("click", function () {
  console.log("clicou");
});
console.log(button);
console.log("final do arquivo");
setInterval(function () {
  console.log("executo a cada 1 segundos");
}, 1000);
setTimeout(function () {
  console.log("executo");
}, 5000);
