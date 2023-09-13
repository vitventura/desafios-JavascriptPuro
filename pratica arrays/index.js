/*const arr = ["frodo", "sam", "merry", "pippin", "gandalf"]

//adicionar elementos no final de um array
//push =>
arr.push("boromir")
console.log(arr)

//adicionar elementos no inicio do array
//unshift
arr.unshift("boromir")
console.log(arr)

//remove o ultimo elemento de um array
//pop
arr.pop()

//remove o primeiro elemento de um array
//shift
arr.shift()

//pesquisar por um elemento devolvendo true ou false
//includes
arr.includes("boromir")

//pesquisar por um elemento devolvendo o seu indice/posição exata
//indexOf
const indice =arr.indexOf("boromir")

//cortar/copiar e concatenar | o slice por default nao modifica o array!
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)

//concatenar dois arrays, dessa forma essa alteraçao fica guardada dentro da variavel socieadade
//concat
const sociedade = hobbits.concat(outros, "boromir")

//substituiçao dos elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "boromir, o cinzento")

//iterar sobre os elementos
for (let i = 0; i < sociedade.length; i++){
    const elemento = sociedade[i]
    console.log(elemento + "esta na posçao" + i)
}

let fila = []
let opcao = ""
 do{
    let pacientes = ""
   for(i = 0; i < fila.length; i++){
     pacientes += (i+1) + "º -" + fila[i] + "\n"
   }

   opcao = prompt("\n.1adicionar pacientes" + pacientes + "\n" +
                  "\n.2consultar pacientes" + "\n.3 sair"  )

   switch(opcao){
    case "1":
    let novoPaciente = prompt("adicionar paciente")
    fila.push(novoPaciente)
    break
    case "2":
    let consultarPaciente = fila.shift()
    alert(consultarPaciente + "foi removido...")
    break
    case "3":
    alert("voce escolheu sair..")
    break
   }

 }while(opcao !== 3)
 

 */

//como achar o maior valor de um elemento em um array sem usar funçoes
var arr = [1, 2, 3]
let itens = arr[0]
arr.forEach((item) =>{
   if(item > itens){
     itens = item
   }
})
console.log({arr, itens})


