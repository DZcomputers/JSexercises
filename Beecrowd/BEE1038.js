// BEE 1038 - Snacks! (usando Ifelse)

// Declaração das variáveis:
let productCode; // o código do produto (permanecerá uma string)
let howMuch; // a quantidade do produto que o cliente quer (será parsado em um número - uma vez que ele é utilizado em uma operação numérica relevante à saída)
let totalPrice; // o preço total do pedido do cliente - que variará dependendo do if.

// Promptando e parsando:
productCode = prompt('Insira o código do produto: ');

howMuch = prompt('Quantos desse produto o cliente quer: ');
howMuch = parseInt(howMuch);

// Tá na hora de Ifelsar.
if (productCode == '1') { // Cachorro quente.
    totalPrice = 4 * howMuch; 
} else if (productCode == '2') { // X-salada.
    totalPrice = 4.50 * howMuch;
} else if  (productCode == '3') { // X-bacon.
    totalPrice = 5 * howMuch;
} else if (productCode == '4') { // Torrada simples.
    totalPrice = 2 * howMuch;
} else if (productCode == '5') { // Refri.
    totalPrice = 1.50 * howMuch;
} else { // Caso nenhum desses três números forem inseridos no prompt.
    console.log('Código inválido.');
    totalPrice = 00; // Botei um número qualquer para indicar um erro - ia botar undefined, mas não dá pra fazer o negócio do toFixed em um string.
}

// A saideira.
console.log(`Total: R$ ${totalPrice.toFixed(2)}`);
