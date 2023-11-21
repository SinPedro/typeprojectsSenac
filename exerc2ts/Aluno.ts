import * as leitor from "readline-sync"
export class Aluno{
    nome : String
    notas : Array<number> = []


    constructor(nome: String){
        this.nome = nome
        this.notas = []
    }
    setNotas(n1: number, n2: number, n3: number){
        this.notas.push(n1)
        this.notas.push(n2)
        this.notas.push(n3)
    }

    getMedia(): number{
        let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3
        return media
    }

}

