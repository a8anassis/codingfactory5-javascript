$(document).ready(function() {
    $('.images').on('mouseenter', '.img', function() {
        $(this).next().clone().removeClass('hidden').appendTo('#scene')
    })

    $('.images').on('mouseleave', '.img', function() {
        $('#scene').find('div').remove()
    })
})