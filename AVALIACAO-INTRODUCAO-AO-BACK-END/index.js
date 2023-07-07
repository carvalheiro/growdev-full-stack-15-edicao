import express from "express";
/* lista de ususarios
   cada item é um objeto
   o objeto possui as seguintes propriedades
    - nome
    - identificador (unico para cada usuario)
    - email
    - senha
*/
const usuarios = [];
let contador = 1;
const app = express();

app.get("/cadastro-de-usuario", function (requisicao, resposta) {
  const novoUsuario = {
    nome: "teste",
    email: "teste@teste.com",
    senha: "teste2",
    identificador: contador,
  };
  let possuiMesmoEmail = false;
  for (const usuario of usuarios) {
    if (usuario.email === novoUsuario.email) {
      possuiMesmoEmail = true;
    }
  }

  if (possuiMesmoEmail) {
    resposta.status(400);
    resposta.send("Já existe um usário cadastrado com esse email");
  } else {
    resposta.send("Usuário cadastrado com sucesso");
    usuarios.push(novoUsuario);
  }

  console.log("possui mesmo", possuiMesmoEmail);
  console.log(usuarios);
  // AQUI DENTRO VAI A REGRA PARA CADASTRAR USUÁRIOS
  contador++;
});

app.listen(3000, function () {
  console.log("Aplicação está rodando na porta 3000: http://localhost:3000");
  console.log("ip local: http://:3000");
});
