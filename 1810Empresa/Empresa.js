"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
//Crie uma classe "EmpresaDesenvolvimento" que representa uma empresa de desenvolvimento de software. 
//A classe deve possuir as propriedades nome, endereço e funcionários, onde "funcionários" é um 
//array de objetos representando os funcionários da empresa. Adicione 
//métodos para adicionar funcionários, remover funcionários e exibir informações da empresa.
var leitor = require("readline-sync");
var Empresa = /** @class */ (function () {
    function Empresa(nome, endereco) {
        this.funcionarios = [];
        this.nome = nome;
        this.endereco = nome;
        this.funcionarios = [];
    }
    Empresa.prototype.adcionarFuncionario = function () {
        var adicionarFuncionario = leitor.question("DIGITE O NOME DO FUNCIONÁRIO:");
        if (this.funcionarios.indexOf(adicionarFuncionario) > -1) {
            console.log("------------------------");
            console.log("O item digitado já existe.");
            console.log("------------------------");
        }
        else {
            console.log("---------------------------");
            console.log("ITEM ADCIONADO COM SUCESSO.");
            console.log("---------------------------");
            this.funcionarios.push(adicionarFuncionario);
        }
    };
    Empresa.prototype.removerFuncionario = function () {
        console.log("--------------------------");
        var removerProdutos = leitor.question("DIGITE O PRODUTO QUE SERÁ REMOVIDO: ");
        console.log("--------------------------");
        var index = this.funcionarios.indexOf(removerProdutos);
        this.funcionarios.splice(index, 1);
        console.log("------------------------------");
        console.log(this.funcionarios);
        console.log("------------------------------");
    };
    Empresa.prototype.getInfos = function () {
        console.log("-------------------");
        console.log("-------------------");
        console.log("NOME EMPRESA: ".concat(this.nome));
        console.log("NOME ENDERE\u00C7O: ".concat(this.endereco));
        console.log("-------------------");
        console.log("-------------------");
    };
    return Empresa;
}());
exports.Empresa = Empresa;
