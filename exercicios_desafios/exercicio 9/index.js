/*Escreva um programa em javascript para calcular a área de diferentes
formas geométricas. O programa deve iniciar com um menu contendo as
diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para
separar os procedimentos. O programa também deve ter uma opção de
“Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/

function calcularAreaTriangulo(base, altura) {
  base = prompt("calcule a base do triangulo:");
  altura = prompt("calcule a altura do triangulo:");
  return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
  base = prompt("calcule a base do retangulo:");
  altura = prompt("calcule a altura do retangulo:");
  return base * altura;
}

function calcularAreaQuadrado(lado) {
  lado = prompt("informe o lado do quadrado:");
  return lado * lado;
}

function calcularAreaTrapezio(baseMaior, baseMaior, altura) {
  baseMaior = parsefloat(prompt("informe a base maior do trapezio:"));
  baseMenor = parsefloat(prompt("informe a base menor do trapezio:"));
  altura = prompt("informe a altura do trapezio:");
  return (baseMaior * baseMenor * altura) / 2;
}

function calcularAreaCirculo(raio) {
  raio = prompt("informe o raio do circulo:");
  return 3.14 * raio * raio;
}

function menu() {
  return prompt(
    "calculadora geometrica! \n" +
      "1. calcular area triangulo \n" +
      "2. calcular area retangulo \n" +
      "3. calcular area quadrado \n" +
      "4. calcular area trapezio \n" +
      "5. calcular area circulo \n" +
      "6. sair \n"
  );
}

function executar() {
  let opcao = "";
  do {
    opcao = menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;

      case "2":
        resultado = calcularAreaRetangulo();
        break;

      case "3":
        resultado = calcularAreaQuadrado();
        break;

      case "4":
        resultado = calcularAreaTrapezio();
        break;

      case "5":
        resultado = calcularAreaCirculo();
        break;

      case "6":
        alert("saindo..");
        break;
      default:
        alert("opcao invalida!");
    }
    if (resultado) {
      alert("resultado:" + resultado);
    }
  } while (opcao !== 6);
}
executar();
