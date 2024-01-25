const contacts = [
    { firstname: "Alice", lastname: "W.", phoneNumber: "2106765432" }, 
    { firstname: "Bob", lastname: "M.", phoneNumber: "2109999999" }
]

function insertContact(firstname, lastname, phoneNumber) {
    if (!firstname || !lastname || !phoneNumber) {
        return
    } 

    contacts.push({firstname, lastname, phoneNumber})
}

function deleteContact(phoneNumber) {
    if (!phoneNumber) return

    let contact = contacts.find(c => c.phoneNumber === phoneNumber)
    if (!contact) return

    let contactPosition = contacts.findIndex(c => c.phoneNumber === phoneNumber)
    contacts.splice(contactPosition, 1)
}

function replace(oldNumber, newNumber) {
    const oldContact = contacts.find(c => c.phoneNumber === oldNumber)
    if (!oldContact) return

    const newContact = contacts.find(c => c.phoneNumber === newNumber)
    if (newContact) return

    contacts.forEach(c => {
        if (c.phoneNumber === oldNumber) c.phoneNumber = newNumber})
}

function traverse(contacts) {
    contacts.forEach(c => console.log(c))
}

traverse(contacts)