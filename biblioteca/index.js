"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Biblioteca_1 = require("./Biblioteca");
var leitor = require("readline-sync");
var biblioteca = new Biblioteca_1.SistemaBiblioteca();
var menu = true;
while (menu) {
    console.log("+===========================+");
    console.log("Selecione uma op\u00E7ao: ");
    console.log("1 - Cadastro livros");
    console.log("2 - Cadastro usuario");
    console.log("3 - Emprestar livros");
    console.log("4 - Devolver livros");
    console.log("5 - visualizar estoque");
    console.log("6 - sair");
    console.log("+===========================+");
    var option = leitor.questionInt("Digite o numero desejado: ");
    switch (option) {
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
            menu = false;
            break;
        default:
            console.log("Opção inválida, tente novamente");
    }
}
