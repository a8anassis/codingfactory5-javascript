const store = `[{"id": "pro4321", "fields": {
    "company": "ikea",
    "colors": ["#ff34ab", "#AD02A8"],
    "featured": true,
    "price": 234.5,
    "genre": "white chair"
}}, {
    "id": "pro4322", "fields": {
        "company": "ikea",
        "colors": ["#ff3412", "#AD0211"],
        "featured": true,
        "price": 300,
        "genre": "white-black chair"
    }
}]`


function fetchProducts(store) {
    const products = JSON.parse(store)
    return products
}


function displayProducts(products) {
    products.forEach(product => {
        let { fields } = product
        let { company, price: myPrice, genre } = fields
        console.log(`${company}, ${myPrice}, ${genre}`)
    })
}

const fetchedProducts = fetchProducts(store)
displayProducts(fetchedProducts)