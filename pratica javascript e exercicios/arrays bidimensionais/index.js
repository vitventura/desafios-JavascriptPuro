/*const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += "(" + vaga.candidatos.length + " candidatos)\n";

    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("insira um nome para a vaga");
  const descricao = prompt("insira uma descricao para a vaga");
  const dataLimite = prompt("informe uma data limite (dd/mm/aaaa) para a vaga");

  const confirmaçao = confirm(
    "voce deseja salvar esta vaga com estas informaçoes?\n" +
      "nome:" +
      nome +
      "\ndescricao:" +
      descricao +
      "\ndataLimite:" +
      dataLimite
  );
   
  if(confirmaçao){
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga)

    alert("vaga crianda!")
  }

}

function exibirVaga() {
  const indice = prompt("informe o indice da vaga que deseja exibir");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => {
    return textoFinal + "\n - " + candidato;
  }, "");

  alert(
    `vaga n º${indice}
    \nnome:${vaga.nome}
    \ndescricao:${vaga.descricao}
    \ndata Limite:${vaga.dataLimite}
    \nnumero de candidatos:${vaga.candidatos.length}
    \ncandidatos inscritos:${candidatosEmTexto}`
  );
}

function inscreverCandidato() {
  const candidato = prompt("informe o nome do candidato");
  const indice = prompt(
    "informe o indice da vaga para qual o candidato deseja se inscrever"
  );
  const vaga = vagas[indice];

  const confirmaçao = confirm(
    `deseja inscrever o candidato${candidato}
    na vaga${indice}?
    \nnome: ${vaga.nome}
    \ndescricao: ${vaga.descricao}
    \ndata limite: ${vaga.dataLimite}`
  );

  if (confirmaçao) {
    vaga.candidatos.push(candidato);
    alert("inscriçao realizada!");
  }
}

function excluirVaga() {
  const indice = prompt("informe o indice da vaga que deseja excluir");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    `tem certeza que deseja excluir a vaga${indice}?
    \nnome: ${vaga.nome}
    \ndescricao: ${vaga.descricao}
    \ndata limite: ${vaga.dataLimite}`
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("vaga deletada!");
  }
}

function exibirMenu() {
  const opcao = prompt(
    "cadastro de vagas de emprego!" +
      "\n1. listar vagas" +
      "\n2. criar vaga" +
      "\n3. visualizar vaga" +
      "\n4. inscrever candidado a uma vaga" +
      "\n5. deletar vaga" +
      "\n6. sair"
  );

  return opcao;
}

function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;

      case "2":
        novaVaga();
        break;

      case "3":
        exibirVaga();
        break;

      case "4":
        inscreverCandidato();
        break;

      case "5":
        excluirVaga();
        break;

      case "6":
        alert("saindo...");
        break;
    }
  } while (opcao !== "6");
}

executar();
*/