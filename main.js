let cardNumberInput = document.getElementById("card-number")
const wrongFormat = document.querySelector(".wrong-format")
const confirm = document.querySelector(".submit-btn").querySelector('button')
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

monthInput.addEventListener('keyup', () => {
    monthValue = monthInput.value
    if(monthValue < 10){
        cardDate.textContent = `0${monthValue}/${yearValue}`
    }else{
        cardDate.textContent = `${monthValue}/${yearValue}`
    }
})

yearInput.addEventListener('keyup', () => {
    yearValue = yearInput.value
    if (monthValue < 10) {
        cardDate.textContent = `0${monthValue}/${yearValue}`
    } else {
        cardDate.textContent = `${monthValue}/${yearValue}`
    }
})


confirm.addEventListener("click", (e) => {
    confirmDateCvc(e)
    e.preventDefault()
    
})

function confirmDateCvc(e){
    if (monthInput.value == "" || yearInput.value == "") {
        dateNone.classList.add('blank')
    }
    if (monthInput.value == "") {
        e.preventDefault()
        monthInput.classList.add('error')
    } if (yearInput.value == "") {
        e.preventDefault()
        yearInput.classList.add('error')
    } if (cvcInput.value == "") {
        e.preventDefault()
        cvcNone.classList.add('blank')
        cvcInput.classList.add('error')
    }
    if (monthInput.value != "" && yearInput.value != "") {
        dateNone.classList.remove('blank')
    }
    if (monthInput.value != "") {
        e.bubbles = true
        monthInput.classList.remove('error')
    } if (yearInput.value != "") {
        e.bubbles = true
        yearInput.classList.remove('error')
    } if (cvcInput.value != "") {
        e.bubbles = true
        cvcNone.classList.remove('blank')
        cvcInput.classList.remove('error')
    }
}
