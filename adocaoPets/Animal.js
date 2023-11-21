"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDeAnimais = void 0;
var leitor = require("readline-sync");
var Animal = /** @class */ (function () {
    function Animal(nome, raca) {
        this.nome = nome;
        this.raca = raca;
        this.nome = nome;
        this.raca = raca;
    }
    Animal.prototype.emitirSom = function () {
        return "MEOWWWW";
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.speak = function () {
        return "".concat(this.nome, " diz WOOOOF!");
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.speak = function () {
        return "".concat(this.nome, " diz MEOWW!");
    };
    return Gato;
}(Animal));
var SistemaDeAnimais = /** @class */ (function () {
    function SistemaDeAnimais() {
        this.gatos = [];
        this.cachorro = [];
    }
    SistemaDeAnimais.prototype.cadastrarAnimal = function () {
        console.log("-----------------------------");
        console.log("-----------------------------");
        console.log("-----CADASTRO DE ANIMAIS-----");
        console.log("-----------------------------");
        console.log("-----------------------------");
        var raca = leitor.question("RACA DO ANIMAL: ");
        var nome = leitor.question("NOME DO ANIMAL: ");
        var verificarAnimal = this.cachorro.find(function (m) { return m.nome === nome; });
        if (raca === "gato" && verificarAnimal) {
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            console.log("----- GATO CADASTRADO COM SUCESSO--------");
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            var gato = new Gato(nome, raca);
            this.gatos.push(gato);
        }
        else {
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        }
        if (raca === "cachorro" && verificarAnimal) {
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            console.log("-----CACHORRO CADASTRADO COM SUCESSO-----");
            console.log("-----------------------------------------");
            console.log("-----------------------------------------");
            var cachorro = new Cachorro(nome, raca);
            this.gatos.push(cachorro);
        }
        else {
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        }
    };
    SistemaDeAnimais.prototype.interagirAnimais = function () {
        console.log("-------------------------------");
        console.log("-------------------------------");
        console.log("-----INTERAGIR COM ANIMAIS-----");
        console.log("-------------------------------");
        console.log("-------------------------------");
        function animalSounds(animal) {
            console.log("".concat(animal.nome, ", da marca: ").concat(this.raca, " faz o som: ").concat(animal.emitirSom()));
        }
        var dog = new Cachorro("Rex", "cachorro");
        var cat = new Gato("Whiskers", "gato");
        animalSounds(dog);
        animalSounds(cat);
    };
    SistemaDeAnimais.prototype.removerAnimal = function () {
        console.log("-------------------------");
        console.log("-------------------------");
        console.log("-----DELETAR ANIMAIS-----");
        console.log("-------------------------");
        console.log("-------------------------");
        console.log("CACHORROS: ");
        this.cachorro.forEach(function (dogs) {
            console.log("NOME DOG: [".concat(dogs.nome, "] - RACA: ").concat(dogs.raca));
        });
        console.log("GATOS: ");
        this.gatos.forEach(function (cats) {
            console.log("NOME GATO: [".concat(cats.nome, "] - RACA: ").concat(cats.raca));
        });
        var raca = leitor.question("RACA DO ANIMAL: ").tolowerCase();
        var nome = leitor.question("NOME DO ANIMAL: ");
        var verificarAnimal = this.cachorro.find(function (m) { return m.nome === nome; });
        if (raca === "gato" && verificarAnimal) {
            console.log("---------------------------------------");
            console.log("---------------------------------------");
            console.log("----- GATO DELETADO COM SUCESSO--------");
            console.log("---------------------------------------");
            console.log("---------------------------------------");
            this.gatos.splice(nome, 1);
        }
        else {
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        }
        if (raca === "cachorro" && verificarAnimal) {
            console.log("-------------------------------------------");
            console.log("-------------------------------------------");
            console.log("----- CACHORRO DELETADO COM SUCESSO--------");
            console.log("-------------------------------------------");
            console.log("-------------------------------------------");
            this.cachorro.splice(nome, 1);
        }
        else {
            console.log("---------------------------------");
            console.log("---------------------------------");
            console.log("----- algo deu errado amigo -----");
        }
    };
    SistemaDeAnimais.prototype.listarAnimais = function () {
        console.log("-------------------------");
        console.log("-------------------------");
        console.log("-----LISTA DE ANIMAIS----");
        console.log("-------------------------");
        console.log("-------------------------");
        console.log("CACHORROS: ");
        this.cachorro.forEach(function (dogs) {
            console.log("NOME DOG: [".concat(dogs.nome, "] - RACA: ").concat(dogs.raca));
        });
        console.log("GATOS: ");
        this.gatos.forEach(function (cats) {
            console.log("NOME GATO: [".concat(cats.nome, "] - RACA: ").concat(cats.raca));
        });
    };
    return SistemaDeAnimais;
}());
exports.SistemaDeAnimais = SistemaDeAnimais;
