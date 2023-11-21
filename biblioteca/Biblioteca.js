"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaBiblioteca = void 0;
var leitor = require("readline-sync");
var Livro = /** @class */ (function () {
    function Livro(idLivro, titulo, autor, anoPublicacao, quantidadeDisponivel) {
        this.idLivro = idLivro;
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.quantidadeDisponivel = quantidadeDisponivel;
    }
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(idUsuario, nome, email) {
        this.idUsuario = idUsuario;
        this.nome = nome;
        this.email = email;
        this.livrosEmprestados = [];
    }
    return Usuario;
}());
var SistemaBiblioteca = /** @class */ (function () {
    function SistemaBiblioteca() {
        this.registroLivros = [];
        this.registroUsuario = [];
    }
    SistemaBiblioteca.prototype.cadastrarLivro = function () {
        console.log("-----------------------------------------");
        console.log("------BEM VINDO AO CADASTRO DO LIVRO-----");
        console.log("-----------------------------------------");
        console.log("VAMOS COMEÇAR O CADASTRO!");
        var titulo = leitor.question("TITULO: ");
        var livroExistente = this.registroLivros.find(function (m) { return m.titulo === titulo; });
        if (!livroExistente) {
            var autor = leitor.question("AUTOR: ");
            var idLivro = leitor.questionInt("ID LIVRO: ");
            var anoPublicacao = leitor.questionInt("ANO: ");
            var quantidadeDisponivel = leitor.questionInt("QUANTIDADE: ");
            var novoLivro = new Livro(idLivro, titulo, autor, anoPublicacao, quantidadeDisponivel);
            this.registroLivros.push(novoLivro);
        }
        else {
            console.log("===============================");
            console.log("========LIVRO EXISTENTE========");
            console.log("===============================");
        }
    };
    SistemaBiblioteca.prototype.cadastrarUsuario = function () {
        console.log("-------------------------------------------");
        console.log("------BEM VINDO AO CADASTRO DE USUARIO-----");
        console.log("-------------------------------------------");
        console.log("VAMOS COMEÇAR O CADASTRO DO USUARIO!");
        var inserirUsuario = leitor.question("USUARIO: ");
        var usuarioExistente = this.registroUsuario.find(function (m) { return m.nome === inserirUsuario; });
        if (!usuarioExistente) {
            var idUsuario = leitor.questionInt("ID USUARIO: ");
            var emailInserido = leitor.question("EMAIL: ");
            var novoUsuario = new Usuario(idUsuario, inserirUsuario, emailInserido);
            this.registroUsuario.push(novoUsuario);
        }
        else {
            console.log("=================================");
            console.log("========USUARIO EXISTENTE========");
            console.log("=================================");
        }
    };
    SistemaBiblioteca.prototype.emprestarLivro = function () {
        if (this.registroLivros.length > -1) {
            console.log("-------------------------------------------");
            console.log("------BEM VINDO AO EMPRESTIMO DE LIVRO-----");
            console.log("-------------------------------------------");
            console.log("Digite abaixo o seu id ");
            var usuarioDigitado_1 = leitor.questionInt("ID USUARIO: ");
            var validacaoUsuario = this.registroUsuario.find(function (m) { return m.idUsuario === usuarioDigitado_1; });
            if (validacaoUsuario) {
                console.log("===================================");
                console.log("======== SETOR EMPRESTIMOS ========");
                var livrosEmprestimos_1 = leitor.question("DIGITE O TITULO DO LIVRO: ");
                var verificarLivro = this.registroLivros.find(function (n) { return n.titulo === livrosEmprestimos_1; });
                if (this.registroUsuario[usuarioDigitado_1].livrosEmprestados.length > 3) {
                    console.log("==========================================");
                    console.log("======== NÃO FOI POSSIVEL ================");
                    console.log("=========ja possui livros demais==========");
                }
                if (verificarLivro) {
                    console.log("=======================================");
                    console.log("======== LIVRO EXISTENTE ==============");
                    console.log("=======================================");
                    var quantidadeEmprestada = leitor.questionInt("DIGITE E A QUANTIDADE A SER EMPRESTADA");
                    console.log("QUANTIDADE DISPONIVEL: ", this.registroLivros[livrosEmprestimos_1].quantidadeDisponivel);
                    this.registroLivros[livrosEmprestimos_1].quantidadeDisponivel -= quantidadeEmprestada;
                }
                console.log("========================================");
                console.log("=========quantidade que resta===========");
                console.log(this.registroLivros[livrosEmprestimos_1].quantidadeDisponivel);
            }
            else {
                console.log("==============================================");
                console.log("========NÃO HÁ LIVROS PARA EMPRESTIMOS========");
                console.log("==============================================");
                console.log("===========volte para o cadastro==============");
            }
        }
        else {
            console.log("==============================================");
            console.log("========NÃO HÁ LIVROS NO ESTOQUE==============");
            console.log("==============================================");
        }
    };
    SistemaBiblioteca.prototype.devolverLivro = function () {
        console.log("-------------------------------------------");
        console.log("------BEM VINDO A DEVOLUCAO DOS LIVRO------");
        console.log("-------------------------------------------");
        var usuarioDigitado = leitor.question("USUARIO: ");
        var validacaoUsuario = this.registroUsuario.find(function (m) { return m.nome === usuarioDigitado; });
        if (validacaoUsuario) {
            console.log("====================================");
            console.log("======== SETOR DE DEVOLUCAO ========");
            var identificacaoIdUsuario_1 = leitor.question("Digite o id do usuário: ");
            var verificarId = this.registroUsuario.find(function (m) { return m.idUsuario === identificacaoIdUsuario_1; });
            if (verificarId) {
                console.log("=============================");
                console.log("======== seus livros ========");
                console.log(this.registroLivros.indexOf(identificacaoIdUsuario_1));
                var livroDesejado = leitor.question("DIGITE O TITULO DO LIVRO: ");
                var quantidadeDevolvida = leitor.questionInt("DIGITE A QUANTIDADE: ");
                if (identificacaoIdUsuario_1.quantidadeDisponivel >= quantidadeDevolvida) {
                    console.log("=============================================");
                    console.log("======== LIVRO DEVOLVIDO COM SUCESSO ========");
                    console.log("=============================================");
                    console.log("INFORMACOES DO LIVRO DEVOLVIDO: ");
                    console.log("".concat(livroDesejado.titulo));
                    console.log("".concat(livroDesejado.livroId));
                    livroDesejado.quantidadeDisponivel += quantidadeDevolvida;
                    console.log("OBRIGADO POR DEVOLVER");
                }
                else {
                    console.log("===============================================");
                    console.log("QUANTIDADE DIGITADA INDISPONIVEL PARA DEVOLUÇÃO");
                    console.log("===============================================");
                }
            }
            else {
                console.log("---------------------------------------");
                console.log("------- ID USUARIO NAO ENCONTRADO------");
                console.log("---------------------------------------");
            }
        }
        else {
            console.log("-----------------------------------");
            console.log("-------USUARIO NAO ENCONTRADO------");
            console.log("-----------------------------------");
        }
    };
    SistemaBiblioteca.prototype.consultarLivrosDisponiveis = function () {
        console.log('Estoque de LIVRO:');
        this.registroLivros.forEach(function (registroLivros) {
            console.log("idLivro: ".concat(registroLivros.idLivro));
            console.log("Titulo: ".concat(registroLivros.titulo));
            console.log("Autor: ".concat(registroLivros.autor));
            console.log("Ano: ".concat(registroLivros.anoPublicacao));
            console.log("Quantidade: ".concat(registroLivros.quantidadeDisponivel));
        });
    };
    return SistemaBiblioteca;
}());
exports.SistemaBiblioteca = SistemaBiblioteca;
