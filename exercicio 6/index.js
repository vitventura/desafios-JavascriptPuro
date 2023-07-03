/*Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número
(de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar
todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável
do tipo string. Depois o programa deve exibir esses resultados e finalizar.*/ 


const numero = prompt("qual numero vc deseja calcular?")

let resultado = ""

for(let fator = 1; fator <=20 ; fator++){
  resultado += "->"  + numero + "*" + fator +  "=" + (numero * fator)+ "\n"}
  alert("resultado da tabuada:" + numero + "\n\n" + resultado)



  
/*Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um
palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O
programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem
dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve
mostrar a palavra lida da esquerda para direita e da direita para esquerda.*/


let palavra = prompt("informe um numero:")

let palavraInvertida = ""

for(let i = palavra.length -1; i >= 0; i--){
  palavraInvertida += palavra[i]
}
console.log(palavraInvertida)

