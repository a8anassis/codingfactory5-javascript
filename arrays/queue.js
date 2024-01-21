// FIFO

const myQueue = []

function insertAtEnd(item) {
    myQueue.push(item)
}

function removeFromFront() {
    return myQueue.shift()
}

insertAtEnd(1)
insertAtEnd(2)
insertAtEnd(3)
insertAtEnd(4)

let item1 = removeFromFront()
let item2 = removeFromFront()

console.log(myQueue)
console.log(item1)
console.log(item2)