import * as leitor from "readline-sync";

export class Pessoa{
    nome:  String; 
    cpf:   Number;
    RG:    Number;
    cor:   String;
    idade: Number; 

    constructor(nome: String, cpf: Number, RG: Number, cor: String, idade: Number){
        this.nome  =    nome;
        this.cpf   =    cpf; 
        this.RG    =    RG; 
        this.cor   =    cor; 
        this.idade =    idade;  
    }


    getNome(){
        console.log(`meu nome é ${this.nome}`);     
    }
    getCpf(){
        console.log(`meu cpf é ${this.cpf}`);     
    }
    getRG(){
        console.log(`meu Rg é ${this.RG}`);     
    }
    getCor(){
        console.log(`meu Cor é ${this.cor}`);     
    }
    getIdade(){
        console.log(`meu Idade é ${this.idade}`);     
    }
    setNome(){
        let  nomeDois = leitor.question("INSIRA SEU NOME: ")
        this.nome = nomeDois
    }
    setCpf(){
        let cpfDois = leitor.questionInt("INSIRA SEU CPF: ")
        this.cpf = cpfDois
    }
    setRG(){
        let rgDois = leitor.questionInt("INSIRA SEU RG: ")
        this.RG = rgDois
    }
    setCor(){
        let corDois = leitor.question("INSIRA SUA COR")
        this.cor = corDois
    }
    setIdade(){
        let idadeDois = leitor.questionInt("INSIRA SUA IDADE: ")
        this.idade = idadeDois
    }
}









