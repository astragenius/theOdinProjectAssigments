const form = document.querySelector('.myForm');
const submitBtn = document.querySelector('.submit-btn');






submitBtn.addEventListener('click', validateForm);


function validateForm() {
    const regExEmail = /^hello/;
    const email = document.getElementById('email').value.trim();
    const firstName = document.getElementById('first_name').value.trim()
    const lastName = document.getElementById('last_name').value.trim();
    const phone = document.getElementById('phone_number').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirm = document.getElementById('confirm_password').value.trim();

    if(email === "") {
        console.log('email darf nicht leer sein')
        // error msg

    }else if(regExEmail.test(email)) {
       
        //regEx test ob email valide ist.
        // wenn true valide symbol
        console.log('Email ist valide')
    }else {
        //gib eine valide email ein.
        //error msg
        console.log('Email ist nicht valide');
    }

    if(password === "" && confirm === "") {

        // password eingeben bitte
        console.log('Password eingeben')
    }else if(password === confirm) {
        // password ist gleich confirm
        // valide 
        console.log('Password stimmt überein')
    }else {
        // password ist nicht gleich
        //error msg
        console.log('Password stimmt nicht überein.')
    }


   

};