const form = document.querySelector('.myForm');
form.noValidate = true;
const email = document.getElementById('email');
console.log(email.parentElement)



form.addEventListener('submit', validateForm);


function validateForm(e) {

    const form = e.target;

    if(form.checkValidity()) {

    }else {
        e.preventDefault()
        if(email.checkValidity()) {
            email.parentElement.classList.remove('error-msg')
        }
        else {
            email.parentElement.classList.add('error-msg')
        }

    }
};