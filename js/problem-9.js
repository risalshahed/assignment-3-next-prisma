
function validateForm() {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#confirmPassword');

    const nameError = document.querySelector('#nameError');
    const emailError = document.querySelector('#emailError');
    const passwordError = document.querySelector('#passwordError');
    const confirmPasswordError = document.querySelector('#confirmPasswordError');

    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    name = name.value.trim();
    email = email.value.trim();
    password = password.value.trim();
    confirmPassword = confirmPassword.value.trim();

    // Validate Name
    if (name === '') {
        nameError.textContent = 'Name field is empty. Please enter your name.';
        return false;
    } else if (!/^[a-zA-Z, ]+$/.test(name)) {
        nameError.textContent = 'Name should contain only letters. Please enter a valid name.';
        return false;
    }

    // Validate Email
    if (email === '') {
        emailError.textContent = 'Email field is empty. Please enter your email.';
        return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Validate Password
    if (password === '') {
        passwordError.textContent = 'Password field is empty. Please enter a password.';
        return false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password should have a minimum length of 8 characters.';
        return false;
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
        passwordError.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, and one digit.';
        return false;
    }

    // Validate Confirm Password
    if (confirmPassword === '') {
        confirmPasswordError.textContent = 'Password Confirmation field is empty. Please confirm your password.';
        return false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Password doesn\'t match, please check & write the password correctly';
        return false;
    }

    // Form is valid, proceed with submission
    alert('Form is valid. Proceed with the submission.');
    return true;
}