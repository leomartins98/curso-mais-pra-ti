const prompt = require('prompt-sync')();

var value = 1

function checkParImpar(value) {

    if (value % 2 === 0) {
        console.log(`${value} é PAR`);
    } else {
        console.log(`${value} é ÍMPAR`);
    }

    
}

while (value > 0) {
    value = parseInt(prompt('Digite um número inteiro: '));
    if (value <= 0) {
        console.log('Programa encerrado!');
        break;
    }else {
    checkParImpar(value);
    }
}