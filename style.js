function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation for empty fields
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false; // Prevent form submission
    }

    // If both fields are filled, allow submission
    errorMessage.textContent = "";
    alert("Login successful!");
    return true;
}
