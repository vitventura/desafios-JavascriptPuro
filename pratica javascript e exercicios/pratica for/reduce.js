//retornar a soma de um array de numeros

//oque eu tenho?

const numeros = [0, 4, 2, 4, 7]
//oque eu espero?, 17

let acumulador = 0
for(let i = 0; i < numeros.length; i++){
     acumulador += numeros[i]
}
console.log(acumulador)

//aqui acumulador e como se fosse  a variavel criada acima no loop for
//eo numero atual o proprio loop
//acumulador começa em 0 e numero atual em 4
numeros.reduce(function(acumulador, numeroAtual ){
    return acumulador + numeroAtual
})

//carrinho de compras
//retornar o total a pagar

//o que eu tenho?

const itens = [
 {description: 'pen', quantity: 1, price: 3} ,
 {description: 'rule', quantity: 2, price: 5} ,
 {description: 'erase', quantity: 2, price: 6} ,    
]

const total = itens.reduce(
     (soma, itemAtual) => {return soma +
     itemAtual.quantity *
      itemAtual.price}, 0)

//o que espero?, 25

//contador de names por iniciais

//oque eu tenho?
const names = ["daniel","maria", "marta", "juca", "joao", "jessica"]

const namesCount = names.reduce((count, nomeAtual) =>{
       const firstLetter = nomeAtual[0].toLowerCase()
       if(count[firstLetter]){
        count[firstLetter]++
      }else{
        count[firstLetter] = 1
      }
      return count
}, {})
//esperado {d:1, m:2, j:3}

//a partir de um objeto de pessoas, retornar um objeto com um contador de pessoa por idade
//oque eu tenho?

const pessoas = [
     {nome: 'daniel', idade: 28},
     {nome: 'maria', idade: 29},
     {nome: 'maria', idade: 29},    
]

const porIdade = pessoas.reduce((pessoasIdade, pessoaAtual) =>{
    pessoasIdade[pessoaAtual.idade] =  pessoasIdade[pessoaAtual.idade] || []
    pessoasIdade[pessoaAtual.idade].push(pessoaAtual.nome)
}, {})
 

//esperado: {'28': ['daniel'], '29': ['maria', 'maria']}

//obter o dobro dos numeros positivos
const numbers = [-10, 0, 2, 4]
//esperado: [4, 8]

//metodo com filter e map
//const doublePositive = numbers.filter(n => n > 0).map(n => n * 2)


const double = numbers.reduce((arrAcumulado, currentNumber) =>{
    if(arrAcumulado > 0){
      arrAcumulado.push(currentNumber * 2)
    }
    return arrAcumulado
    //ultilizando return para ele sempre continuar a interaçao
}, [])