/*Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O
programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de
nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma
das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção
escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar
acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo
que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado*/


let opcao = ""
do{
   opcao = prompt("seja bem vindo\n" +
    "\n1.opçao um" +
    "\n2.opçao dois" +
    "\n3.opçao tres" +
    "\n4.opçao quatro" +
    "\n5.vc escolheu encnerrar")


  switch(opcao){
    case "1":
      alert("vc escolheuu a opçao 1")
      break
      case "2":
      alert("vc escolheuu a opçao 2")
      break
      case "3":
      alert("vc escolheuu a opçao 3")
      break
      case "4":
      alert("vc escolheuu a opçao 4")
      break
      case "5":
      alert("vcoe escolheuu encerrar...")
      alert("encerradno...")
      break
      default:
        alert("opçao invalida...")

  }
}while(opcao !== 5)
  



/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro
disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e
remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve
perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então
mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover
dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

let saldo = prompt("qual o saldo inicial?")
let opçao = ""
do{
  opçao = prompt ( "saldo incial:"+ saldo +
    "\n1. adicionar dinheiro" +
                  "\n2. remover dinheiro" +
                  "\n3. sair" )
  switch(opçao){
    case "1": saldo += parsefloat ( prompt ("quanto vc deseja adicionar?"))
    break
    case "2": saldo -= prompt("quanto vc deseja retirar?")
    break
    case "3":alert("encerrando...")
    default:alert("finalizando...")
  }

}while(opçao !=="3")