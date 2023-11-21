"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.obterDetalhes = function () {
        return "T\u00CDTULO: ".concat(this.titulo, ", AUTOR: ").concat(this.autor, ", A. PUBLICA\u00C7\u00C3O ").concat(this.anoPublicacao);
    };
    return Livro;
}());
exports.Livro = Livro;
