let selectedColor = ['Red', 'blue'];
selectedColor[2] = '2';
console.log(selectedColor.length);
console.log(selectedColor[0]);


// If a customer has more than 100 Points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';



let a = 'red';
let b = 'blue';
let index = a;
a = b;
b = index;

console.log(a);
console.log(b);



let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning!');
else if (hour >= 12 && hour < 18)
    console.log('Goofd afternoon!');
else
    console.log('Good evening!');
