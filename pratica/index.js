/*let opcao = ""

do{
    opcao = prompt("escolha uma das opcoes:\n" +
  "\n1.opcao um" +
  "\n2.opcao 2" +
  "\n3.opcao 3" +
  "\n4.opcao 4" +
  "\n5. encerrar" 
  ,
)
switch(opcao){
case "1":alert("voce escolheu a opcao 1")
break
case "2":alert("voce escolheu a opcao 2")
break
case "3":alert("voce escolheu a opcao 3")
break
case "4":alert("voce escolheu a opcao 4")
break
case "5":alert("voce escolheu encerrar")
alert("encerrando")
break
default:("opcao invalida!")
}

}while(opcao !== "5")

let saldo = prompt("qual o saldo incial?")
saldo = parseFloat(saldo)
let opcao = ""
do{

    opcao = prompt("saldo incial:"
     + saldo +
    "\n1.adicionar dinheiro" +
    "\n2. remover dinheiro" +
    "\n3. sair")

    switch(opcao){
        case "1": saldo += parseFloat( prompt("quanto voce deseja adicionar?"))
        break
        case "2": saldo -= prompt("quanto voce deseja remover?")
        break
        case "3":alert("encerrando...")
        break
        default:alert("opcao invalida!")
    }
} while(opcao !== "3")


let numeroUsado = prompt("informe um numero ")
let numero = ""

for(let i = 1; i <= 20; i++){
numero += "->" + numeroUsado + "*" + i + "=" + (numeroUsado * i);
}
alert("o resultado e:" + numeroUsado + "\n\n" + numero)





for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
    
    let j = 0;
    do {
      console.log("Valor de j:", j);
      j++;
    } while (j < 7);
  }

  let i = 0;
do {
  console.log("Valor de i:", i);
  
  for (let j = 0; j < 3; j++) {
    console.log("Valor de j:", j);
  }
  
  i++;
} while (i < 5);*/

var idade = 17;
var possuiAutorizacao = true;

if (!(idade >= 17) && !possuiAutorizacao) {
  console.log("Não pode entrar");
} else {
  console.log("Pode entrar");
}


// Função para gerar um número aleatório entre 1 e 10
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 10) + 1;
}

// Array para armazenar os números gerados
var numerosGerados = [];

// Loop para gerar 5 números únicos
while (numerosGerados.length < 5) {
  var numero = gerarNumeroAleatorio();

  // Verifica se o número já foi gerado anteriormente
  if (!numerosGerados.includes(numero)) {
    numerosGerados.push(numero);
    console.log("Número gerado: " + numero);
  }
}
