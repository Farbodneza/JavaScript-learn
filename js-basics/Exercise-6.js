const array = [0, null, undefined, 1, 3]
console.log(countTtuthy(array));

function countTtuthy(array) {
    let counter = 0;
    for (let truthy of array) {
        if (truthy)
            counter += 1;
    }
    return counter;
}