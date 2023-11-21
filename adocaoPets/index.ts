import { SistemaDeAnimais } from "./Animal"
import * as leitor from "readline-sync"

let animais = new SistemaDeAnimais()
let menu = true
while(menu){
    console.log(`Seja bem-vindo ao sistema pets!`);
    console.log(`1 - Cadastrar Animais`);
    console.log(`2 - Interagir Animais`);
    console.log(`3 - Remover Animais`);
    console.log(`4 - Listar animais`);
    console.log(`6 - Sair`);

    let opcao = leitor.questionInt(`Informe a opção desejada: `)

    switch (opcao) {
        case 1:
            animais.cadastrarAnimal()
            break;
        case 2:
            animais.interagirAnimais()
            break;
        case 3:
            animais.removerAnimal()
            break;
        case 4:
            animais.listarAnimais()
            break;
        case 5:
            console.log("SAINDO....");
            menu = false
            break;
        default:
            console.log(`Opção inválida!\n`);
            break;
    }
    
}