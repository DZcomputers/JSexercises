// BEE 1070 - Seis Números Ímpares (usando For)

let i; // O contador.
let numPrompt; // O número que o usuário colocará.

// Prompt e parse.
numPrompt = prompt('Digite um número inteiro: ');
numPrompt = parseInt(numPrompt);

// Estabelecendo o loop For (a carne do hambúrguer, basicamente).
for (i = 0; i < 6; i++) {
    if (numPrompt % 2 !== 0) {
        console.log(numPrompt);
        numPrompt+=2;
    } else {
        console.log(numPrompt + 1);
        numPrompt+=2;
    }
}

// "Tradução" das linhas 11 a 19:
// O contador vai começar sendo zero. 
// Ele irá adicionar uma unidade ao seu valor até ele atingir um valor menor que seis.
// À medida que ele faz tudo isso, o computador verificará se o número digitado pelo usuário não é divisível por 2. 
// Se for o caso, mostre o número e adiciona 2 a ele sucessivas vezes até o contador não puder mais. 
// Se não, adicione 1 ao número, mostre-o ao usuário e adiciona dois a ele.

// Abaixo é a mesma coisa, só que usando um loop While:
// [...]
// i = 0;
// [...]
// while (i < 6) {
//    i++;
//     if (numPrompt % 2 !== 0) {
//        console.log(numPrompt);
//        numPrompt+=2;
//    } else {
//        console.log(numPrompt + 1);
//        numPrompt+=2;
//    }
// }
