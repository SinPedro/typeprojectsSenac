import { Garagem } from "./Garagem";
import * as leitor from "readline-sync"

let garagem  = new Garagem()

let menu = true
while(menu){    
    let optin = leitor.questionInt("1- VISUALIZAR \N2 - ADCIONAR \N3 - REMOVER \N4 - SAIR")
    switch(optin){
        case 1: 
        console.log(garagem.carro);
        
        break;
        case 2: 
        garagem.addCarro()
        break;
        case 3:
        garagem.removCarro()
        break;
        case 4: 
        console.log("SAINDO....");
        menu = false
        break;
    }
}