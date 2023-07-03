/*Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O
programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O
menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo
paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro
paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser
encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/ 



let fila = []
let opcao = ""

do{
  let pacientes = ""
  for(let i=0 ; i < fila.length; i++){
    pacientes += (i+1) + "º -" + fila[i] + "\n"
  }

  opcao = prompt(
    "pacientes:\n" + pacientes +
    "\n1. adicionar novo paciente"+ "\n2. consultar paciente" + "\n3. sair")
  switch(opcao){
    case "1":
      const novoPaciente = prompt("qual o nome do novo paciente?")
      fila.push(novoPaciente)
      break
      case "2":
        const pacienteConsultado = fila.shift()
      alert(pacienteConsultado + "foi removido..")
      break
      case "3":
      alert("vc escolheu sair.")
      break
      default:
        alert("opçao invalida...")

  }
}while(opcao !== 3)




/*Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando
na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de “Adicionar
uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o
nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a
carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao
escolher a opção de “Sair”, caso contrário deve voltar ao menu. */


let cartas = []
 let opçao = ""

 do{
  
  opcao = prompt("\n.1adicionar cartas" + cartas.length + "\n" +
  "\n.2puxar carta" + "\n.3 sair"  )

switch(opçao){
case "1":
let adicionarCarta = prompt("qual o nome da carra a ser adicionada?")
cartas.push(adicionarCarta)
break
case "2":
let puxarCarta = cartas.shift()
alert(puxarCarta + "voce foi removido...")
}
  }while(opçao !== 3)
  
