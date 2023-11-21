import { SistemaBiblioteca } from "./Biblioteca";
import * as leitor from "readline-sync"

const biblioteca = new SistemaBiblioteca()
let menu = true
while(menu){
    console.log("+===========================+");
    console.log(`Selecione uma opçao: `);
    console.log(`1 - Cadastro livros`);
    console.log(`2 - Cadastro usuario`);
    console.log(`3 - Emprestar livros`);
    console.log(`4 - Devolver livros`);
    console.log(`5 - visualizar estoque`);
    console.log(`6 - sair`);
    console.log("+===========================+");
    let option = leitor.questionInt("Digite o numero desejado: ")
    switch(option){
        case 1:
            biblioteca.cadastrarLivro();
            break;
        case 2:
            biblioteca.cadastrarUsuario();
            break;
        case 3:
            biblioteca.emprestarLivro();
            break;
        case 4:
            biblioteca.devolverLivro();
            break;
        case 5:
            biblioteca.consultarLivrosDisponiveis();
            break;
        case 6:
            console.log("Saindo...");
            menu = false
            break;
        default:
            console.log("Opção inválida, tente novamente");
    }
}