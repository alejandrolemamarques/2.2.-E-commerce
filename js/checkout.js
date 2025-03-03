// Exercise 6
function validate() {
    let error = 0;
    // Get the input fields
    const fName = document.getElementById("fName");
    const fLastN = document.getElementById("fLastN");
    const fEmail = document.getElementById("fEmail");
    const fAddress = document.getElementById("fAddress");
    const fPassword = document.getElementById("fPassword");
    const fPhone = document.getElementById("fPhone");

    // Regular expressions for validation
    const lettersOnly = /^[A-Za-z\s]+$/;
    const numbersOnly = /^\d{9}$/;
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;

    // Reset previous error states
    const inputs = [fName, fLastN, fEmail, fAddress, fPassword, fPhone];

    inputs.forEach((input) => input.classList.remove("is-invalid"));

    // Validate First Name
    if (
        !fName.value ||
        fName.value.length < 3 ||
        !lettersOnly.test(fName.value)
    ) {
        fName.classList.add("is-invalid");
        error++;
    }

    // Validate Last Name
    if (
        !fLastN.value ||
        fLastN.value.length < 3 ||
        !lettersOnly.test(fLastN.value)
    ) {
        fLastN.classList.add("is-invalid");
        error++;
    }

    // Validate Email
    if (
        !fEmail.value ||
        fEmail.value.length < 3 ||
        !emailFormat.test(fEmail.value)
    ) {
        fEmail.classList.add("is-invalid");
        error++;
    }

    // Validate Address
    if (!fAddress.value || fAddress.value.length < 3) {
        fAddress.classList.add("is-invalid");
        error++;
    }

    // Validate Password (must have letters and numbers, 4-8 characters)
    if (!fPassword.value || !passwordFormat.test(fPassword.value)) {
        fPassword.classList.add("is-invalid");
        error++;
    }

    // Validate Phone (9 digits only)
    if (!fPhone.value || !numbersOnly.test(fPhone.value)) {
        fPhone.classList.add("is-invalid");
        error++;
    }

    // Prevent form submission if there are errors
    if (error > 0) {
        event.preventDefault();
        return false;
    }

    return true;
}