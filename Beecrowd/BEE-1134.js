// BEE 1134 - Tipo de Combustível (usando Dowhile ft. Switchcase & Ifelse)

// Declaração das variáveis.
let fuelCodeNumber; // O código (string) do tipo de combustível.
let invalidPrompt;
let iAlcohol; // Um contador que iterará em 1 unidade à medida que o código para álcool (1) for inserido.
let iGasoline; // Idem, só que para gasolina (2).
let iDiesel; // Idem, só que para diesel (3).

// Prompt.
fuelCodeNumber = prompt("Digite o tipo de combustível que foi usado hoje: ");
iDiesel = 0;
iAlcohol = 0;
iGasoline = 0;

// Loop Dowhile.
if (fuelCodeNumber == "4") { // Para acabar logo o código.
    console.log("Dia ruim hoje, né?");
} else 
do { // Switchcase que itera uma unidade a um específico contador dependendo do código inserido e faz com que o prompt inicial ainda se exibe.
    switch (fuelCodeNumber) {
    case "1":
        iAlcohol++;
        fuelCodeNumber = prompt("Digite o tipo de combustível que foi usado hoje: ");
    break;
    case "2":
        iGasoline++;
        fuelCodeNumber = prompt("Digite o tipo de combustível que foi usado hoje: ");
    break;
    case "3":
        iDiesel++;
        fuelCodeNumber = prompt("Digite o tipo de combustível que foi usado hoje: ");
    break;
    default:
        invalidPrompt = prompt('Código inválido. Tente novamente: ');
            if (invalidPrompt == "1") {
                iAlcohol++;
            } else if (invalidPrompt == '2') {
                iGasoline++;
            } else if (invalidPrompt == '3') {
                iDiesel++;
            } else {
                invalidPrompt = prompt('Código inválido. Tente novamente: ');
            }
        fuelCodeNumber = prompt("Digite o tipo de combustível que foi usado hoje: ");
    }
} while (fuelCodeNumber != "4")

// Pode parecer coisa de doente essas linhas de cima, mas só me escuta:
// Sem o Ifelse, o número inserido no negócio do prompt inválido não seria adicionado ao contador.
// Por isso que eu criei uma variável inteira só para o prompt inválido - também para que a lógica
// seja corente com o exemplo do Beecrowd.

// "Tradução" das linhas 34 a 46:
// Se nenhum desses números forem inseridos, um prompt "especial" será mostrado
// e exigirá do usuário um código correto. Se um deles forem inseridos nesse prompt,
// então aumenta o contador e volta para o prompt inicial. Se não, continua até um
// número correto for inserido.

// Saída.
console.log(`MUITO OBRIGADO\n Álcool: ${iAlcohol}\n Gasolina: ${iGasoline}\n Diesel: ${iDiesel}`);
