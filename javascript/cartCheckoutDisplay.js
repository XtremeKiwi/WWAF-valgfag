import {aliens} from './aliens.js'
import {getCart} from "./cardFunctions.js";

let cartSummary = ''

getCart().forEach((cartItem) => {
    const alienId = cartItem.alienId
    let alien;

    alien = aliens.find((a) => a.alienId === alienId);



    cartSummary += `
    <div class="card-container">
        <div class="card-image">
            <img src="${alien.alienImage}">
        </div>
    
        <div class="card-about-me">
            <h5>${alien.alienName}</h5>
            <h5>${alien.alienLifespan}</h5>
            <h5>${alien.alienDiet}</h5>
        </div>
    
        <div class="card-description">
            <div class="card-description-text">
                <p>${alien.alienDescription}</p>
            </div>
        </div>
    
        <div class="sound-and-donation-button">
            <i class="fa-solid fa-volume-high"></i>
        </div>
        <div class="card-donation">
            <p>Hvor meget ønsker du at give?</p>
            <input type="number" class="input" js-donation-amount = '${alienId}'>
            <select>
                <option>DKK</option>
                <option>USD</option>
                <option>EURO</option>
            </select>
        </div>
    </div>`
});

document.querySelector('.card-view-display-cart').innerHTML = cartSummary