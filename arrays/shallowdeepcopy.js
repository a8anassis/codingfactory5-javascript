const products1 = [{id: 1, proName: "Milk"}, {id: 2, proName: "Eggs"}]
const products2 = [{id: 1, proName: "Milk"}, {id: 2, proName: "Eggs"}]

const shallowCopy1 = [...products1]
shallowCopy1[0].id = 10
console.log(products1)

const deepCopy = JSON.parse(JSON.stringify(products2))
deepCopy[0]['id'] = 10
console.log(products2)


