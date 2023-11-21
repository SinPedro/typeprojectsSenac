import { Aluno } from "./Aluno";
import * as leitor from "readline-sync"

function main(): void{
    let aluno = cadastro();
    console.log(aluno.getMedia());
    
}
function cadastro(): Aluno{
    let nome = leitor.question("DIGITE O NOME DO ALUNO: ")
    let aluno = new Aluno(nome)
    console.log("ALUNO CRIADO COM SUCESSO!");
    let n1 = leitor.questionFloat("DIGITE A PRIMEIRA NOTA: ")
    let n2 = leitor.questionFloat("DIGITE A SEGUNDA NOTA: ")
    let n3 = leitor.questionFloat("DIGITE A TERCEIRA NOTA: ")
    aluno.setNotas(n1,n2,n3)
    return aluno
}
main()
