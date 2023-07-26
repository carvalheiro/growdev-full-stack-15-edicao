const severinoOOutput = document.querySelector("#output");
const butaoTema = document.querySelector("#tema");
const urlPaisagem = "https://source.unsplash.com/random/800x600";
const urlPedrao = "https://pedroni.dev/";
function limparSeverinoOOutput() {
  severinoOOutput.innerHTML = "";
}

butaoTema.addEventListener("click", function () {
  const jairOBody = document.body;
  // mais trabalhoso mas funciona e faz a mesma coisa que o toggle
  // if (jairOBody.classList.contains("dark")) {
  //   jairOBody.classList.remove("dark");
  // } else {
  //   jairOBody.classList.add("dark");
  // }
  jairOBody.classList.toggle("dark");
});

const butaoPaisagem = document.querySelector("#paisagem");

butaoPaisagem.addEventListener("click", function () {
  limparSeverinoOOutput();
  const imagem = document.createElement("img");
  imagem.setAttribute("src", urlPaisagem);
  severinoOOutput.appendChild(imagem);
});

const butaoCodigoFonteAxios = document.querySelector("#codigo_axios");

butaoCodigoFonteAxios.addEventListener("click", function () {
  limparSeverinoOOutput();
  const promise = axios.get(
    "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"
  );
  // promise.then(function (response) {
  //   const codigoFonte = document.createElement("div");
  //   codigoFonte.textContent = response.data;
  //   severinoOOutput.appendChild(codigoFonte);
  // });
  // mesma requicao porem usando xmlhttprequest
  const request = new XMLHttpRequest();
  request.open("GET", "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js");
});

const butaoPedrao = document.querySelector("#pedrao");

butaoPedrao.addEventListener("click", function () {
  axios.get(urlPedrao).then(function (response) {
    const codigoFonte = document.createElement("div");
    codigoFonte.textContent = response.data;
    severinoOOutput.appendChild(codigoFonte);
  });
});
