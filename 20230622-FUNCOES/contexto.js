debugger;
function teste() {
  var vata = "";
  console.log("dentro de teste");
  teste2();
}

const valor = teste;

const teste2 = function DIFERE() {
  console.log(vata, "dentro de teste2");
};

valor();
