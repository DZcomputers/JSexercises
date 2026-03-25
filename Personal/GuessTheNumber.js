// Exercício Pessoal 1 - Um console que fica implorando você a inserir seu número favorito (While com contador que exibe uma mensagem diferente dependendo do seu valor e um Ifelse a qual assegura uma mensagem diferente será exibida quando o contador atingir um certo valor)

// Declaração das variáveis.
let i; // A letra "i" - basicamente - é gíria de programação que significa "iterador" (o contador).
let favNumPrompt; // Prompt que basicamente serve como o console te implorando para inserir o número favorito - que, por sinal, é 70.
let messageThingy; // A mensagem (não é aquela tradução da Bíblia lol)

// Prompt inicial e loop While.
favNumPrompt = prompt('Tente advinhar meu número favorito: ');
favNumPrompt = parseInt(favNumPrompt);
i = 0;

while (favNumPrompt !== 70) {
    i++; // Iterará em 1 unidade cada vez que loop for truthy.
    console.log('Nananinanão, meu compatriota!');
    favNumPrompt = prompt('Tente de novo: ');
    favNumPrompt = parseInt(favNumPrompt);
}

// Ifelse porquê - de acordo com o ChatGPT - o Switchcase não funciona para mais de uma condição com operadores booleanos.
if (i <= 4 || i == 0) { // Menos de 5 tentativas.
    messageThingy = 'Isso mesmo!!';
} else if (i >= 4 && i < 12) { // Menos de 13 tentativas.
    messageThingy = 'Boa! Mas...meio que demorou, viu?';
} else if (i >= 12 && i < 18) { // Menos de 19 tentativas.
    messageThingy = 'Pelo menos você conseguiu.';
} else if (i >= 18 && i < 28) { // Menos de 29 tentativas.
    messageThingy = 'É sério isso.';
} else { // Mais de 29.
    messageThingy = 'Pô - finalmente, né?!';
}

console.log(messageThingy);
