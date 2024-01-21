// LIFO

const myStack = []

function insertAtEnd(item) {
    myStack.push(item)
}

function removeFromEnd() {
    return myStack.pop()
}

insertAtEnd(1)
insertAtEnd(2)
insertAtEnd(3)
insertAtEnd(4)

let item1 = removeFromEnd()
let item2 = removeFromEnd()

console.log(myStack)
console.log(item1)
console.log(item2)

