const output = fizzBuzz('salaam')
console.log(output);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'not a number';
    }
    else {
        switch (0) {
            case input % 15:
                return 'FizzBuzz';
                break;
            case input % 3:
                return 'Fizz';
                break;
            case input % 5:
                return 'Buzz';
                break;
            default:
                return input;
                break;
        }
    }
}