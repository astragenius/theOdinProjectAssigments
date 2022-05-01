const form = document.querySelector('.myForm');
const submitBtn = document.querySelector('.submit-btn');
const firstName = document.getElementById('first_name')


const lastName = document.getElementById('last_name')
const phone = document.getElementById('phone_number')
const password = document.getElementById('password');
const confirm = document.getElementById('confirm_password')
const email = document.getElementById('email');

function init() {

    
    firstName.addEventListener('input', function(event) {
        
    
        firstName.value = firstName.value.trim();
    
        if(firstName.validity.valueMissing) {
            errorMsg('*please enter your first name', firstName);
        }else {
            errorMsg('', firstName);
        }
    
       
    })
    
    lastName.addEventListener('input', function() {
        console.log(lastName.validity.valueMissing)
        if(lastName.validity.valueMissing) {
            errorMsg('*please enter your last name', lastName);
        }else {
            errorMsg('', lastName);
        }
    })
    
    email.addEventListener('change', function() {
        console.log(email.validity.valid)
        if(!email.validity.valueMissing && email.validity.patternMismatch) {
            errorMsg('*please enter an valid email adress', email)
        }else {
            console.log('Email ist valide')
            errorMsg('', email)
        }
        
    })
    
    phone.addEventListener('change', function() {
        phone.value = phone.value.trim();
        console.log(phone)
        if(phone.validity.valid) {
            errorMsg('', phone);
        }else {
            errorMsg('*please enter an valid phone number', phone)
        }
    })
    
    password.addEventListener('input', function() {
        
        if(password.value.trim() === confirm.value.trim()) {
            errorMsg('', confirm);
        }
    })
    
    confirm.addEventListener('input', function() {
        
        
        if(confirm.value.trim() === password.value.trim()) {
            
            errorMsg('', confirm);
            errorBorder(confirm, 'green')
            
           
        }else {
            console.log('Password stimmt nicht überein')
           
            errorMsg('Password does not match', confirm);
            errorBorder(confirm, 'red');
        }
    })
    
    function errorMsg(msg, input) {
    
        let element = input.nextElementSibling;
        element.textContent = msg;
    }
    function errorBorder(input, color) {

        input.style.borderColor = color;
    }
}
    

init();

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