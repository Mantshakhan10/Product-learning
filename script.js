console.log("JavaScript Loaded Successfully");

// Change Heading
const heading = document.querySelector("h1");
heading.textContent = "Mantsha Khan - JavaScript Profile";

// Show / Hide About Section
const toggleBtn = document.getElementById("toggleBtn");
const about = document.getElementById("about");

toggleBtn.addEventListener("click", function () {

    if (about.style.display === "none")
         {
        about.style.display = "block";
    } 
    else {
        about.style.display = "none";
    }

});

// Form Validation
const form = document.getElementById("contactForm");
const error = document.getElementById("error");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    error.textContent = "";

    if (name === "") {
        error.textContent = "Name is required.";
        error.style.color = "red";
        return;
    }

    if (email === "") {
        error.textContent = "Email is required.";
        error.style.color = "red";
        return;
    }

    if (message === "") {
        error.textContent = "Message is required.";
        error.style.color = "red";
        return;
    }

    error.style.color = "green";
    error.textContent = "Form submitted successfully!";

});