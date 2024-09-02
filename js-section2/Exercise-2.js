function creatAddress(street, city, zipCode) {
    return {
        street: street,
        city: city,
        zipCode: zipCode
    }

}

let address1 = new Address('bostan', 'Karaj', 14828);
let address2 = new Address('bostan', 'Karaj', 14828);


function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    let equal = true;
    for (let key in address1)
        for (let i in address2)
            if (key === i && address1[key] !== address2[i])
                equal = false;
    return equal;
}
console.log(areEqual(address1, address2));


