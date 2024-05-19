const prompt = require('prompt-sync')();

const value1 = parseFloat(prompt('Digite o primeiro valor: ')); 
const value2 = parseFloat(prompt('Digite o segundo valor: '));

if (value1 < value2) { 
    console.log(`Os valores em ordem crescente são: ${value1}, ${value2}`); 
} else { 
    console.log(`Os valores em ordem crescente são: ${value2}, ${value1}`); 
}