function swap(a, b) {
    let tmp = a;
    a = b;
    b = tmp;
}

let a = 10
let b = 20
swap(a, b)
console.log(a, b)