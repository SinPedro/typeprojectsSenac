    import * as leitor from "readline-sync"
    export class Retangulo{
    rbase: number;
    raltura: number;
    setValoresRetangulos(){
        this.rbase = leitor.questionFloat("DIGITE O VALOR DA BASE DO RETÂNGULO: ")
        this.raltura = leitor.questionFloat("DIGITE O VALOR DA ALTURA DO RETÂNGULO: ")
    }
    getAreaRetangulo(){return this.rbase * this.raltura}  
}
    export class Circulo{
    craio: number;
    setValoresCirculo(){
        this.craio = leitor.questionFloat("DIGITE O VALOR DO RAIO DO CIRCULO: ")
    }
    getAreaCirculo(){return (this.craio * this.craio) * 3,14} 
}

    export class Triangulo{
    tbase: number;
    taltura: number;
    tarea: number;
    setValoresTriangulo(){
        this.tbase = leitor.questionFloat("DIGITE O VALOR DA BASE DO TRIÂNGULO: ")
        this.taltura = leitor.questionFloat("DIGITE O VALOR DA ALTURA DO TRINÂNGULO: ")
    }
    getAreaTriangulo(){return this.tbase * this.taltura}  
}



