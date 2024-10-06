// script.js

// Handle Login Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (for demonstration purposes)
            if(username === "admin" && password === "password") {
                // Redirect to Home Page
                window.location.href = "index.html";
            } else {
                // Show error message
                const loginError = document.getElementById('loginError');
                loginError.textContent = "Invalid username or password.";
            }
        });
    }

    // Handle Logout
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Login Page
            window.location.href = "login.html";
        });
    }
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components if needed
    // Example: Initialize tooltips
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (for demonstration purposes)
            if(username === "admin" && password === "password") {
                // Redirect to Home Page
                window.location.href = "index.html";
            } else {
                // Show error message using Materialize toast
                M.toast({html: 'Invalid username or password.', classes: 'red'});
            }
        });
    }

    // Handle Logout
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Login Page
            window.location.href = "login.html";
        });
    }
});

// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize components if needed
    // Example: Initialize tooltips
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple validation (for demonstration purposes)
            if(username === "admin" && password === "password") {
                // Redirect to Home Page
                window.location.href = "index.html";
            } else {
                // Show error message using Materialize toast
                M.toast({html: 'Invalid username or password.', classes: 'red'});
            }
        });
    }

    // Handle Logout
    const logoutLink = document.getElementById('logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Redirect to Login Page
            window.location.href = "login.html";
        });
    }
});
