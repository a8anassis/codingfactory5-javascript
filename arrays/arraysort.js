const arr = ["Oranges", "Apples", "Honey"]
const arr2 = [1, 48, 5, 12, 23, 99, 45, 31]
arr.sort()
console.log(arr)

// arr2.sort(function(a, b) {
//     return a - b
// })

arr2.sort((a, b) => a - b )
console.log(arr2)