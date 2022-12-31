const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show error function
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

// function showError(input, message) {
//     const formControl = input.parentElement;
//     formControl.className = 'form-control error';
//     const small = formControl.querySelector('small');
//     small.innerText = message; 
// }


//show success
const showSuccess = (input) => {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//check required inputs
const checkRequired = (inputArr) => {
    inputArr.forEach(input => {
        input.value.trim() === '' ? showError(input, `${getFieldName(input)} is required`) : showSuccess(input)
    });
}


// check input length
const checkLength = (input, min, max) => {
    input.value.length < min ? showError(input, `${getFieldName(input)} must be atleast 3 characters`)
                             : input.value.length > max 
                             ? showError(input, `${getFieldName(input)} must be less than 15 characters`)
                             : showSuccess(input);
}

//check passwords match
const checkPasswordsMatch = (firstInput, secondInput) => {
    firstInput.value !== secondInput.value ? showError(secondInput, "Passwords do not match")
                                           : showSuccess(input)
}

//get field name
const getFieldName = (input) => input.id.charAt(0).toUpperCase() + input.id.slice(1);


form.addEventListener('submit', function (e) {
    e.preventDefault();
    

   checkRequired([username, email, password, password2]);
   checkLength(username, 3, 15);
   checkLength(password, 6, 25);
   validateEmail(email);
   checkPasswordsMatch(password, password2);
   
});