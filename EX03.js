// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

const prompt = require("prompt-sync")();

const str = prompt("Digite uma frase: ");
if (str.trim() === "") {
    console.log("A string não pode estar vazia.");
}
const inputWords = str.match(/\b\w+\b/g);
const uniqueWords = [];
for (let i = 0; i < inputWords.length; i++) {
    const word = inputWords[i];
    if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
    }
}
// Exemplo de uso = "ola ola mundo mundo"
console.log(uniqueWords); // ["ola", "mundo"]