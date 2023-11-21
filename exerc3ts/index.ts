
import * as leitor from "readline-sync"
import { Calculadora } from "./Calculadora";
function main(): void{
    let calc = new Calculadora
    calc.setValores()
    let menu: Boolean = true
    while(menu){
        let option = leitor.questionInt("ESCOLHA A OPERAÇÃO:  \n1 -  SOMA \n2 - SUBTRAÇÃO \n3 - DIVISÃO \n4 - MULTIPLICAÇÃO - SAIR\n ")
        switch(option){
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
main()