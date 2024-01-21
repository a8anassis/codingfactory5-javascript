const user = {
    fullname: "Elon Mask",
    age: 55
}

console.log(JSON.stringify(user))

for (const prop in user) {
    console.log(`${prop} : ${user[prop]}`)
}

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`)
}

