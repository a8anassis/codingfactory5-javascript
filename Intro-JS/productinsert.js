const products = []

class ProductAlreadyExistsError extends Error {
    constructor(message) {
        super(message)
        this.name = "Error123"
    }
}

function insert(arr, product) {
    if (!arr || !product) return

    try {
        if (arr.includes(product)) {
            throw new ProductAlreadyExistsError("Product Exists")  //Error("Product exists")
        } 

        arr.push(product)
        return true
    } catch (error) {
        console.log("Product already exists")
        throw error
    }
}