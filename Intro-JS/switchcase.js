let num1 = 10
let num2 = 20
let op = "+"
let result = 0

switch (op) {
    case '+': 
        result = num1 + num2
        break
    case '-':
        result = num1 - num2
        break
    default: result = 0
}

console.log(`Result: ${result}`)


