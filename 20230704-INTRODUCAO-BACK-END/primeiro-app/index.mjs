import express from "express";

let quantidadeDeRequisicoes = 0;
const app = express();

app.get("/", function (req, res) {
  quantidadeDeRequisicoes++;
  res.send("fdsafadsfdsa");
  console.log("quantidadeDeRequisicoes", quantidadeDeRequisicoes);
});

app.post("/", function (req, res) {
  quantidadeDeRequisicoes++;
  res.send("post");
  console.log("quantidadeDeRequisicoes", quantidadeDeRequisicoes);
});

app.listen(3000, function () {
  console.log("ouvindo na porta 3000. url: http://localhost:3000");
});
