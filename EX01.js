// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

// Solução: Anos bissextos são aqueles divisíveis por 4, exceto os anos
// divisíveis por 100 (final 00), a menos que sejam também divisíveis por 400.

// 1700 é divisível por 100.
// 1700 não é divisível por 400.
// Portanto, 1700 não é um ano bissexto. 

function ehDataValida(dia, mes, ano) {

    if((mes < 1 || mes > 12) || (dia < 1 || dia > 31)) {  
        return false; 
    }

    const diasNoMes = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (mes === 2) {
        let ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 100 === 0 && ano % 400 === 0);
        if (ehBissexto) {
            if (dia > 29) {
                return false;
            }
        } else {
            if (dia > 28) {
                return false;
            }
        }
    } else {
        if (dia > diasNoMes[mes]) {
            return false;
        }  
    }
    return true;
}

console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (não é ano bissexto)
console.log(ehDataValida(31, 4, 2025)); // false (abril só tem 30 dias)
console.log(ehDataValida(31, 3, 2025)); // true
console.log(ehDataValida(15, 13, 2025)); // false (mês inválido)
console.log(ehDataValida(0, 1, 2025));  // false (dia inválido)
console.log(ehDataValida(1, 1, 2025));  // true