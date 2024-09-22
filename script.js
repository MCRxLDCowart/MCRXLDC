document.getElementById("loginBtn").onclick = function() {
    document.getElementById("adminModal").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("adminModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("adminModal")) {
        document.getElementById("adminModal").style.display = "none";
    }
}

document.getElementById("adminLoginForm").onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy check for username and password
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        document.getElementById("adminModal").style.display = "none";
        // Here you can add functionality to allow admin to edit the content
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Message sent! We will contact you at ${email}.`);
    document.getElementById("contactForm").reset();
}
