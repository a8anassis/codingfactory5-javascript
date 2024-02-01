// Initial State
const DEFAULT = 0
let counter = DEFAULT

window.addEventListener('DOMContentLoaded', function() {
    const btnDecr = document.querySelector('#btnDecr')
    const btnReset = document.querySelector('#btnReset')
    const btnIncr = document.querySelector('#btnIncr')

    btnDecr.addEventListener('click', () => onDecreaseClicked())
    btnReset.addEventListener('click', () => onResetClicked())
    btnIncr.addEventListener('click', () => onIncreaseClicked())
})

/**
 * Actions taken after 'Decrease' button was clicked.
 * Actions include deceasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Reset' button was clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Actions taken after 'Increase' button was clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}


// Model

/**
 * Deceases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter()
}

/**
 * Resets the counter and syncs the UI
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}

/**
 * Increases the counter and syncs the UI.
 */
function increaseCounter() {
    counter++
    showCounter()
}

/**
 * Assigns counter to the corresponding UI Element.
 * And gives styling accordingly. 
 */
function showCounter() {
    const counterDOM = document.querySelector('#counter')
    counterDOM.innerHTML = counter
    styleCounter(counterDOM)
}


function styleCounter(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-black', counter === 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    // if (counter > 0) {
    // counterDOM.classList.add('green')    
    //     counterDOM.style.color = "green"
    // } else if (counter < 0) {
    //     counterDOM.style.color = "red"
    // } else {    // if (counter === 0)
    //     counterDOM.style.color = "black"
    // }
}




