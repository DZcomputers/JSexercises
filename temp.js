// Exercício Pessoal 1 - Um console que fica implorando você a inserir seu número favorito (While com contador que exibe uma mensagem diferente dependendo do seu valor e Switchcase que assegura que uma mensagem diferente será exibida quando o contador atingir um certo valor)

// Declaração das variáveis.
let i; // A letra "i" - basicamente - é uma gíria de programação que significa "iterador" (o contador).
let favNumPrompt; // Prompt que basicamente serve como o console te implorando para inserir o número favorito - que, por sinal, é 70.
let messageThingy; // A mensagem (não é aquela tradução da Bíblia lol)

// Prompt inicial e loop While.
favNumPrompt = ('Tente advinhar meu número favorito: ');
i == 0;

while (favNumPrompt !== '70') {
    i++; // Iterará em 1 unidade cada vez que loop for truthy.
    console.log('Nananinanão, meu compatriota!');
    console.log(messageThingy);
    favNumPrompt = ('Tente de novo: ');
    console.log(i);
}

// Switchcase!
switch (i) {
    case i <= 4 && i !== 0: // Menos de 5 ten
        messageThingy = 'Isso mesmo!!';
    break;
    case i <= 8 && i < 12:
        messageThingy = 'Boa...mas, meio que demorou, viu?';
    break;
    case i >= 12 && :
        messageThingy = 'Pelo menos você conseguiu.';
    break:
    case i <==
}
