"use strict";
let comando = "";
do {
  comando = prompt(
    "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
  );
  switch (comando) {
    case "1":
      console.log("1 - Cadastrar veículo");
      break;
    case "2":
      console.log("2 - Listar todos os veículos");
      break;
    case "3":
      console.log("3 - Filtrar veículos por marca");
      break;
    case "4":
      console.log("4 - Atualizar veículo");
      break;
    case "5":
      console.log("5 - Remover veículo");
      break;
    case "6":
      console.log("sair do programa");
      break;
    default:
      console.log("comando invalido");
      break;
  }
} while (comando !== "6");
