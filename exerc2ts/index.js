"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var leitor = require("readline-sync");
function main() {
    var aluno = cadastro();
    console.log(aluno.getMedia());
}
function cadastro() {
    var nome = leitor.question("DIGITE O NOME DO ALUNO: ");
    var aluno = new Aluno_1.Aluno(nome);
    console.log("ALUNO CRIADO COM SUCESSO!");
    var n1 = leitor.questionFloat("DIGITE A PRIMEIRA NOTA: ");
    var n2 = leitor.questionFloat("DIGITE A SEGUNDA NOTA: ");
    var n3 = leitor.questionFloat("DIGITE A TERCEIRA NOTA: ");
    aluno.setNotas(n1, n2, n3);
    return aluno;
}
main();
