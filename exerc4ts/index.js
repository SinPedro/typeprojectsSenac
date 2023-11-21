"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Areas_1 = require("./Areas");
var Areas_2 = require("./Areas");
var Areas_3 = require("./Areas");
var leitor = require("readline-sync");
function main() {
    var resultadoT = new Areas_3.Triangulo();
    resultadoT.setValoresTriangulo();
    var resultadoC = new Areas_2.Circulo();
    resultadoC.setValoresCirculo();
    var resultadoR = new Areas_1.Retangulo();
    resultadoR.setValoresRetangulos();
    var menu = true;
    while (menu) {
        var option = leitor.questionInt("ESCOLHA A AREA A VER:  \n1 -TRIANGULO  \n2 -CIRCULO  \n3 -RETANGULO \n4 -SAIR\n ");
        switch (option) {
            case 1:
                console.log("AREA TRIANGULO: ", resultadoT.getAreaTriangulo());
                break;
            case 2:
                console.log("AREA CIRCULO: ", resultadoC.getAreaCirculo());
                break;
            case 3:
                console.log("AREA RETANGULO: ", resultadoR.getAreaRetangulo());
                break;
            case 4:
                console.log("SAINDO...");
                menu = false;
                break;
        }
    }
}
main();
