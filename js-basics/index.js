//Variables
let name = 'Farbod';
console.log(name);
// Cannot be a reserved keyword
// Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive


//Constant
const interestRate = 0.3;
console.log(interestRate);

//instead using many vars we just use obgect
//let lastName = 'Nezafati';
//let age = 20;
let person = {
    name: 'Farbpd',
    lastName: 'Nezafati',
    age: 20
};

// Dot Notation
person.name = 'Rose';

// Bracket Notation
person['age'] = 16;

console.log(person);
console.log(person.name);