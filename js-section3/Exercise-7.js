
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

console.log(movieSort(movies));

function movieSort(array) {
    let list = [];
    for (let i of array)
        if (i.year === 2018 && i.rating >= 4)
            list.push(i);

    list.sort((a, b) => a.rating - b.rating).reverse;
    return list.map(m => m.title);

}