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
  
