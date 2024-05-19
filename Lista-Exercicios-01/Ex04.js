const prompt = require('prompt-sync')();

// Ler as notas das duas avaliações
const nota1 = parseFloat(prompt('Digite a nota da primeira avaliação: '));
const nota2 = parseFloat(prompt('Digite a nota da segunda avaliação: '));

// Calcular a média semestral
const media = (nota1 + nota2) / 2;

// Verificar se o aluno foi aprovado
if (media >= 6.0) {
    console.log('PARABÉNS! Você foi aprovado');
}

// Escrever a média semestral
console.log('Média semestral:', media);