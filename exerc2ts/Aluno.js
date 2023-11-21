"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome) {
        this.notas = [];
        this.nome = nome;
        this.notas = [];
    }
    Aluno.prototype.setNotas = function (n1, n2, n3) {
        this.notas.push(n1);
        this.notas.push(n2);
        this.notas.push(n3);
    };
    Aluno.prototype.getMedia = function () {
        var media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return media;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
