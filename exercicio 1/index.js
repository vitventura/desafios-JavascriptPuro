const entrada1 = prompt ("qual o primeiro numero?")
const entrada2 = prompt ("qual o segundo numero?")

const v = parseFloat(entrada1)
const d = parseFloat(entrada2)


const soma = v + d
const subtracao = v - d
const multiplicaçao = v * d
const divisao = v / d

alert(
   "\nsome:" + soma +  
   "\nmiltiplicacao: " + multiplicaçao +
   "\ndivisao: " + divisao +
   "\nsubtrqaçao: " + subtracao
)