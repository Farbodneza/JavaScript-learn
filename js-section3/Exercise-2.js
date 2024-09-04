const numbers = [1, 2, 3, 4];

console.log(numbers.includes(9));

function includes(array, searchElement) {
    let exist = true;
    for (let index of array)
        if (searchElement !== index)
            exist = false;
    return exist;
}