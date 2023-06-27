let nomeVeiculo1 = prompt("informe o nome do primeiro veiculo:")
const veiculo1 = parseFloat(prompt("informe a velocidade do primeiro veiculo:"))

let nomeVeiculo2 = prompt("informe o nome do segundo veiculo:")
const veiculo2 = parseFloat(prompt("informe a velocidade do segundo veiculo:"))

if(veiculo1 > veiculo2){
    alert(
        "\n o" + nomeVeiculo1 + "\n e mais rapido que:" + nomeVeiculo2
    )
}else if (veiculo2 > veiculo1){
    alert(
        "\n o" + nomeVeiculo2 + "\n e mais rapido que:" + nomeVeiculo1
    )
}if(veiculo1 === veiculo2){
    alert(
        "\n o" + nomeVeiculo2 + "e:" + nomeVeiculo1 + "possuem velocidades iguais"
    )
}

const personagemUm = prompt("qual o nome do primeiro personagem?")
const poderDeAtaque = prompt("qual o seu poder de ataque?")

const personagemDois = prompt("qual o nome do segundo personagem?")
let pontosDeVida =  prompt("quantos pontos de vida ele tem?")
const poderDeDefesa =  prompt("qual o seu poder de defesa?")
const possuiEscudo =  prompt("voce possui escudo? (sim/nao)")

let danoCausado = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "nao"){
   danoCausado = poderDeAtaque - poderDeDefesa
}else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(personagemUm + "causou" + danoCausado + "pontos de vida em" + personagemDois)

   alert(
    personagemUm + "\npontos de ataque:" + poderDeAtaque +
    personagemDois + "\n pontos de vida" + pontosDeVida +
    "\n\n poder de defesa:" + poderDeDefesa +
    "\n\n possui escudo:" + possuiEscudo
   )

