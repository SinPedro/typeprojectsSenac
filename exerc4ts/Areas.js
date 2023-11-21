"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = exports.Circulo = exports.Retangulo = void 0;
var leitor = require("readline-sync");
var Retangulo = /** @class */ (function () {
    function Retangulo() {
    }
    Retangulo.prototype.setValoresRetangulos = function () {
        this.rbase = leitor.questionFloat("DIGITE O VALOR DA BASE DO RETÂNGULO: ");
        this.raltura = leitor.questionFloat("DIGITE O VALOR DA ALTURA DO RETÂNGULO: ");
    };
    Retangulo.prototype.getAreaRetangulo = function () { return this.rbase * this.raltura; };
    return Retangulo;
}());
exports.Retangulo = Retangulo;
var Circulo = /** @class */ (function () {
    function Circulo() {
    }
    Circulo.prototype.setValoresCirculo = function () {
        this.craio = leitor.questionFloat("DIGITE O VALOR DO RAIO DO CIRCULO: ");
    };
    Circulo.prototype.getAreaCirculo = function () { return (this.craio * this.craio) * 3, 14; };
    return Circulo;
}());
exports.Circulo = Circulo;
var Triangulo = /** @class */ (function () {
    function Triangulo() {
    }
    Triangulo.prototype.setValoresTriangulo = function () {
        this.tbase = leitor.questionFloat("DIGITE O VALOR DA BASE DO TRIÂNGULO: ");
        this.taltura = leitor.questionFloat("DIGITE O VALOR DA ALTURA DO TRINÂNGULO: ");
    };
    Triangulo.prototype.getAreaTriangulo = function () { return this.tbase * this.taltura; };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
