function triangulo(){
  const base = prompt("calcule a base do triangulo:")
  const altura = prompt("calcule a altura do triangulo:")
  return base * altura /2
}

function retangulo(){
  const base = prompt("calcule a base do retangulo:")
  const altura = prompt("calcule a altura do retangulo:")
  return base * altura
}

function quadrado(){
  const lado = prompt("informe o lado do quadrado:")
  return lado * lado
}

function trapezio(){
  const baseMaior = parsefloat(prompt("informe a base maior do trapezio:"))
  const baseMenor = parsefloat(prompt("informe a base menor do trapezio:"))
  const altura = prompt("informe a altura do trapezio:")
  return (baseMaior * baseMenor) * altura /2
}

function circulo(){
  const raio = prompt("informe o raio do circulo:")
  return 3.14 * raio * raio
}

function menu(){
  return prompt("calculadora geometrica! \n" +
                  "1. calcular area triangulo \n" +
                  "2. calcular area retangulo \n" +
                  "3. calcular area quadrado \n" +
                  "4. calcular area trapezio \n" +
                  "5. calcular area circulo \n" +
                  "6. sair \n")
}

function executar(){
  let opcao = ""
  do{
    opcao = menu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = triangulo()
        break

        case "2":
        resultado = retangulo()
        break

         case "3":
        resultado = quadrado()
        break

         case "4":
         resultado = trapezio()
          break

         case "5":
         resultado = circulo()
         break

        case "6":
        alert("saindo..")
        break
        default:
          alert("opcao invalida!")
    }
     if(resultado){
    alert("resultado:" + resultado)
     }

  }
  while(opcao !== 6)
}
 executar()

