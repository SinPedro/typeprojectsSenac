import* as leitor from "readline-sync"


class Carro{
    marca: String;
    modelo: String;
    ano: number;
    placa: number;
    
    constructor(marca: String, modelo: String, ano: number, placa: number ){
        this.marca = marca;
        this.modelo = modelo
        this.ano = ano
        this.placa = placa
    }
}


export class Garagem{
    carro: Array<Carro>
    constructor(){
        this.carro = []
    }

    addCarro(): void{
        let addMa = leitor.question("DIGITE A MARCA:")
        let addMo = leitor.question("DIGITE A MODELO:")
        let addAno = leitor.question("DIGITE O ANO:")
        let addPla = leitor.question("DIGITE A PLACA:")
        let carro = new Carro(addMa, addMo, addAno, addPla)
        this.carro.push(carro)
        console.log(`${carro.toString()} foi adcinoado a garagem`);
        
    }

    removCarro(): void{
        let placa = leitor.question("INFORME A PLACA DO CARRO A SER REMOVIDO: ")
        const index = this.carro.indexOf(placa)
        this.carro.splice(index,1)
        console.log(`${this.carro}`) 
        console.log(`O carro com a placa ${placa} foi removido da garagem !!!!!`);
            
    }



    getGaragem(): void{
        console.log("CARROS NA GARAGEM:");
        console.log();
        
    }
}