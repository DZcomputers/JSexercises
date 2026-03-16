// BEE 1050 - DDD (usando Switchcases)

// Declaração das variáveis:
let dddPrompt;
let city; // 'city' é uma variável que armazenará o nome de uma cidade (que é uma string, obviamente) - a qual variará em cada caso. Usado para assegurar a menor quantidade de console.logs possíveis (valeu, Carubbi, pela dica)

// Promptando e parsando:
dddPrompt = prompt('Digite um DDD: ');
dddPrompt = parseInt(dddPrompt); // parseInt é usado porquê o DDD é sempre um número inteiro, não um de ponto flutuante.

// Hora do switchcase babyyyyyy
switch (dddPrompt) {
    case 61:
        city = 'Brasília';
    break;
    case 71:
        city = 'Salvador';
    break;
    case 11:
        city = 'São Paulo';
    break;
    case 21:
        city = 'Rio de Janeiro';
    break;
    case 32:
        city = 'Juiz de Fora';
    break;
    case 19:
        city = 'Campinas';
    break;
    case 27:
        city = 'Vitória';
    break;
    case 31:
        city = 'Belo Horizonte';
    break;
    default:
        city = 'DDD não cadastrado.';
}

// Saída - o console, após o usuário digitar um DDD, irá mostrar a qual estado esse DDD pertence:
console.log(city);
