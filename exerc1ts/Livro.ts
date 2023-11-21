
export class Livro{
    titulo: String;
    autor: String;
    anoPublicacao: Number;

    constructor(titulo: String, autor: String, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    } 
    obterDetalhes(){
        return `TÍTULO: ${this.titulo}, AUTOR: ${this.autor}, A. PUBLICAÇÃO ${this.anoPublicacao}`
    }  
}