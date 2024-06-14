let color = undefined   // state of the app

/**
 * Listener
 */
this.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })
})


/**
 * Controller
 * Actions taken after 'Click Me' button, clicked.
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI background
 */
function updateBg() {
    let color = getBgColor()
    showBgColor(color)
}
    
/**
 * Chooses, randomly, a color from a standard list.
 * @returns the color
 */
function getBgColor() {  
    const colors = ['black', 'red', 'green', 'white', 'blue']
    return colors[Math.floor(Math.random() * colors.length)]
}


/**
 * View
 * Fills the values of the corresponding UI Elements.
 * @param {string} bgColor - the given color 
 */
function showBgColor(bgColor) { 
    document.querySelector('#hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}