import {Pessoa} from "./Pessoa";

import * as leitor from "readline-sync";

function main(): void{
    const humano = metodos()
    let decisao = leitor.question("Você gostaria de alterar as informações? (s/n)")
    if(decisao === "s"){
        editarCadastro(humano)
    }else {
        console.log("Saindo...");
        
    }
}

function cadastro(){
    let nome  =  leitor.question("INSIRA SEU NOME:")
    let CPF   =  leitor.questionInt("INSIRA SEU CPF:  ")
    let RG    =  leitor.questionInt("INSIRA SEU RG:")
    let cor   =  leitor.question("INSIRA SUA COR:  ")
    let idade =  leitor.questionInt("INSIRA SUA IDADE:")
    const humano = new Pessoa(nome, CPF, RG, cor, idade)
    return humano
}
    function metodos(): Pessoa{
    const humano = cadastro()
    humano.getNome()
    humano.getCpf()
    humano.getRG()
    humano.getCor()
    humano.getIdade()
    return humano
}
    function editarCadastro(humano: Pessoa){
    humano.setNome()
    humano.setCpf()
    humano.setRG()
    humano.setCor()
    humano.setIdade()
    humano.getNome()
    humano.getCpf()
    humano.getRG()
    humano.getCor()
    humano.getIdade()
}
main()





