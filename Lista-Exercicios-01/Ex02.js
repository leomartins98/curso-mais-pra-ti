const prompt = require('prompt-sync')();

// Definir o número de eleitores, votos brancos, nulos e válidos
var numeroEleitores = prompt()
var votosBrancos = prompt()
var votosNulos = prompt()
var votosValidos = prompt()


// Calcular os percentuais
const percentualBrancos = (votosBrancos / numeroEleitores) * 100;
const percentualNulos = (votosNulos / numeroEleitores) * 100;
const percentualValidos = (votosValidos / numeroEleitores) * 100;

// Exibir os resultados
console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);