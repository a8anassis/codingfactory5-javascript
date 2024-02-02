let noteId = 0
const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 
                    'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου',
                    'Νοεμβρίου', 'Δεκεμβρίου']

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(printGRDate, 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        insertNote(document.querySelector('#inputNote').value.trim())
        reset()
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            insertNote(this.value.trim())
            reset()
        }
    })
})

function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    let dayStr = daysGR[day]
    let monthStr = monthsGR[month]
    let dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    let timeStr = `${(hours < 10) ? '0' : ''}${hours}:
                    ${(minutes < 10) ? '0' : ''}${minutes}:
                    ${(seconds < 10) ? '0' : ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + "<br>" + timeStr
}

function insertNote(note) {
    if (!note) return

    noteId++
    let clone = document.querySelector('.note.hidden').cloneNode(true)
    clone.classList.remove('hidden')

    clone.querySelector('#noteCheck').addEventListener('click', function() {
        strikeThrough(clone.querySelector('.note-text'))
    })

    clone.querySelector('#noteDelBtn').addEventListener('click', function() {
        deleteNote(this.parentNode)
    })

    let cloneNote = clone.querySelector('.note-info')
    cloneNote.children[0].id = 'noteCheck' + noteId
    cloneNote.children[1].htmlFor = 'noteCheck' + noteId


    clone.querySelector('.note-text').innerHTML = note
    document.querySelector('.notes-wrapper').appendChild(clone)
}

function strikeThrough(element) {
    element.classList.toggle('line-through')
}

function deleteNote(note) {
    note.remove()
}

function reset() {
    document.querySelector('#inputNote').value = ''
}