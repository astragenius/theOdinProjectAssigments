const form = document.querySelector('.myForm');
const submitBtn = document.querySelector('.submit-btn');
const firstName = document.getElementById('first_name')
const regExEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const lastName = document.getElementById('last_name')
const phone = document.getElementById('phone_number')
const password = document.getElementById('password');
const confirm = document.getElementById('confirm_password')
const email = document.getElementById('email');


    

firstName.addEventListener('change', function(event) {
    console.log(firstName.validity.valueMissing)

    firstName.value = firstName.value.trim();

    if(firstName.validity.valueMissing) {
        console.log('Bitte geben sie einen Namen ein')
    }

   
})

lastName.addEventListener('change', function() {
    if(lastName.validity.valueMissing) {
        console.log('Bitte geben sie einen Nachnamen ein')
    }
})

email.addEventListener('change', function() {
    console.log(email.validity.valid)
    if(!email.validity.valueMissing && email.validity.patternMismatch) {
        console.log('Bitte geben sie eine Email ein')
    }else {
        console.log('Email ist valide')
    }
    
})

phone.addEventListener('change', function() {
    phone.value = phone.value.trim();
    if(phone.validity.valid) {
        console.log('Tel number ist ok!!')
    }else {
        console.log('Bitte geben sie eine Tel numer ein')
    }
})

password.addEventListener('change', function() {

})

confirm.addEventListener('input', function() {
    console.log(confirm)
    
    if(confirm.value.trim() === password.value.trim()) {
        //passwordConfirm = true;
        errorMsg('', confirm);
       
    }else {
        console.log('Password stimmt nicht überein')
        //passwordConfirm = false;
        errorMsg('Password does not match', confirm);
    }
})

function errorMsg(msg, input) {

    let element = input.nextElementSibling;
    element.textContent = msg;
}



form.addEventListener('submit', function(event) {
    
    let inputs = [...form.querySelectorAll('input')]
    let inputValid = inputs.every(e => e.validity.valid === true)
    let passwordConfirm = (password.value.trim() === confirm.value.trim()) ? true : false;
    if(inputValid === false) {
        event.preventDefault();
    }else if(passwordConfirm === false) {
        event.preventDefault()
        
    }
    
})