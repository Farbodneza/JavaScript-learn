const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2, 4]);

console.log(output);

function except(array, excluded) {
    for (let i of excluded) {
        array = array.filter(number => number !== i);
    }
    return array;
}