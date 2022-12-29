const cardDetails = document.querySelector(".card-details")
const thankYou = document.querySelector(".thank-you")
let cardNumberInput = document.getElementById("card-number")
const wrongFormat = document.querySelector(".wrong-format")
const confirmBtn = document.querySelector(".submit-btn").querySelector('.confirm')
const continueBtn = document.querySelector(".continue")
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const dateCvcInput = document.querySelector('.date-and-cvc').querySelectorAll('input')
const dateNone = document.querySelector(".date-none")
const cvcNone =document.querySelector(".cvc-none")
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const cvcInput = document.getElementById('cvc')
const nameInput = document.getElementById('name')
const cardName = document.querySelector('.name').querySelector('p')
const cardCvc = document.querySelector('.cvc').querySelector('p')
const cardNumber = document.querySelector('.card-number').querySelector('p')
const cardDate = document.querySelector('.date').querySelector('p')
let monthValue = ''
let yearValue = ''
let confirmMonth = true
let confirmYear = true
let confirmCvc = true

let cardNumberInputRegex = /^([\d]{4})([\d]{4})([\d]{4})([\d]{4})$/
let letter = /[a-z]{1,}/ig
cardNumberInput.addEventListener("keyup", function () {
    cardNumberInput.value = cardNumberInput.value.replace(cardNumberInputRegex, '$1 $2 $3 $4')
    if(letter.test(cardNumberInput.value)){
        wrongFormat.style.display = "block"
        cardNumberInput.classList.add("error")
    }else{
        wrongFormat.style.display = "none"
        cardNumberInput.classList.remove("error")
    }
    cardNumber.textContent = cardNumberInput.value
})

nameInput.addEventListener('keyup', () => {
    cardName.textContent = nameInput.value.toUpperCase()
})

cvcInput.addEventListener('keyup', () => {
    cardCvc.textContent = cvcInput.value
})

monthInput.addEventListener('change', () => {
    monthValue = monthInput.value
    if(monthValue < 10 && monthValue.length == 1){
        cardDate.textContent = `0${monthValue}/${yearValue}`
    }else{
        cardDate.textContent = `${monthValue}/${yearValue}`
    }
})

monthInput.addEventListener('keyup', () => {
    monthValue = monthInput.value
    if(monthValue < 10 && monthValue.length == 1){
        cardDate.textContent = `0${monthValue}/${yearValue}`
    }else{
        cardDate.textContent = `${monthValue}/${yearValue}`
    }
})

yearInput.addEventListener('keyup', () => {
    yearValue = yearInput.value
    if (monthValue < 10 && monthValue.length == 1) {
        cardDate.textContent = `0${monthValue}/${yearValue}`
    } else {
        cardDate.textContent = `${monthValue}/${yearValue}`
    }
})


confirmBtn.addEventListener("click", (e) => {
    confirmDateCvc(e)
    e.preventDefault()
    if(confirmMonth == true && confirmYear == true && confirmCvc == true){
        cardDetails.style.display = "none"
        thankYou.style.display = "block"
    }
})

continueBtn.addEventListener("click", () => {
    cardDetails.style.display = "block"
    thankYou.style.display = "none"
})

function confirmDateCvc(e){
    if (monthInput.value == "" || yearInput.value == "") {
        dateNone.classList.add('blank')
        confirmMonth = false
        confirmYear = false
    }
    if (monthInput.value == "") {
        e.preventDefault()
        monthInput.classList.add('error')
        confirmMonth = false
    } if (yearInput.value == "") {
        e.preventDefault()
        yearInput.classList.add('error')
        confirmYear = false
    } if (cvcInput.value == "") {
        e.preventDefault()
        cvcNone.classList.add('blank')
        cvcInput.classList.add('error')
        confirmCvc = false
    }
    if (monthInput.value != "" && yearInput.value != "") {
        dateNone.classList.remove('blank')
        confirmMonth = true
        confirmYear = true
    }
    if (monthInput.value != "") {
        e.bubbles = true
        monthInput.classList.remove('error')
        confirmMonth = true
    } if (yearInput.value != "") {
        e.bubbles = true
        yearInput.classList.remove('error')
        confirmYear = true
    } if (cvcInput.value != "") {
        e.bubbles = true
        cvcNone.classList.remove('blank')
        cvcInput.classList.remove('error')
        confirmYear = true
    }
}
