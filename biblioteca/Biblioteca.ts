import * as leitor from  "readline-sync"

class Livro{
    public idLivro: number
    public titulo: String
    public autor: String
    public anoPublicacao: number
    public quantidadeDisponivel: number
    constructor(idLivro: number, titulo: String, autor: String, anoPublicacao: number, quantidadeDisponivel: number){
        this.idLivro = idLivro
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.quantidadeDisponivel = quantidadeDisponivel
    }
}

class Usuario{
    public idUsuario: number
    public nome: String
    public email: String
    public livrosEmprestados: Array<Livro>
    constructor(idUsuario: number, nome: String, email: String){
        this.idUsuario = idUsuario
        this.nome = nome
        this.email = email
        this.livrosEmprestados = []
    }
}



interface Biblioteca{
    cadastrarLivro(): void
    cadastrarUsuario(): void
    emprestarLivro(): void
    devolverLivro(): void
    consultarLivrosDisponiveis(): void
}


export class SistemaBiblioteca implements Biblioteca{  
    registroLivros: Array<Livro>
    registroUsuario: Array<Usuario>
    constructor(){
    this.registroLivros = []
    this.registroUsuario = []
    }
    cadastrarLivro(): void{
        console.log("-----------------------------------------");
        console.log("------BEM VINDO AO CADASTRO DO LIVRO-----");
        console.log("-----------------------------------------");
        console.log("VAMOS COMEÇAR O CADASTRO!");
            let titulo= leitor.question("TITULO: ");
            let autor= leitor.question("AUTOR: ")
            let idLivro= leitor.questionInt("ID LIVRO: ")
            let anoPublicacao= leitor.questionInt("ANO: ")
            let quantidadeDisponivel= leitor.questionInt("QUANTIDADE: ")
            let livro = new Livro(idLivro, titulo, autor, anoPublicacao, quantidadeDisponivel)
            this.registroLivros.push(livro)
            console.log(("LIVRO CADASTRADO CORRETAMENTE"));
    }
    cadastrarUsuario(): void{
        console.log("-------------------------------------------");
        console.log("------BEM VINDO AO CADASTRO DE USUARIO-----");
        console.log("-------------------------------------------");
        console.log("VAMOS COMEÇAR O CADASTRO DO USUARIO!");
            let inserirUsuario: String = leitor.question("USUARIO: ") 
            let idUsuario: number = leitor.questionInt("ID USUARIO: ")
            let emailInserido: String = leitor.question("EMAIL: ")
            let usuario = new Usuario(idUsuario, inserirUsuario, emailInserido)
            this.registroUsuario.push(usuario)
            console.log(("USUARIO CADASTRADO CORRETAMENTE"));
    }
    emprestarLivro(): void{
        let idUser = leitor.questionInt("INOFORME O ID DO USUARIO")
        let findUser = this.registroUsuario.findIndex((u) => u.idUsuario === idUser)
        let idLivro = leitor.questionInt("DIGITE O ID DO LIVRO: ")
        let findBook = this.registroLivros.findIndex((m) => m.idLivro === idLivro )
        this.registroUsuario.forEach(user => {
            console.log(`IDENTIFICADOR: idUsuario: [${user.idUsuario}] , Nome: [${user.nome}] ` );         
        })
        this.registroLivros.forEach(book => {
            console.log(`IDENTIFICADOR: idLivro: [${book.idLivro}] , Nome livro: [${book.titulo}] ` );         
        })
        if(findUser && findUser){
            if(this.registroUsuario[findUser].livrosEmprestados.length > 3 && this.registroLivros[findBook].quantidadeDisponivel > 0){
                console.log("------------------------------");
                console.log("------EMPRESTIMO SUCEDIDO-----");
                console.log("------------------------------");
                this.registroUsuario[findUser].livrosEmprestados.push(this.registroLivros[findBook])
                this.registroLivros[findBook].quantidadeDisponivel -= 1
            }
            
        }}    
         
    
    devolverLivro(): void{
        let idUser = leitor.questionInt("INOFORME O ID DO USUARIO")
        let findUser = this.registroUsuario.findIndex((u) => u.idUsuario === idUser)
        let idLivro = leitor.questionInt("DIGITE O ID DO LIVRO: ")
        let findBook = this.registroUsuario.findIndex((m) => m.idUsuario === idUser )
        this.registroUsuario.forEach(users => {
            console.log(`IDENTIFICADOR: idUsuario: [${users.idUsuario}] , Nome: [${users.nome}] ` );         
        })
        this.registroLivros.forEach(book => {
            console.log(`IDENTIFICADOR: idLivro: [${book.idLivro}] , Nome livro: [${book.titulo}] ` );         
        })
    }
    consultarLivrosDisponiveis(){
        console.log('Estoque de LIVRO:');
        this.registroLivros.forEach((registroLivros) => {
            console.log(`idLivro: ${registroLivros.idLivro}`);
            console.log(`Titulo: ${registroLivros.titulo}`);
            console.log(`Autor: ${registroLivros.autor}`);
            console.log(`Ano: ${registroLivros.anoPublicacao}`);
            console.log(`Quantidade: ${registroLivros.quantidadeDisponivel}`);
        })
    }
}

