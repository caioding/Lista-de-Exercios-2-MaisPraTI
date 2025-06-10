// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

let userGuess = parseInt(prompt("Adivinhe o número entre 1 e 100: "));
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 1;

while (userGuess !== randomNumber) {
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.");
    } else if (userGuess > randomNumber) {
        console.log("Mais baixo!");
    } else  {
        console.log("Mais alto!");
    }
    userGuess = parseInt(prompt("Tente novamente: "));
    attempts++;
}
console.log(`Parabéns! Você acertou o número ${randomNumber} em ${attempts} tentativas.`);
console.log("Fim do jogo!");