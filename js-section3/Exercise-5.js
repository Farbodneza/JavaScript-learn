const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 1);

console.log(count)

function countOccurrences(array, searchElement) {
    let counter = 0;
    for (let index of array)
        if (searchElement === index)
            counter += 1;
    return counter;
}