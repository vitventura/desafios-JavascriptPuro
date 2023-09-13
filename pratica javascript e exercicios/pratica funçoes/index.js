function calcularAreaTriangulo(base, altura){
    base = prompt("informe a base do triangulo:")
    altura = prompt ("informe a altura do triangulo:")
    return base * altura /2
}

function calcularAreaRetangulo(base, altura){
base = prompt("informe a base do retangulo:")
altura = prompt ("informe a altura do retangulo:")
return base * altura 
}

function calcularAreaQuadrado(lado){
    lado = prompt("informe o lado do quadrado: ")
    return lado * lado
}

function calcularAreaTrapezio(baseMaior, baseMenor, altura){
    baseMaior = parseFloat(prompt("informe a base maior do trapezio"))
    baseMenor = parseFloat(prompt("informe a base menor do trapezio"))

    altura = prompt("informe a altura do trapezio:")
    return (baseMaior + baseMenor) * altura / 2
}   

function calcularAreaCirculo(raio){
    raio = prompt("informe o raio do circulo:")
    return (3.14 * raio * raio)
}


function exibirMenu(){
    return prompt(
        "  calcular area geometrica:\n" +
        "1. calcular area de triangulo\n" +
        "2. calcular area de retangulo\n" +
        "3. calcular area de quadrado\n" +
        "4. calcular area de trapezio\n" +
        "5. calcular area de circulo\n" +
        "6. sair"
    )
}
let opcao = ""
function executar(){ 
    do{
        opcao = exibirMenu()
        let resultado

        switch(opcao){
             case "1":
              resultado = calcularAreaTriangulo()
              break

              case "2":
              resultado = calcularAreaRetangulo()
              break

              case "3":
              resultado = calcularAreaQuadrado()
              break

              case "4":
              resultado = calcularAreaTrapezio()
              break

              case "5":
              resultado = calcularAreaCirculo()
              break

              case "6":
              alert("saindo...")
              break
              default:
                alert("opcao inivalida!")
        }

        if(resultado){
            alert("resultado:" + resultado)
        }
    }while(opcao !== 6)
}
executar()
