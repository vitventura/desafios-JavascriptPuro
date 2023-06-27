const vagas = []

function listarVagas (){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){

        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "(" + vaga.candidatos.length + "candidatos)\n"
        return textoFinal   
        }, "")

        alert(vagasEmTexto)
    }

    function novaVaga(){
        const nome = prompt("informe o nome para a vaga:")
        const descriçao = prompt("informe uma descriçao para a vaga:")
        const dataLimite = prompt(" informe uma data limite (dd/mm/aaaa) para a vaga")

        const confirmaçao = confirm(
            "deseja criar uma nova vaga com esssas informaçoes?\n" +
            "nome: " + nome + "\ndescriçao: " + descriçao + "\ndata limite: " + dataLimite

        )
        if(confirmaçao){
            const novaVaga = {nome, descriçao, dataLimite, candidatos: [] }
            vagas.push(novaVaga)
            alert("vaga criada!")
        }
        
    }

    
   

    function exibirVaga(){
        const indice = prompt("informe o indice da vaga que deseja exibir:")

       if (indice >= vagas.length || indice < 0){
          alert("indice invalido!")
          return
       }

        const vaga = vagas[indice]

        const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
            return textoFinal+ "\n -" + candidato
        }, "")

        alert("vaga n:" + indice +
              "\nnome:" + vaga.nome +
            "\ndescriçao:" + vaga.descriçao +
            "\ndata limite:"+ vaga.dataLimite +
            "\nquantidade de candidatos:" + vaga.candidatos.lenght +
            "\ncandidatos inscritos:" + candidatosEmTexto  
           
        )
    }

    function inscreverCandidato(){
        const candidato = prompt("informe o nome candidato:")
        const indice = prompt ("informe o indice da vaga para qual o candidato deseja se inscrever:")
        const vaga = vagas[indice]

        const confirmaçao = confirm(
            "deseja inscrever o candidato" + candidato + "na vaga" + indice +"?\n" + 
             "nome: " + vaga.nome + "\ndescriçao:" +  vaga.descriçao + "\ndata limite:" + vaga.dataLimite
        )

        if(confirmaçao){
            vaga.candidatos.push(candidato)
            alert("inscriçao realizada!")
        }
    }

    function excluirVaga(){
        const indice = prompt("informe o indice da vaga que deseja excluir:")
        const vaga = vagas[indice]

        const confirmaçao = confirm(
            "tem certeza que deseja excluir a vaga" + indice + "?\n" +
            "nome:" + vaga.nome + "\ndescriçao:" + vaga.descriçao + "\ndata limite:" + vaga.dataLimite
        )
        if(confirmaçao){
            vagas.slice(indice, 1)
            alert("vaga excluida com sucesso!")
        }
    }

    function exibirMenu(){
        const opcao = prompt(
            "cadastro de vagas de emprego" +
            "\n\nescolha uma das opçoes:" +
            "\n1. listar vagas disponiveis:" +
            "\n2. criar uma nova vaga:" +
            "\n3. visualizar uma vaga" +
            "\n4. inscrever um candidato" +
            "\n5. excluir uma vaga" +
            "\n6. sair" 
        )
        return opcao
    }

    function executar (){
        let opcao = ""
        
        do{
           opcao = exibirMenu()
           
           switch(opcao){
            case "1":
                listarVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("saindo...")
                default:
                    alert("opçao invalida!")
           }
        }while (opcao !== "6")
    }

    executar()