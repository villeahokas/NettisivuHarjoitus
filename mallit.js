if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var orderButtons = document.getElementsByClassName('order-btn')
    for (var i = 0; i < orderButtons.length; i++) {
        var button = orderButtons[i]
        button.addEventListener('click', moveToCart)
    }
}

function moveToCart(event) {
    window.open("kauppa.html","_self")
}