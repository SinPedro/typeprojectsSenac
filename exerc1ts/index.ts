import { Livro } from "./Livro";

import * as leitor from "readline-sync"

function main(){
    let informacoeslivros = cadastro()
    console.log("O CADASTRO FEITO EM NOSSO BANCO FOI:");  
    console.log(informacoeslivros.obterDetalhes());
}    
function cadastro(){
    let titulo  = leitor.question("DIGITE O TÍTULO DO LIVRO: ")
    let autor   = leitor.question("DIGITE O AUTOR DO LIVRO:   ")
    let anoPublicacao = leitor.questionInt("DIGITE O ANO DA PUBLICAÇÃO")
    let informacoeslivros = new Livro(titulo,autor,anoPublicacao)
    return informacoeslivros  
}
main()
