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