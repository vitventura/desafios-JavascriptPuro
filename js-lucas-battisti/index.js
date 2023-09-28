

var vitor = 'vitor'
var ola;
ola = vitor //ola passa a ter o valor de vitor
//tipos de dados
null
undefined
true, false
var obj = {
    nome : 'vitor',
    idade: 21
}
 //mudar valores de um objeto
 obj.nome = 'andre'

 //criar propriedade
 obj.graduaçao = true

 //arrays
 var arr = [1, 2, 3, 4]

 //adicionar um valor no array com um indice que nao existe
 arr[5] = 5 // pegamos o indice 5 que nao exxiste e atribuimos o valor 5 a ele
 //mudar valores de um array assim como nas variaveis
 arr[0] = 'teste' //indice 0 que no caso eo 1 passa a ter o valor 'teste'

 if(true){
    arr.push(obj)
 }

 // ! && ||

 while(x <= 5){
    console.log('passou')
    x++

 }

 var nome = 'vitor'
 if(!(nome === 'vitor')){
    console.log('voce passou')
 }

 var arr = ['vitor', 'teste', 'testando']
var calcuarValor = 0;
 while(calcuarValor <= 5){
    
    calcuarValor ++
    console.log(arr[calcuarValor])
    

 }
 console.log(calcuarValor)
var x = 1;
j = 2
 while(x <= 100 || x === 99){
     x++

     if(x < j ){
      x += j
      break

     }
     console.log('CONTINUE')
     continue
   

 }

 var lista = ['vitor', 'laranja']

 var listaUl = document.createElement('ul')
 var body = document.getElementsByTagName('body')
 body[0].appendChild(listaUl)

 for(let i = 0; i < lista.length; i++){
   var li = document.createElement('li')
   var textoLi = document.createTextNode(lista[i])

   li.appendChild(textoLi)
   body[0].appendChild(li)
 }


 var x = '122'
 if( i < 0){

let u = x
u+=x
 }

 // metodos de transformar strings
 var frase = 'o rato roeu'

 var frasis = frase.slice(1,4 )
 console.log(frasis)
 var frases = frase.replace('roeu', 'ratao')

//adicionar elementos no meio de um array
 var hello = [1, 2 , 3]
 hello.splice(1, 0 , 4)

 console.log(frases)
 //metodos de modificaçao de strings

 var car = {
   hello: 'volerd'
 }

 car[hello] = 5

 function achar (letra , frase ){
   let cont = 0
       for(let i = 0; i < frase.length; i++){
         if(letra === frase[i]){
            cont++
         }
       }
       console.log(cont)
 }
 console.log(achar('o', 'leonardo'))

 function percentage (nominator, denominator){
   var result = nominator / denominator
   console.log(nominator + "equivale a " + result*100 + "% de" + denominator)
 }
 percentage(30, 50)



 var persons = [
   {itsMe: true, admin: true},
   {itsMe: false, admin: false},
   {itsMe: true, admin: true}
 ]
 console.log(persons)
 
   persons.sort(function(a, b){
      if(a.itsMe && !b.itsMe){
         return -1
      }else if(!a.itsMe && b.itsMe){
         return 1
      }else{
         return 0 
      }
   })
 console.log(persons)
 

 