document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;

    if (fullName && email && phone && password) {
        document.getElementById("successMessage").textContent = "Registration successful!";
        this.reset();
    } else {
        document.getElementById("successMessage").textContent = "Please fill out all fields.";
    }
});
