function add(a, b) {
    return a + b
}

console.log(add())


function sub(a, b) {
    if (a && b) {
        return a - b
    }
    return 0;
}

function mul(a, b) {
    a = a || 0
    b = b || 0
    
    return a * b
}