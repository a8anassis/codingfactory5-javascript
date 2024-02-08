$(document).ready(function() {
    $('#menu').on('click', 'li', function() {
        console.log('Clicked on: ' + $(this).text())
    })
})