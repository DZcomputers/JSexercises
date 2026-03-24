// BEE 1114 - Senha Correta (usando While)

// Declarando as variáveis.
let passWord; // Prompt que perguntará pela senha do usuário. Após o usuário inserir uma senha, exibirá uma mensagem.
passWord = prompt('Digite sua senha: '); // prompt inicial.

// Fazendo o While - o loop que o programa fará caso a condição estabelecida nos parênteses persiste (ou, no lingo do JS, for "truthy")
while (passWord != '2002') {
    console.log('Senha inválida.');
    passWord = prompt('Digite sua senha novamente: '); // "novo" prompt.
}

// Saída.
console.log('Acesso permitido.');
