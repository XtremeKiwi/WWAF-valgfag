import {getCart, saveToCart} from "./cardFunctions.js";

document.querySelector('#checkout-button').addEventListener('click', () => {
    const emailInput = document.querySelector('.input-email')
    const fNameInput = document.querySelector('.input-firstname')
    const lNameInput = document.querySelector('.input-lastname')

    if (emailInput.value === '' || fNameInput.value === '' || lNameInput.value === ''){
        alert("Venligst udfyld formen")
    } else {
        let cart = getCart()

        cart = cart.map((cartItem) => {
            console.log(cartItem)
        let inputElement = document.querySelector('[js-donation-amount="' + cartItem.alienId + '"]')
            console.log(inputElement.value)
            cartItem.amount = inputElement.value
            return cartItem;
        });
        console.log(cart)
        saveToCart(cart)
    }
})

// søg efter javascript redirect //
