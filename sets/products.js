const products = [
    { productName: "Apples", city: "Lamia" },
    { productName: "Oranges", city: "Athens" },
    { productName: "Honey", city: "Volos" },
    { productName: "Eggs", city: "Athens" }
]

const cities = ['all', ...newSet(products.map(p => p.city))]