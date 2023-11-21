"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var leitor = require("readline-sync");
function main() {
    var humano = metodos();
    var decisao = leitor.question("Você gostaria de alterar as informações? (s/n)");
    if (decisao === "s") {
        editarCadastro(humano);
    }
    else {
        console.log("Saindo...");
    }
}
function cadastro() {
    var nome = leitor.question("INSIRA SEU NOME:");
    var CPF = leitor.questionInt("INSIRA SEU CPF:  ");
    var RG = leitor.questionInt("INSIRA SEU RG:");
    var cor = leitor.question("INSIRA SUA COR:  ");
    var idade = leitor.questionInt("INSIRA SUA IDADE:");
    var humano = new Pessoa_1.Pessoa(nome, CPF, RG, cor, idade);
    return humano;
}
function metodos() {
    var humano = cadastro();
    humano.getNome();
    humano.getCpf();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
    return humano;
}
function editarCadastro(humano) {
    humano.setNome();
    humano.setCpf();
    humano.setRG();
    humano.setCor();
    humano.setIdade();
    humano.getNome();
    humano.getCpf();
    humano.getRG();
    humano.getCor();
    humano.getIdade();
}
main();
