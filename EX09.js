// 9. Conversão Entre Formatos
// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
  const obj = {};
  for (const [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

// Exemplo de uso:
const pares = [['nome', 'João'], ['idade', 30], ['cidade', 'São Paulo']];
const obj = paresParaObjeto(pares);
console.log(obj); // { nome: 'João', idade: 30, cidade: 'São Paulo' }
const novosPares = objetoParaPares(obj);
console.log(novosPares); // [ [ 'nome', 'João' ], [ 'idade', 30 ], [ 'cidade', 'São Paulo' ] ]