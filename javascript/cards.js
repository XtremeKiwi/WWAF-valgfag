// const aliens = fetch('../json/aliens.json')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching JSON:', error));

import {aliens} from './aliens.js'

let card = ''

aliens.forEach((alien) => {
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
    <button>Støt her</button>
    </div>

</div>
`
});
document.querySelector('.card-view-display').innerHTML = card
console.log(card)