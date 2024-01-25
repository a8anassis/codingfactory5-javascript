const jsonStr = { "firstname": "Th.", "lastname":  "Androutsos" }
const jsonPoint = {"x": 1, "y": 2, "isPoint": true}

const teacher = {id: 1, firstname: "Alice", lastname: "Wonderland"}

const jsonTeacher = JSON.stringify(teacher)
console.log(jsonTeacher)

const jsTeacher = JSON.parse(jsonTeacher)
console.log(jsTeacher)