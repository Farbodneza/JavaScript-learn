const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    for (let i = 1; i <= Math.abs(offset); i++) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
        index += 1;
    }
    return array;
}