import {aliens} from './aliens.js'
import {addToCart, getCart} from "./cardFunctions.js";

let card = ''
let cards = getCart()

aliens.forEach((alien) => {
    let isInCard = cards.find(cardAlien => cardAlien.alienId === alien.alienId);
    let disabled = isInCard ? "disabled" : "";

    card += `
<div class="card-container">
    <div class="card-image">
        <img src="${alien.alienImage}" alt="${alien.alienName}">
    </div>

    <div class="card-about-me">
        <h5>${alien.alienName}</h5>
        <h5>${alien.alienLifespan} År</h5>
        <h5>${alien.alienDiet}</h5>
    </div>

    <div class="card-description">
        <div class="card-description-text">
            <p>${alien.alienDescription}</p>
        </div>
    </div>

    <div class="sound-and-donation-button">
    <audio controls>
        <source src="${alien.alienSound}" type="audio/wav">
    </audio>
    <button
    class="add-to-cart-button js-add-to-cart"
    data-alien-id = ${alien.alienId}
    ${disabled}>
    Støt her
    </button>
    </div>

</div>
`
});

document.querySelector('.card-view-display').innerHTML = card

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button)
        const alienId = button.dataset.alienId;
        addToCart(alienId);
        button.disabled = true
        button.textContent = "Mange tak"
    })
        if(button.disabled === true){
            button.textContent = "Tak for støtten"}
})