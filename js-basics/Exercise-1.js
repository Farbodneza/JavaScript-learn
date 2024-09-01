let firstNumber = 10;
let secondNumber = 12;

function acollation(number1, number2) {
    let max = 0;
    if (number1 > number2)
        max = number1;
    else
        max = number2;
    console.log(max);
}
console.log(acollation(firstNumber, secondNumber));