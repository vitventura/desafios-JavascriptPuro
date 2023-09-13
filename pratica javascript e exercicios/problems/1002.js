export function problem(lines) {
  const raio = Number(lines[0]);//number converte o parametro lines para numero de ponto flutuante como 3.1452
                                //[0] pega a primeira posiçao do indice lines ou seja l = 0

  const pi = 3.14159;
  const area = pi * raio ** 2; // ** faz a divisao ao quadrado da equação

  console.log(`A=${area.toFixed(4)}`); // toFixed O método converte um número em uma cadeia de caracteres.toFixed()
                                          //O método arredonda a cadeia de caracteres para um número especificado de decimais. ou seja limitamos os numeros decimais em 4
}
