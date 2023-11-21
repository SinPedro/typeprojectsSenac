"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Garagem_1 = require("./Garagem");
var leitor = require("readline-sync");
var garagem = new Garagem_1.Garagem();
var menu = true;
while (menu) {
    var optin = leitor.questionInt("1- VISUALIZAR \N2 - ADCIONAR \N3 - REMOVER \N4 - SAIR");
    switch (optin) {
        case 1:
            console.log(garagem.carro);
            break;
        case 2:
            garagem.addCarro();
            break;
        case 3:
            garagem.removCarro();
            break;
        case 4:
            console.log("SAINDO....");
            menu = false;
            break;
    }
}
