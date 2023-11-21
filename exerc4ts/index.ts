import { Retangulo} from "./Areas";
import { Circulo } from "./Areas";
import { Triangulo } from "./Areas";
import * as leitor from "readline-sync"


function main(): void{
    let resultadoT = new Triangulo()
    resultadoT.setValoresTriangulo()
    let resultadoC = new Circulo()
    resultadoC.setValoresCirculo()
    let resultadoR  = new Retangulo()
    resultadoR.setValoresRetangulos()
    let menu: Boolean = true
    while(menu){
        let option = leitor.questionInt("ESCOLHA A AREA A VER:  \n1 -TRIANGULO  \n2 -CIRCULO  \n3 -RETANGULO \n4 -SAIR\n ")
        switch(option){
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
            menu = false
            break;
            default:
            console.log("ALGO DEU ERRADO");   
        }
    }

}
main()