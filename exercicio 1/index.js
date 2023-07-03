/*Escreve um programa em javascript que permita inserir dois
valores numéricos e então calcule o resultado das quatro
operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.*/

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


/*Escreva um programa em javascript que permita salvar informações de
um recruta. As informações a serem salvas são:

- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu
campo de estudo e sua idade (apenas baseada no ano de nascimento).*/

const nome = prompt("qual o seu nome?")
const sobreNome = prompt("qual o seu sobrenome?")
const campoDeEstudo = prompt("qual o seu campo de estudo?")
const aniversario = prompt("qual sua data de aniversario?")

alert(
    "\n primeiro nome:" + nome +
    "\n sobreNome:" + sobreNome +
    "\n campo De Estudo:" + campoDeEstudo +
    "\n data de aniversario:" + aniversario 
)

