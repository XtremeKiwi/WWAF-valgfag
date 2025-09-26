export function getCart(){
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export function addToCart(alienId){
    let matchingAlien;
    let cart = getCart();

    cart.forEach((alienCart) => {
        if (alienId === alienCart.alienId) {
            matchingAlien = alienCart
        }
    });

    if(matchingAlien){
        return;
    } else {
        cart.unshift({
            alienId: alienId,
            amount: 0
        })
    }

    saveToCart(cart)
}

export function saveToCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}
function saveAmountToCart(){

}

// const amount = input.value
