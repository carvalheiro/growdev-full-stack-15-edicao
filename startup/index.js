import exp from "constants";
import express from "express";
import { compareAsc } from "date-fns";
import { REFUSED } from "dns";

// APP EXPRESS
const app = express();

// custom made middleware to wait for the body to be parsed
app.use(express.json());

// MIDDLEWARES
app.use(function (requisicao, resposta, proximo) {
  console.log("passou pelo middleware");
  proximo();
});

// ROTAS
app.get("/teste/:parametro/uva", function (requisicao, resposta) {
  console.log(requisicao.params);
  console.log(requisicao.body);

  console.log("passou pela rota /");
  resposta.send("Olá mundo");
});

app.post("/teste", function (requisicao, resposta) {
  console.log(requisicao.body);
  resposta.send("Olá mundo");
});

app.put("/usuario/:idDoUsuario", function (requisicao, resposta) {
  console.log(requisicao.params);
  resposta.send("Atualiando usuário" + requisicao.params.idDoUsuario);
});

app.put(
  "/usuario/:idDoUsuario/:idDoRecado/:idDoOuvinte",
  function (requisicao, resposta) {
    const novoConteudoDoRecado = requisicao.body.conteudoDoRecado;
    resposta.send("Atualizando recados");
  }
);
app.listen(3001, function () {
  console.log("servidor rodando na porta 3001: url http://localhost:3001");
});
