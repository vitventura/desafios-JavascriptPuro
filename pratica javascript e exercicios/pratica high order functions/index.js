//uma forma de ultilizar o foreach percorrendo cada elemento, indice e array de uma funçao de callback
//os parametros indice e array sao opcionais
function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["maça", "banana", "laranja", "limao"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}


lista.forEach(exibirElemento);

const personagens = [
   { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
   { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
   { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
   { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
   { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
   { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
   { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
 ]

 const nomes = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  nomes.push(personagem.nome)
}

// map: permite obter um novo array a partir de um array existenste
const nomess = personagens.map(personagem => {
  return personagem.nome
})

const orc = []
for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i]
  if (personagem.raca === "Orc") {
    orc.push(personagem)
  }
}

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(personagem => {
  return personagem.raca === "Orc"
})

let nivelTotal = 0
for (let i = 0; i < personagens.length; i++) {
  nivelTotal += personagens[i].nivel
}
// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
const nivelTotals = personagens.reduce(function (acumulador, personagem) {
  return acumulador + personagem.nivel
}, 0)

const racas = personagens.reduce(function (acumulador, personagem) {
  if (acumulador[personagem.raca]) {
    acumulador[personagem.raca].push(personagem)
  } else {
    acumulador[personagem.raca] = [personagem]
  }
  return acumulador
}, {})


// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
   return a.nivel - b.nivel
 })

var romanToInt = function(s) {
      const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }

    return result;
};