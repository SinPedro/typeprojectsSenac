"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal_1 = require("./Animal");
var leitor = require("readline-sync");
var animais = new Animal_1.SistemaDeAnimais();
var menu = true;
while (menu) {
    console.log("Seja bem-vindo ao sistema pets!");
    console.log("1 - Cadastrar Animais");
    console.log("2 - Interagir Animais");
    console.log("3 - Remover Animais");
    console.log("4 - Listar animais");
    console.log("6 - Sair");
    var opcao = leitor.questionInt("Informe a op\u00E7\u00E3o desejada: ");
    switch (opcao) {
        case 1:
            animais.cadastrarAnimal();
            break;
        case 2:
            animais.interagirAnimais();
            break;
        case 3:
            animais.removerAnimal();
            break;
        case 4:
            animais.listarAnimais();
            break;
        case 5:
            console.log("SAINDO....");
            menu = false;
            break;
        default:
            console.log("Op\u00E7\u00E3o inv\u00E1lida!\n");
            break;
    }
}
