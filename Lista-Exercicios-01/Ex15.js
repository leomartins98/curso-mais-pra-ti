const prompt = require('prompt-sync')();

let somaPonderada = 0;
let somaPesos = 0;
let numero = parseFloat(prompt("Digite um número decimal (digite 0 para parar):"));
let peso = parseFloat(prompt("Digite o peso do número:"));

while (numero !== 0) {
    somaPonderada += numero * peso;
    somaPesos += peso;
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para parar):"));
    if (numero !== 0) {
        peso = parseFloat(prompt("Digite o peso do número:"));
    }
}

const mediaPonderada = somaPesos !== 0 ? somaPonderada / somaPesos : 0;
console.log("Média ponderada:", mediaPonderada);