let cardNumber = document.getElementById("card-number")

let regex = /^([\d]{4})([\d]{4})([\d]{4})([\d]{4})$/
cardNumber.addEventListener("keyup", function(){
    if(regex.test(cardNumber.value)){
        cardNumber.value = cardNumber.value.replace(regex, '$1 $2 $3 $4')
    }
})
