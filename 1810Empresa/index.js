"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var Empresa_1 = require("./Empresa");
// Base de dados de Funcionários:
var empresa = new Empresa_1.Empresa('IqoptionDusguri', 'Rua das Garças');
function main() {
    var menu = true;
    while (menu) {
        console.log("---------------------------------------");
        console.log("\n1 - Listar Funcionarios \n2 - Adcionar Funcionarios \n3 - Remover Funcionarios \n4 - Sair");
        console.log("---------------------------------------");
        var opcao = leitor.questionInt("DIGITE O INDICE: ");
        switch (opcao) {
            case 1:
                console.log("---------------------------------------");
                console.log(empresa.funcionarios);
                console.log("---------------------------------------");
                break;
            case 2:
                empresa.adcionarFuncionario();
                console.log("---------------------------------------");
                break;
        }
    }
}
main();
