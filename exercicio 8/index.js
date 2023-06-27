let imoveis = []
let opcao = ""

do{
  opcao = prompt("imoveis cadastrados:" + imoveis.length + 
                  "\n\n1. novo imovel" + "2. listar imoveis" + "sair.")
     
     switch (opcao){
       case "1":
        const imovel = {}
        imovel.proprietario = prompt("informe o nome do proprietario do imovel:")
        imovel.quarto = prompt("quantos quartos possui o imovel?")
        imovel.banheiro = prompt("qunatos banheiros possui o imovel?")
        imovel.garagem = prompt("o imovel possui garagem? (sim/nao)")

        const confirmaçao = confirm(
          "deseja salvar este imovel?\n" +
          "proprietario:\n" + imovel.proprietario +
          "quarto:\n" + imovel.quarto +
          "banheiros:\n" + imovel.banheiro +
          "possui garagem:\n" + imovel.garagem
        )

        if(confirmaçao){
          imoveis.push(imovel)
        }else{
          alert("voltando ao menu...")
        }
       case "2":
        for(let i = 0; i < imoveis.length; i++){
          alert(
            "imovel" + (i + 1) +
            "\nproprietario:" + imoveis[i].proprietario +
            "\quartos:" + imoveis[i].quarto +
            "\banheiros:" + imoveis[i].banheiro +
            "\possui garagem?:" + imoveis[i].garagem 
          )
        }
       case "3":
    alert("saindo.")
    break
    default:
      alert("opçao invalida!")
     }            

}while (opcao !== 3)