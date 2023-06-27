let medidas = prompt("insira uma medida em metros:")

const opcoes = prompt("escollha para qual unidade de medida voce deseja converter em metros: \n" +
"1 milimetro" +
"- centimetro" +
"- decimetro" +
"- decametro" +
"- hectometro" +
"- quilometro" 
  
)

switch (opcoes){
 case "1": alert("resultado" + medidas + "m" + medidas * 1000 + "mm")
 break
 case 2: alert("resultado" + medidas + "m" + medidas * 100 + "cm")
 break
 case 3: alert("resultado" + medidas + "m" + medidas * 10 + "dm")
 break
 case 4: alert("resultado" + medidas + "m" + medidas / 10 + "dam")
 break
 case 5: alert("resultado" + medidas + "m" + medidas / 100 + "hm")
 break
 case 6: alert("resultado" + medidas + "m" + medidas / 1000 + "km")
 break
 default:alert("opcao invalida!")
}