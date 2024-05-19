const prompt = require('prompt-sync')();

// Ler o valor de N
const N = parseInt(prompt('Digite um valor para N: '));

// Calcular e mostrar a tabuada de 1 até N
for (let i = 1; i <= N; i++) {
    console.log(`${i} x ${N} = ${i * N}`);
}