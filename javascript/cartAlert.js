import {getCart, saveToCart} from "./cardFunctions.js";

const emailInput = document.querySelector('.input-email')
const fNameInput = document.querySelector('.input-firstname')
const lNameInput = document.querySelector('.input-lastname')
const checkoutButton = document.querySelector('#checkout-button')
const deleteButton = document.querySelector('.deleteLocalStorage')

checkoutButton.addEventListener('click', () => {

    if (emailInput.value === '' || fNameInput.value === '' || lNameInput.value === ''){
        alert("Venligst udfyld formen")
    }
    else {
        let cart = getCart()

        cart = cart.map((cartItem) => {
            let inputElement = document.querySelector('[js-donation-amount="' + cartItem.alienId + '"]')
            cartItem.amount = inputElement.value
            return cartItem;
        });

        window.location.href = '../html/scan.html'
        saveToCart(cart)
    }
});

checkoutButton.addEventListener('click', () => {

    localStorage.setItem('email', emailInput.value)
    localStorage.setItem('firstName', fNameInput.value)
    localStorage.setItem('lastName', lNameInput.value)

});

deleteButton.addEventListener('click', () => {
    localStorage.removeItem('cart')
    window.location.reload()
});


console.log(localStorage)

