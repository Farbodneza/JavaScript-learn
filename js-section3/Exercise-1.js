const numbers = arrayFromRange(-10, -4);

console.log(numbers);

function arrayFromRange(min, max) {
    const array = [min, max];
    let diff = max - min;
    let dis = diff > 0 ? diff : -diff;
    for (let i = 1; i < dis; i++) {
        array.splice(i, 0, min + 1);
        min = array[i];
    }
    return array;
}

