const prompt = require('prompt-sync')();

const codigoOrigem = parseInt(prompt('Digite o código de origem do produto: '));

if (codigoOrigem === 1) {
    console.log('Sul');
}
else if (codigoOrigem === 2) {
    console.log('Norte');
}
else if (codigoOrigem === 3) {
    console.log('Leste');
}
else if (codigoOrigem === 4) {
    console.log('Oeste');
}
else if (codigoOrigem === 5 || codigoOrigem === 6) {
    console.log('Nordeste');
}
else if (codigoOrigem === 7 || codigoOrigem === 8 || codigoOrigem === 9) {
    console.log('Sudeste');
}
else if (codigoOrigem >=10 && codigoOrigem <= 20) {
    console.log('Centro-Oeste');
}
else if (codigoOrigem >=25 && codigoOrigem <= 50) {
    console.log('Nordeste');
}
else {
    console.log('Importado');
}   