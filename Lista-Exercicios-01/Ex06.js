const prompt = require('prompt-sync')();

// Ler os valores dos lados do triângulo
const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

// Verificar se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    // Verificar o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo");
}