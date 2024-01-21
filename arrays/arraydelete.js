const arr = [1, 2, 3, 4, 5, 6]

arr.forEach((el, index, array) => {
    if (el === 1) {
        array.splice(index, 1)
    }
})

console.log(arr)