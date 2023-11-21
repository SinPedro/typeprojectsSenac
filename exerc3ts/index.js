"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Calculadora_1 = require("./Calculadora");
function main() {
    var calc = new Calculadora_1.Calculadora;
    calc.setValores();
    var menu = true;
    while (menu) {
        var option = leitor.questionInt("ESCOLHA A OPERAÇÃO:  \n1 -  SOMA \n2 - SUBTRAÇÃO \n3 - DIVISÃO \n4 - MULTIPLICAÇÃO - SAIR\n ");
        switch (option) {
            case 1:
                console.log("MAIS: ", calc.getMais());
                break;
            case 2:
                console.log("MENOS: ", calc.getMenos());
                break;
            case 3:
                console.log("DIVIDIR: ", calc.getDividi());
                break;
            case 4:
                console.log("MULTIPLICAÇÃO: ", calc.getMultiplica());
                break;
            case 0:
                console.log("SAINDO...");
                break;
            default:
                console.log("ALGO DEU ERRADO");
        }
    }
}
main();
