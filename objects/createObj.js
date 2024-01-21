const obj = {}

const point = {x: 1, y: 2}

const point3d = new Object()
point3d.x = 3
point3d.y = 5
point3d.z = 8

const obj2 = Object.create(Object.prototype)    // const obj2 = {}

// access
console.log(point.x + ", " + point.y)
console.log(point3d['x'])
console.log(point3d['y'])
console.log(point3d["z"])

