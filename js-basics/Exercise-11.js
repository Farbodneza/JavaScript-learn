showPrime(20);

function showPrime(limit) {
    for (let i = 2; i <= limit; i++) {

        let isPrime = true;
        for (let j = 2; j < i; j++)
            if ((i % j) === 0)
                isPrime = false;
        if (isPrime === true)
            console.log(i);

    }

}