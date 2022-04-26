const form = document.querySelector('.myForm');
form.noValidate = true;





form.addEventListener('submit', validateForm);


function validateForm(e) {
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
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