const products = [
    {id: 1, productName: "Apples"}, {id: 2, productName: "Milk"},
    {id: 3, productName: "Honey"}, {id: 4, productName: "Oranges"},
    {id: 5, productName: "Eggs"}
]

$(document).ready(function() {

    $('#btn').on('click', function(e) {
        e.preventDefault()
        getProductId($('#inputProduct').val().trim())
    })

    $('#inputProduct').on('keyup', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            getProductId($(this).val().trim())
        }
    })
})

function getProductId(id) {
    if (!id) {
        return
    }

    onBeforeGet()
    fetchProduct(id)
}

function onBeforeGet() {
    hideError()
    hideFound()
    resetInputProduct()
}

function hideError() {
    $('.center').find('#error').remove()
}

function hideFound() {
    $('.center').find('#found').remove()
}

function resetInputProduct() {
    $('#inputProduct').val('')
}

function fetchProduct(productId) {
    let result = products.find(({ id }) => id === Number(productId) )
    handleResult(result)
}

function handleResult(result) {
    if (!result) {
        showError()
        return
    }

    showFound(result)
}

function showError() {
    $('body > #error').clone().removeClass('hidden').appendTo('div.center')
}

function showFound(result) {
    $('body > #found').clone().removeClass('hidden')
                        .append($(`<span>${result.productName}</span>`))
                        .appendTo('div.center')
}