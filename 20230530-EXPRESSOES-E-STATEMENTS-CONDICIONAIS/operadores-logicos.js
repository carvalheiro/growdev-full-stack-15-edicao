var nome, time;
time = "gremio"
time = "internacional"
time = "juventude"
time = "caxias"
nome = "Thiago"

if (time === "gremio") {
  console.log(nome + " é gremista");
} else if (time === "internacional") {
  console.log(nome + " é colorado");
} else if (time === "juventude") {
  console.log(nome + " é juventudista");
} else {
  console.log(nome + " deve repensar o time que torce")
}

switch (time) {
  case "gremio": {
    console.log(nome + " é gremista");
    break;
  }
  case "internacional" === 1: {
    console.log(nome + " é colorado");
    break;
  }
  case "juventude": {
    console.log(nome + " é juventudista");
    break;
  }
  default: {
    console.log(nome + " deve repensar o time que torce")
  }
}

var situacao;
situacao = 'reproved'
// 'approved' 'reproved' 'pending'

switch (situacao) {
  case 'approved': {
    console.log('Aprovado');
  }
  case 'reproved': {
    console.log('Reprovado');
  }
  case 'pending': {
    console.log('Pendente');
  }
  default: {
    console.log('Status não identificado');
  }
}
    