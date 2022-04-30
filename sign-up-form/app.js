const form = document.querySelector('.myForm');
const submitBtn = document.querySelector('.submit-btn');




const firstName = document.getElementById('first_name')







const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const lastName = document.getElementById('last_name')
const phone = document.getElementById('phone_number').value.trim();
const password = document.getElementById('password');
const confirm = document.getElementById('confirm_password')
const email = document.getElementById('email');

    

firstName.addEventListener('input', function(event) {
    console.log(firstName.validity.valueMissing)

    firstName.value = firstName.value.trim();

    if(firstName.validity.valueMissing) {
        console.log('Bitte geben sie einen Namen ein')
    }

   
})

lastName.addEventListener('input', function() {
    if(lastName.validity.valueMissing) {
        console.log('Bitte geben sie einen Nachnamen ein')
    }
})

email.addEventListener('input', function() {
    console.log(email.validity.valid)
    if(!email.validity.valueMissing && email.validity.patternMismatch) {
        console.log('Bitte geben sie eine Email ein')
    }else {
        console.log('Email ist valide')
    }
    
})




form.addEventListener('submit', function(event) {


})