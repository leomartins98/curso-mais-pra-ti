const prompt = require('prompt-sync')();

// Objetivo do exercício: Calcular o custo total da compra de maçãs
const numerodeMacas = parseInt(prompt("Número de maçãs:"));

// Calcular o custo total da compra
let totalCompra;
if (numerodeMacas < 12) {
    totalCompra = numerodeMacas * 0.30;
} else {
    totalCompra = numerodeMacas * 0.25;
}

// Exibir o custo total da compra
console.log(`Voce comprou ${numerodeMacas} maçãs: R$ ${totalCompra.toFixed(2)}`);