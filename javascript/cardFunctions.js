import alienCard from './cards'
export let cart = JSON.parse(sessionStorage.getItem('cart'));

// if (!cart){
// cart = [{
//     alienId: '',
//     quantity: 0
// }]
// }

export function addToCart(alienId){
    let matchingAlien;

    cart.forEach((alienCart) => {
        if (alienId === alienCart.alienId) {
            matchingAlien = alienCart
        }
    });

    if(matchingAlien){
        matchingAlien.quantity += 1
    } else {
        cart.unshift({
            alienId: alienId,
            quantity: 1
        })
    }

    saveAlienToCart()
}

function saveAlienToCart() {
    sessionStorage.setItem('cart', JSON.stringify(cart))
}
