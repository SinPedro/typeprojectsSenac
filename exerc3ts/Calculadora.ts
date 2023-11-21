import * as leitor from "readline-sync"
export class Calculadora{
    n1: number
    n2: number

    setValores(){
        this.n1 = leitor.questionFloat("DIGITE O PRIMEIRO VALOR: ")
        this.n2 = leitor.questionFloat("DIGITE O SEGUNDO VALOR: ")
    }

    getMais(): number{return this.n1 + this.n2}
    getMenos(): number{return this.n1 - this.n2}
    getDividi(): number{return this.n1 / this.n2}
    getMultiplica(): number{return this.n1 * this.n2}


    }
    
    
 
    










