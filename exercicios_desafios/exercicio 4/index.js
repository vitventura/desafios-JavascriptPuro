/*Escreva um programa em javascript que peça o nome de um turista e então
pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o
nome da cidade e o armazene em uma variável, e então continue perguntando se
o turista visitou alguma outra cidade até que a resposta seja não. No fim, o
programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/


const turista = prompt("e ai, turista qual eo seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt ("voce visitou alguma cidade?(sim/nao)")

while (continuar == "sim"){
  let cidade = prompt ("qual eo nome da cidade visitada?")
  //cidades = cidade +...
  cidades += " -" + cidade + "\n"
  contagem ++
  continuar = prompt("voce visitou alguma outra cidade?(sim/nao)")
}
alert(
  "turista:" + turista +
  "\nquantidade de cidades visitadas:" + contagem +
  "\ncidades visitadas:\n" + cidades
  )