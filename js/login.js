// step : 1 add click event handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function(){
    // step : 2 get the email adderss inside the email input field
    // always remember to use .value to get text from the input field
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // step : 3 get the passeord 
    // 3.a : set id on the html element 
    // 3.b : get the element 
    // 3.c : get the value from the element 
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // DANGER : Do not verify email and password on the client side 
    // verify email and password 
    if(email === 'sontan@baap.com' && password ==='secret'){
        window.location.href = 'bank.html';
    }else{
        alert('Tui password vhule gesos!! Toke ami tejjo krolem');
    }
})