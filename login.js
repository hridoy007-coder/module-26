// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remamber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    //3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value form the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // step-4: verify email and password 
    if(email === 'hridoy@gmail.com' && password === 'hridoy'){
        window.location.href = 'bank.html';
    }
    else{
        alert('toka ami dukta dabo na');
    }
})