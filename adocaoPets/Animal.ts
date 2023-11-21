import * as leitor from "readline-sync"


class Animal{
    constructor(public nome: String, public raca: String){
        this.nome = nome
        this.raca = raca
    }
    emitirSom(): string{
        return "MEOWWWW"
    }
}


class Cachorro extends Animal{
    public speak(): string {
        return `${this.nome} diz WOOOOF!`;
        }
        
}

class Gato extends Animal{
    public speak(): string {
        return `${this.nome} diz MEOWW!`;
        }
        
}


export class SistemaDeAnimais{
    private gatos: Array<Gato> 
    private cachorro: Array<Cachorro>
    constructor(){
        this.gatos = []
        this.cachorro = []
    }
public cadastrarAnimal(){
        console.log("-----------------------------");
        console.log("-----------------------------");
        console.log("-----CADASTRO DE ANIMAIS-----");
        console.log("-----------------------------");
        console.log("-----------------------------");
        let raca= leitor.question("RACA DO ANIMAL: ")
        let nome = leitor.question("NOME DO ANIMAL: ") 
        const verificarAnimal = this.cachorro.find((m) => m.nome === nome)
        if( raca === "gato" && verificarAnimal ){
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            console.log("----- GATO CADASTRADO COM SUCESSO--------");
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            let gato = new Gato(nome,raca)
            this.gatos.push(gato)
        }else {        
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        }
        if(raca === "cachorro" && verificarAnimal ){
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            console.log("-----CACHORRO CADASTRADO COM SUCESSO-----");
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            let cachorro = new Cachorro(nome,raca)
            this.gatos.push(cachorro)
        }else{
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        } 
    }
public interagirAnimais(){
        console.log("-------------------------------");
        console.log("-------------------------------");
        console.log("-----INTERAGIR COM ANIMAIS-----");
        console.log("-------------------------------");
        console.log("-------------------------------");
        function animalSounds(animal: Animal): void {
            console.log(`${animal.nome}, da marca: ${this.raca} faz o som: ${animal.emitirSom()}`);
            }
            const dog = new Cachorro("Rex","cachorro");
            const cat = new Gato("Whiskers","gato");
            animalSounds(dog); 
            animalSounds(cat);    
    }
public removerAnimal(){
        console.log("-------------------------");
        console.log("-------------------------");
        console.log("-----DELETAR ANIMAIS-----");
        console.log("-------------------------");
        console.log("-------------------------");
        console.log("CACHORROS: "); 
        this.cachorro.forEach(dogs =>{
            console.log(`NOME DOG: [${dogs.nome}] - RACA: ${dogs.raca}`);
        })
        console.log("GATOS: "); 
        this.gatos.forEach(cats =>{
            console.log(`NOME GATO: [${cats.nome}] - RACA: ${cats.raca}`);
        })
        let raca = leitor.question("RACA DO ANIMAL: ").tolowerCase()
        let nome = leitor.question("NOME DO ANIMAL: ") 
        const verificarAnimal = this.cachorro.find((m) => m.nome === nome)
        if( raca === "gato" && verificarAnimal ){
            console.log("---------------------------------------");
            console.log("---------------------------------------");
            console.log("----- GATO DELETADO COM SUCESSO--------");
            console.log("---------------------------------------");
            console.log("---------------------------------------");
            this.gatos.splice(nome, 1)
        }else {        
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        }
        if(raca === "cachorro" && verificarAnimal ){
            console.log("-------------------------------------------");
            console.log("-------------------------------------------");
            console.log("----- CACHORRO DELETADO COM SUCESSO--------");
            console.log("-------------------------------------------");
            console.log("-------------------------------------------");
            this.cachorro.splice(nome, 1)
        }else{
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        } 
    
    }
public listarAnimais(){
    console.log("-------------------------");
    console.log("-------------------------");
    console.log("-----LISTA DE ANIMAIS----");
    console.log("-------------------------");
    console.log("-------------------------");
    console.log("CACHORROS: "); 
    this.cachorro.forEach(dogs =>{
        console.log(`NOME DOG: [${dogs.nome}] - RACA: ${dogs.raca}`);
    })
    console.log("GATOS: "); 
    this.gatos.forEach(cats =>{
        console.log(`NOME GATO: [${cats.nome}] - RACA: ${cats.raca}`);
    })
}    
}
