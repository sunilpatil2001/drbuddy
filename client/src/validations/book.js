function bookValidations(inputValues) {
    let errors = {};
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(inputValues.name === ""){
        errors.name = "Please enter full name"
    }
    if (inputValues.email) {
        if (!emailRegex.test(inputValues.email)) {
            errors.email = "Please enter a valid email";
        }
    }
    if (inputValues.contact.length > 10 || inputValues.contact.length < 10) {
        errors.contact = "Contact number must be of 10 digits";
    }
    return errors;
};

export default bookValidations