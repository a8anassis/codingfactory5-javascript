$(document).ready(function() {
    sayLorem()
})

function sayLorem() {
    // const p = $('<p></p>')
    // p.html(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    // Iure earum dolor odit reprehenderit minus velit iusto placeat quos fuga 
    // quaerat sit perferendis, inventore neque cupiditate nemo repellendus. 
    // Laudantium, blanditiis obcaecati!`)

    // $('body').append(p)

    $(`<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
     Iure earum dolor odit reprehenderit minus velit iusto placeat quos fuga 
     quaerat sit perferendis, inventore neque cupiditate nemo repellendus. 
     Laudantium, blanditiis obcaecati!</p>`).appendTo('body')
}