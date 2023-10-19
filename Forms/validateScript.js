// JavaScript code for form validation
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the input field value
    var form = document.getElementById('myForm'); // Updated to use the actual form ID
    var inputField = document.getElementById('inputField'); // Updated to use the actual input field ID
    var errorElement = document.getElementById('error-message'); // Replace with the ID of the element where you want to display the error message
    // Add an event listener to the form submits an event
    form.addEventListener('submit', function (event) {
        // Prevent form from submitting
        event.preventDefault();

        // Retrieve the input field value
        var inputValue = inputField.value;

        // Regular expression pattern for alphanumeric input
        var alphanumericRegex = /^[a-zA-Z0-9]+$/;

        // Check if the input value matches the pattern
        if (alphanumericRegex.test(inputValue)) {
            // Valid input: display confirmation and submit the form
            alert('Form submitted!');
            form.submit(); 
        } else {
            // Invalid input: display error message
            console.log('Invalid input');
            errorElement.textContent = 'Input must be alphanumeric!';
        }
    });
});
