const products = [
    {name: "Milk", price: 10},
    {name: "Honey", price: 20},
    {name: "Honey", price: 10},
    {name: "Honey", price: 50},
    {name: "Honey", price: 220},
    {name: "Oranges", price: 40}
]

products.sort(function(a, b) {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    if (a.name === b.name) {
        // if (a.price > b.price) return 1
        // else if (a.price < b.price) return -1
        // return 0
        return b.price - a.price
    }
})

console.log(products)