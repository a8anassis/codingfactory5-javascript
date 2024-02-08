$(document).ready(function() {
    insertLink()
    // $('#menu').on('click', 'li', function() {
    //     console.log('Clicked on: ' + $(this).text())
    // })
})

// function insertLink() {
//     $('#menu > li').each((index, el) => {
//         if ($(el).is('#link')) {
//             $(el).append(`<br><a href="https://codingfactory.aueb.gr" target="_blank">Visit us</a>`)
//         }
//     })
// }

const response = {title: "Coding Factory", link: "https://codingfactory.aueb.gr"}

function insertLink() {
    $('#menu').find('[id]').each(function(index, el) {
        if ($(el).is('a')) {
            $(el).attr('href', response[el.id])
        }
    })
}