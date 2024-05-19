const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let numero = parseFloat(prompt("Digite um número decimal (digite 0 para parar):"));

while (numero !== 0) {
    soma += numero;
    contador++;
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para parar):"));
}

const media = contador !== 0 ? soma / contador : 0;
console.log("Média:", media);