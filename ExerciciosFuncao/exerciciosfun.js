function minhaBio (){
     
    console.log("Sou o Pedro, tenho 25 anos e trabalho mais que o trabalho")
  }
  minhaBio()
  
  
  function novaBio (nome1, idade1, cidade1, profissao1){
      const fraseAlterada = " meu nome é " + nome1 + " , tenho " + idade1 + " moro na cidade de " + cidade1 + " e trabalho com " + profissao1
      return fraseAlterada;
  }
  
      let nome1 = (prompt("DIGITE SEU NOME"))
      let idade1 = Number(prompt("DIGITE SUA IDADE"))
      let cidade1 = (prompt("DIGITE SUA CIDADE"))
      let profissao1 = (prompt("DIGITE SUA PROFISSÃO"))
  
      const resutadoFrase = novaBio(nome1, idade1, cidade1, profissao1)
  
      console.log("A FRASE FINAL FICOU COMO.")
      console.log(resutadoFrase);
  
  
  function somaValores(num1, num2){
      const soma = num1 + num2
      return soma;
  }
      alert("SOMA VALORES:");
      let num1 = Number(prompt("DIGITE O PRIMEIRO VALOR:"))
      let num2 = Number(prompt("DIGITE O SEGUNDO VALOR:"))
  
      const resultado = somaValores(num1, num2)
  
      console.log("O RESULTADO DA SOMA É:");
      console.log(resultado);
  
  
  
      function maiorMenor (valor1, valor2){
          const condicao = valor1 >= valor2
          if(condicao){
              console.log("MAIOR OU IGUAL");
          }else{
              console.log("ALGO DEU ERRADO");
          }
          return condicao;
      }
      alert("MAIOR MENOR");
      let valor1 = Number(prompt("DIGITE O PRIMEIRO VALOR:"))
      let valor2 = Number(prompt("DIGITE O SEGUNDO VALOR:"))
  
      const maiorM = maiorMenor(valor1, valor2)
  
      console.log("INFORMAMOS QUE:"); 
      console.log(maiorM);
  
  
      function verificarPar(numPar){
          const condicaoPar = numPar % 2 == 0 
          if(condicaoPar){
              console.log("NUMERO É PAR");
          }else{
              console.log("NAO É PAR");
          }
          return condicaoPar;
      }
  
      alert("VERIFICAÇÃO DE NÚMERO PAR")
      let numPar = Number(prompt("DIGITE O VALOR PARA VERIFICAÇÃO DO PAR"))
  
      const numeroPar = verificarPar(numPar)
  
      console.log("RESULTADO DA VERIFICAÇÃO:");
      console.log(numeroPar);


      function fraseMai(frase){
        let fraseMudada = frase.toUpperCase();
        return fraseMudada;
      }

      let fraseDigitada = prompt("DIGITE SUA FRASE:")
      const fraseNova = fraseMai(fraseDigitada)

      console.log("SUA FRASE DIGITADA FOI:");
      console.log(fraseDigitada);
      console.log("SUA FRASE ALTERADA FICOU:");
      console.log(fraseNova);
      console.log("O TAMANHO DA SUA FRASE FICOU:");
      console.log(fraseDigitada.length);



      function operacoesAritimeticas(numero1, numero2){
        const soma = numero1 + numero2
        const subtracao = numero1 - numero2
        const divisao = numero1 / numero2
        const multiplicacao = numero1 * numero2
        const resultadoImpressao = ' SOMA: ' + soma + '\n SUBTRAÇÃO: ' + subtracao + '\n DIVISÃO: ' + divisao + '\n MULTIPLICAÇÃO: ' + multiplicacao
        return resultadoImpressao;
    
    }
      let numero1 = Number(prompt("DIGITE O PRIMEIRO VALOR:"))
      let numero2 = Number(prompt("DIGITE O SEGUNDO VALOR:"))

      const resultadoOperacoes = operacoesAritimeticas(numero1, numero2)
      alert("OPERAÇÕES ARITIMÉTICAS BÁSICAS:")
      console.log("seus valores digitados foram:", numero1, numero2);
      console.log("RESTANTES DAS OPERAÇÕES");
      console.log(resultadoOperacoes);      

      function parametro1(name) {
        return "oi, " + name + "!";
      }
      console.log(parametro1("Pedro")); 


      const parametroImpressao = (parametro) =>{
        console.log(parametro);
      }


      const somarImprimir = (numero1, numero2) =>{
        const soma = numero1 + numero2;
        parametroImpressao(soma);
      }

      somarImprimir(5,12);



      function catetoCalculo (numCat1, numCat2){
        const somaCatetos = (numCat1 * numCat1) + (numCat2 * numCat2)
        const equacaoTeorema = Math.sqrt(somaCatetos)
        return equacaoTeorema;
      }

      alert("TEOREMA DE PITÁGORAS")
      alert("EM BUSCA DA HIPOTENUSA")
      let numCat1 = parseFloat(prompt("DIGITE O VALOR DO PRIMEIRO CATETO"))
      let numCat2 = parseFloat(prompt("DIGITE O VALOR DO SEGUNDO CATETO"))

      const resulotadoTeorema = catetoCalculo( numCat1, numCat2)

      console.log("NUMEROS DIGITADOS");
      console.log("NUMERO CATETO 1:", numCat1);
      console.log("NUMERO CATETO 2:", numCat2);
      console.log("EQUAÇÃO: RAIZ QUADRADA DA SOMA DOS! ");
      console.log("RESULTADO DA EQUAÇÃO:", resulotadoTeorema);







    


















