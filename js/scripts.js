// GET classes & IDs

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password check');

// CHECK inputs

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

// define function to check inputs AFTER submitting

function checkInputs() {
    // get input VALUES

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

    // USERNAME CHECK

    if (usernameValue === '' || usernameValue === null) {
        // add error class (analogous to ToDo project)

        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username)
    }

    // EMAIL CHECK

    if (emailValue === '') {
        // add error class (analogous to ToDo project)

        setErrorFor(email, 'E-mail cannot be blank');
    } else if (!emailIsValid(emailValue)) {
        setErrorFor(email, 'E-mail is not valid.');
    } else {
        setSuccessFor(email);
    }

    //PASSWORD CHECK

    if (passwordValue === '' || passwordValue === null) {
        // add error class (analogous to ToDo project)

        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password)
    }

    // PASSWORD CHECK CHECK

    if (passwordCheckValue === '' || passwordCheckValue === null) {
        // add error class (analogous to ToDo project)

        setErrorFor(passwordCheck, 'Password check cannot be blank');
    } else if (passwordCheckValue !== passwordValue) {
        setErrorFor(passwordCheck, 'Password check must equal password');
        setErrorFor(password, 'Password check must equal password');
    } else {
        setSuccessFor(passwordCheck);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // aiming for a DIV
    const small = formControl.querySelector('small'); // select small element.. 

    // insert error message inside small element

    small.innerText = message;

    // insert error class into form control

    formControl.classList.add('error');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

// E-mail format check 

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}