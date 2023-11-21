"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var leitor = require("readline-sync");
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano, placa) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.placa = placa;
    }
    return Carro;
}());
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.carro = [];
    }
    Garagem.prototype.addCarro = function () {
        var addMa = leitor.question("DIGITE A MARCA:");
        var addMo = leitor.question("DIGITE A MODELO:");
        var addAno = leitor.question("DIGITE O ANO:");
        var addPla = leitor.question("DIGITE A PLACA:");
        var carro = new Carro(addMa, addMo, addAno, addPla);
        this.carro.push(carro);
        console.log("".concat(carro.toString(), " foi adcinoado a garagem"));
    };
    Garagem.prototype.removCarro = function () {
        var placa = leitor.question("INFORME A PLACA DO CARRO A SER REMOVIDO: ");
        var index = this.carro.indexOf(placa);
        this.carro.splice(index, 1);
        console.log("".concat(this.carro));
        console.log("O carro com a placa ".concat(placa, " foi removido da garagem !!!!!"));
    };
    Garagem.prototype.getGaragem = function () {
        console.log("CARROS NA GARAGEM:");
        console.log();
    };
    return Garagem;
}());
exports.Garagem = Garagem;
