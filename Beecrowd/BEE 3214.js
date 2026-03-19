// BEE 3214 - Soda Surpler (comentado em inglês)

// Variable declaration.
let emptyStart; // How many empty bottles Tim has at the day's start.
let emptyFound;; // How many empty bottles he found in the street during the same day.
let sodaCost; // How many bottles he needs to recycle to get one full bottle.
let howManySodas; // How many sodas did Tim drink.

// Prompting and parsing (I should probably not keep doing this because a lot of sites use Node - which doesn't support native prompting, but I don't care.)
emptyStart = prompt('How many empty soda bottles does Tim have?: ');
emptyFound = prompt('How many empty soda bottles did Tim find in the street?: ');
sodaCost = prompt('How much does Tim need to recycle to get one full bottle?: ');

emptyStart = parseInt(emptyStart);
emptyFound = parseInt(emptyFound);
sodaCost = parseInt(sodaCost);

// Switchcase that determines the total sodas he'll drink.
switch (emptyFound) {
    case 0:
        howManySodas = ((emptyStart + emptyFound) / sodaCost) + 1;
    break;
    default:
        howManySodas = ((emptyStart + emptyFound) / sodaCost) + 4;
}
        howManySodas = parseInt(howManySodas);

// If-else that makes sure that the program doesn't work if the variables reach certain thresholds.
if (emptyStart > 1000) {
    console.log('Tim can`t carry THAT many sodas!');
} else if (emptyFound > 1000) {
    console.log('There´s not that many soda bottles out there - as much as Tim wants there to be.'); 
} else if (sodaCost > 2000 || sodaCost < 1) {
    console.log('The recycling machine says: "No haggling allowed, kid."');
} else {
    console.log(`Tim drank ${howManySodas} sodas!`); // Actually showing the amount of sodas that he drank.
}
