const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const phoneNumber = document.getElementById("phone-number");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error")
const button = document.getElementById("button");

button.addEventListener("click", function() {
    validateEmail();
    validateNumber();
    validatePassword();
});

function validateEmail() {
    const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.value.match(regExp)) {
      email.style.borderColor = "red"
      emailError.textContent = "Valid email required";
    }
    else {
        email.style.borderColor = "green";
        emailError.textContent = "";
    }
}

function validateNumber() { 
    if(phoneNumber.value === "") {
        phoneNumber.style.borderColor = "red";
    }
    else {
        return true;
    }
}

function validatePassword() {
    if(password.value !== confirmPassword.value) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        passwordError.textContent = "Password does not match";
    }
    else {
        passwordError.textContent = "";
    }
}