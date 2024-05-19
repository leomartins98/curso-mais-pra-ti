const prompt = require('prompt-sync')();

// Ler as notas das duas avaliações
let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

// Calcular a média semestral
let media = (nota1 + nota2) / 2;

// Verificar se o aluno foi aprovado
if (media >= 6.0) {
    console.log("PARABÉNS! Você foi aprovado");
} else {
    console.log("Você foi REPROVADO! Estude mais");
}

console.log('Média semestral:', media);