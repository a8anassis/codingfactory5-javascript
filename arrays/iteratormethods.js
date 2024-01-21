const arr = ["Alice", "Bob", "Costas", "Demi", "Elon"]
const quantities = [4, 9, 10, 2, 5, 1, 7]
const grades = [4, 9, 10, 2, 5, 1, 7]

// foreach
arr.forEach(function(el) {
    console.log(el)
})

// foreach
arr.forEach(el => console.log(el))

// filter
const filtered1 = arr.filter(firstname => firstname.startsWith('A'))
const filtered2 = arr.filter(firstname => firstname.length >= 5)
console.log(filtered1)
console.log(filtered2)

// map
const firstnames = arr.map(firstname => "Firstname: " + firstname)
console.log(firstnames)

// reduce
let sum = quantities.reduce((total, quantity) => total + quantity, 0)
console.log(sum)

// reduce
let avg = grades.reduce((total, val, _, { length }) => total + val / length, 0)
console.log(avg.toFixed(2))

//find
const alicename = arr.find((firstname => firstname === "Alice"))
console.log(alicename)

//find index
const aliceIndex = arr.findIndex((firstname => firstname === "Alice"))
console.log(aliceIndex)

// some 
let startsWithC = arr.some(firstname => firstname.startsWith('C'))
console.log(startsWithC)

// some 
let valid = arr.every(firstname => firstname.length > 2)
console.log(startsWithC)


