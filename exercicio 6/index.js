const numero = prompt("qual numero vc deseja calcular?")

let resultado = ""

for(let fator = 1; fator <=20 ; fator++){
  resultado += "->"  + numero + "*" + fator +  "=" + (numero * fator)+ "\n"}
  alert("resultado da tabuada:" + numero + "\n\n" + resultado)
