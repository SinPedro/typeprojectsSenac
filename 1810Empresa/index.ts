import * as leitor from "readline-sync"
import { Empresa } from "./Empresa"
// Base de dados de Funcionários:

let empresa= new Empresa('IqoptionDusguri','Rua das Garças');

function main(): void{
    let menu: Boolean = true;
    while(menu){
        console.log("---------------------------------------");
        console.log("\n1 - Listar Funcionarios \n2 - Adcionar Funcionarios \n3 - Remover Funcionarios \n4 - Sair")
        console.log("---------------------------------------");
        let opcao = leitor.questionInt("DIGITE O INDICE: ");
        
        switch(opcao){
            case 1: 
                console.log("---------------------------------------");
                console.log(empresa.getInfos())
                console.log("---------------------------------------");
                console.log("---------------------------------------");
                console.log(empresa.funcionarios)
                console.log("---------------------------------------");
                break;
            case 2:
                empresa.adcionarFuncionario();
                console.log("---------------------------------------");
                break;
            case 3: 
                empresa.removerFuncionario()
                console.log("---------------------------------------");
                break;    
            case 4:
                console.log("---------------------------------------");
                console.log("Saindo.......")
                console.log("---------------------------------------");    
                menu = false
                break;  
        }   
    }
}
main()
