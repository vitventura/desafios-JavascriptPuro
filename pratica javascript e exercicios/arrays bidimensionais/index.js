function sigla (estado){
  const estados = {
    'santa': 'sc',
    'bahia': 'ba',
    'rio': 'rj',
  }
  return estados[estado] || "sifgla nao enconreada"
}
sigla("santa")
const values = 'virtror'.split()
console.log(values)
let value = values.replace().reverse()

function small_largest(numbers)

{
  let largetts = numbers[0]
  let smaleest = numbers[0]
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largetts){
      largetts = numbers[i]
    }
  }

  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smaleest ){
      smaleest = numbers[i]
    }
  }
  console.log({'largest': largetts, 'smalest': smaleest})
}
small_largest([10,5,25,3,17])

