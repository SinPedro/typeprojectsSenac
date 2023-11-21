"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var leitor = require("readline-sync");
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, cpf, RG, cor, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.RG = RG;
        this.cor = cor;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        console.log("meu nome \u00E9 ".concat(this.nome));
    };
    Pessoa.prototype.getCpf = function () {
        console.log("meu nome \u00E9 ".concat(this.cpf));
    };
    Pessoa.prototype.getRG = function () {
        console.log("meu nome \u00E9 ".concat(this.RG));
    };
    Pessoa.prototype.getCor = function () {
        console.log("meu nome \u00E9 ".concat(this.cor));
    };
    Pessoa.prototype.getIdade = function () {
        console.log("meu nome \u00E9 ".concat(this.idade));
    };
    Pessoa.prototype.setNome = function () {
        var nomeDois = leitor.question("INSIRA SEU NOME: ");
        this.nome = nomeDois;
    };
    Pessoa.prototype.setCpf = function () {
        var cpfDois = leitor.question("INSIRA SEU CPF: ");
        this.cpf = cpfDois;
    };
    Pessoa.prototype.setRG = function () {
        var rgDois = leitor.question("INSIRA SEU RG: ");
        this.RG = rgDois;
    };
    Pessoa.prototype.setCor = function () {
        var corDois = leitor.question("INSIRA SUA COR");
        this.cor = corDois;
    };
    Pessoa.prototype.setIdade = function () {
        var idadeDois = leitor.question("INSIRA SUA IDADE: ");
        this.idade = idadeDois;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
