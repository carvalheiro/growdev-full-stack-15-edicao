var caixa = 10;
var valorARetirar = 5;

var eMultlipoDe5 = valorARetirar % 5 === 0;
var temValorDisponivel = caixa >= valorARetirar + 4.5;

if (eMultlipoDe5 && temValorDisponivel) {
  caixa = caixa - valorARetirar - 4.5;
  console.log("Seu novo saldo é: " + caixa);
} else {
  if (temValorDisponivel === false) {
    console.log("Não há valor disponível caixa");
  } else {
    console.log("Não é múltiplo de 5");
  }
}
