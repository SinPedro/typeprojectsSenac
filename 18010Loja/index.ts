import { Loja } from "./Loja";
import * as leitor from "readline-sync"

let menu: Boolean = true
let produtoLojaUm = new Loja("Casas Bahia", "Rua Independencia")
let produtoUm = ["Tv", "Mesa", "Cadeira"]
while(menu){
    console.log("----------------------------------------------------------");
    console.log("----------------------------------------------------------");
    console.log("\n1 LISTAR PRODUTOS\n2 ADCIONAR PRODUTOS  \n3 REMOVER PRODUTOS  \n4 SAIR");
    console.log("----------------------------------------------------------");
    console.log("----------------------------------------------------------");
    let option = leitor.questionInt("DIGITE SUA OPCAO (1, 2, 3 OU 4):   ")
    console.log("----------------------------------------------------------");
    console.log("----------------------------------------------------------");
    switch(option){
        case 1:
            console.log("--------------------------");
            console.log("--------------------------");
            console.log(produtoLojaUm);
            console.log(produtoUm);
            console.log("--------------------------");
            console.log("--------------------------");
            break;
        case 2:
            console.log("------------------------------");
            console.log("VOCÊ DESEJA ADCIONAR PRODUTOS!");
            console.log("------------------------------");
            let novosProdutos = leitor.question("DIGITE OS PRODUTOS: ").trim();
            console.log("--------------------------");
            console.log("--------------------------");
            if (produtoUm.indexOf(novosProdutos)>-1) {                
                console.log("------------------------");
                console.log("O item digitado já existe.");
                console.log("------------------------");
              } else {
                console.log("---------------------------");
                console.log("ITEM ADCIONADO COM SUCESSO.");
                console.log("---------------------------");
                produtoUm.push(novosProdutos)
              }
            break;
        case 3:
            console.log("------------------------------");
            console.log("VOCÊ DESEJA REMOVER PRODUTOS!");
            console.log("------------------------------");
            console.log(produtoLojaUm);
            console.log(produtoUm);
            console.log("------------------------------");
            let removerProdutos = leitor.question("DIGITE O PRODUTO QUE SERÁ REMOVIDO: ")
            console.log("--------------------------");
            if(produtoUm.indexOf(removerProdutos)>-1){
                const index = produtoUm.indexOf(removerProdutos)
                produtoUm.splice(index, 1)
                console.log("------------------------------");
                console.log(produtoLojaUm);
                console.log(produtoUm);
                console.log("------------------------------");
            }else {
                console.log("--------------------------");
                console.log("O item digitado nao existe.");
                console.log("--------------------------");
            }
            break;
     
        case 4:
            console.log("------------------------------");
            console.log("saindo.....");
            console.log("------------------------------");
            menu = false
            break;
    }
}