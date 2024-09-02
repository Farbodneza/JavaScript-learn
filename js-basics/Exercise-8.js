console.log(sum(10))

function sum(limit) {
    multiplesOf_3sum = null;
    multiplesOf_5sum = null;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            multiplesOf_3sum += i;
        else if (i % 5 === 0)
            multiplesOf_5sum += i;
    }
    return multiplesOf_3sum + multiplesOf_5sum;
}