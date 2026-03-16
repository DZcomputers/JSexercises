// Declaração das variáveis
let areaCirc;
const pi = 3.14159;
let radius;

// Prompt e parse do raio
radius = prompt('Type in the radius of the circle: ');
radius = parseFloat(radius.toFixed(2));

// Definindo areaCirc e fazendo um console-log do negócio
areaCirc = pi * radius * radius;
console.log(`A=${areaCirc.toFixed(4)}`);
