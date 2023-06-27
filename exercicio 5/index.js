let saldo = prompt("qual o saldo inicial?")
let opcao = ""
do{
  opcao = prompt ( "saldo incial:"+ saldo +
    "\n1. adicionar dinheiro" +
                  "\n2. remover dinheiro" +
                  "\n3. sair" )
  switch(opcao){
    case "1": saldo += parsefloat ( prompt ("quanto vc deseja adicionar?"))
    break
    case "2": saldo -= prompt("quanto vc deseja retirar?")
    break
    case "3":alert("encerrando...")
    default:alert("finalizando...")
  }

}while(opcao !=="3")