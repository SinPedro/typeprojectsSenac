//Crie uma classe "EmpresaDesenvolvimento" que representa uma empresa de desenvolvimento de software. 
//A classe deve possuir as propriedades nome, endereço e funcionários, onde "funcionários" é um 
//array de objetos representando os funcionários da empresa. Adicione 
//métodos para adicionar funcionários, remover funcionários e exibir informações da empresa.
import * as leitor from "readline-sync"
export class Empresa{
    nome: String;
    endereco: String;
    funcionarios: Array<String> = []

    constructor(nome: String, endereco: String){
    this.nome = nome
    this.endereco = nome
    this.funcionarios = []
    }
    

    adcionarFuncionario(): void{
        let adicionarFuncionario = leitor.question("DIGITE O NOME DO FUNCIONÁRIO:")
        if (this.funcionarios.indexOf(adicionarFuncionario)>-1) {                
            console.log("------------------------");
            console.log("O funcionario já existe.");
            console.log("------------------------");
          } else{
            console.log("---------------------------------------");
            console.log("---------------------------");
            console.log("Funcionario adcionado com sucesso.");
            console.log("---------------------------");
            this.funcionarios.push(adicionarFuncionario)
          }   
    }
    removerFuncionario(): void{
        console.log("--------------------------");
        let removerProdutos = leitor.question("DIGITE O PRODUTO QUE SERÁ REMOVIDO: ")
        console.log("--------------------------");
        const index = this.funcionarios.indexOf(removerProdutos)
        this.funcionarios.splice(index, 1)
        console.log("------------------------------");
        console.log(this.funcionarios);
        console.log("------------------------------"); 
    }

    getInfos(): void{
        console.log("-------------------");
        console.log("-------------------");
        console.log(`NOME EMPRESA: ${this.nome}`);
        console.log(`NOME ENDEREÇO: ${this.endereco}`);
    }
}