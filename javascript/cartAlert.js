const emailInput = document.querySelector('.input-email')
const fNameInput = document.querySelector('.input-firstname')
const lNameInput = document.querySelector('.input-lastname')
const button = document.querySelector('.hrefButton')

function fillForm() {
    if (emailInput.value === '' || fNameInput.value === '' || lNameInput.value === ''){
        alert("Venligst udfyld formen")
    } else{
        button.href = '../html/scan.html'
    }
}
