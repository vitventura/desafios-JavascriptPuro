/*Escreva um programa em javascript que permita inserir
o nome e a velocidade de dois veículos e exiba na tela
uma mensagem dizendo qual dos dois é mais rápido
(ou que as velocidades são iguais se este for o caso)*/


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



/*Escreva um programa que permita inserir o nome e o poder de ataque de um
personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de
outro personagem e se ele possui um escudo, e então calcule a quantidade de dano
causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo,
o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o
dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de
vida do personagem defensor e exibir na tela a quantidade de dano e as informações
atualizadas de ambos os personagens.*/

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

