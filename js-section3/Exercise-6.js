const numbers = [10, 2, 3, 4];

const max = getMAx(numbers);

console.log(max);

function getMAx(array) {
    let dis = array.length;
    array = array.sort(function (a, b) { return a - b });
    return array[dis - 1];
}