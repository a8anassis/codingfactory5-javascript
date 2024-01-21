const text = "05/12/2023 10/01/2024"
const datePattern = /([0-9]{2})\/(\d{2})\/(\d{4})/g

let match

while ((match = datePattern.exec(text)) != null) {
    let [full, day, month, year] = match
    console.log(`full: ${full}, day: ${day}, month: ${month}, year: ${year}`)
}


