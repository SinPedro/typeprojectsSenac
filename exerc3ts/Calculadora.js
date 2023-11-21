"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var leitor = require("readline-sync");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.setValores = function () {
        this.n1 = leitor.questionFloat("DIGITE O PRIMEIRO VALOR: ");
        this.n2 = leitor.questionFloat("DIGITE O SEGUNDO VALOR: ");
    };
    Calculadora.prototype.getMais = function () { return this.n1 + this.n2; };
    Calculadora.prototype.getMenos = function () { return this.n1 - this.n2; };
    Calculadora.prototype.getDividi = function () { return this.n1 / this.n2; };
    Calculadora.prototype.getMultiplica = function () { return this.n1 * this.n2; };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
