"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
var leitor = require("readline-sync");
function main() {
    var informacoeslivros = cadastro();
    console.log("O CADASTRO FEITO EM NOSSO BANCO FOI:");
    console.log(informacoeslivros.obterDetalhes());
}
function cadastro() {
    var titulo = leitor.question("DIGITE O TÍTULO DO LIVRO: ");
    var autor = leitor.question("DIGITE O AUTOR DO LIVRO:   ");
    var anoPublicacao = leitor.questionInt("DIGITE O ANO DA PUBLICAÇÃO");
    var informacoeslivros = new Livro_1.Livro(titulo, autor, anoPublicacao);
    return informacoeslivros;
}
main();
