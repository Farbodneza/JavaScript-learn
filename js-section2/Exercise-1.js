const address = {
    street: 'bostan',
    city: 'Karaj',
    zipcode: 156278
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAddress(address);