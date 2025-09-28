let cart = localStorage.getItem('cart')
let email = localStorage.getItem('email')
let firstName = localStorage.getItem('firstName')
let lastname = localStorage.getItem('lastName')
let cartParse = JSON.parse(cart)


const totalAmount = sumAmounts(cartParse);
const firstNameText = firstName
const emailText = email



function sumAmounts(cartParse) {
 return cartParse.reduce((total, donation) => total + parseInt(donation.amount, 10), 0);
}



const takForStøtten = `
<div class="scan-wrapper">
    <h3>
        Tak for støtten <strong>${firstNameText + ' ' + lastname}</strong> vi har sendt en bedsked til <strong>${emailText}</strong> om donationen.
    </h3>
        <h3>Fulde donation: ${totalAmount}</h3>
    <h1>
        Scan venligst QR kode
    </h1>
    <img src="../img/mobilePay%20qr.png">


</div>
`;



document.querySelector('.thank-you').innerHTML = takForStøtten
console.log(totalAmount);
console.log(localStorage)