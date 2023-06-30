"use strict";

const listaDeVeiculos = [
  {
    id: 1,
    marca: "Honda",
    valor: 40000,
  },
  {
    id: 2,
    marca: "Fiat",
    valor: 30000,
  },
  {
    id: 3,
    marca: "Honda",
    valor: 50000,
  },
];

const listarVeiculos = function (listaASerLogada) {
  // lista todos os veiculos cadastrados no sistema
  // listaASerLogada é um parametro obrigatório para a função
  // listaASerLogada tem que ser um array de veiculos
  for (const carro of listaASerLogada) {
    console.log(
      "ID: " +
        carro.id +
        " | Marca: " +
        carro.marca +
        " | Valor: " +
        carro.valor
    );
  }
};

alert(
  "Bem vindo ao sistema de cadastro de veículos. Atualmente você possui " +
    listaDeVeiculos.length +
    " veículos cadastrados."
);
let comando = "";
let proximoIDCarro = 0;
do {
  console.log("-------------------------------------------");
  comando = prompt(
    "Digite a opção a seguir:\n 1 - Cadastrar veículo. \n 2 - Listar todos os veículos. \n 3 - Filtrar veículos por marca.\n 4 - Atualizar veículo.\n 5 - Remover veículo.\n 6 - Sair do sistema.\n"
  );
  switch (comando) {
    case "1": {
      const marca = prompt("Digite a marca do veículo");
      const valor = prompt("Digite o valor do veículo");
      const carro = {};
      carro.marca = marca;
      carro.valor = valor;
      carro.id = proximoIDCarro;
      listaDeVeiculos.push(carro);
      console.log("Veículo cadastrado com sucesso!");
      proximoIDCarro++;
      break;
    }
    case "2":
      // 2 - Listar todos os veículos
      // -> Ao entrar nesta opção o sistema deve listar os veículos
      // com o seguinte layout:
      // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
      // Preço: R$40.000
      // ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
      // Preço: R$40.000
      console.log("Lista de Veículos");
      listarVeiculos(listaDeVeiculos);
      break;
    case "3":
      // 3 - Filtrar veículos por marca
      // -> Ao entrar nesta opção o sistema deve pedir para o
      // usuário digitar a marca que quer filtrar
      // -> Deve ser listado os veículos que forem da mesma marca
      // -> A lista deve ter o seguinte layout:
      // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
      // ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
      console.log("3 - Filtrar veículos por marca");
      const filtro = prompt("Digite a marca que deseja filtrar");
      /* opcao 1
      const listaFiltrada = [];
      for (const carro of listaDeVeiculos) {
        if (carro.marca === filtro) {
          listaFiltrada.push(carro);
        }
      }
      */
      const listaFiltrada = listaDeVeiculos.filter(function (carro) {
        if (carro.marca.toLowerCase() === filtro.toLowerCase()) {
          return true;
        } else {
          return false;
        }
      });
      if (listaFiltrada.length === 0) {
        console.log("Nenhum veículo encontrado");
      } else {
        debugger;
        listarVeiculos(listaFiltrada);
      }

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
