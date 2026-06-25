const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let role = document.getElementById("role").value;

    const message = document.getElementById("message");

    if (
        role === "admin" &&
        username === "admin" &&
        password === "Admin@2026"
    ) {
        message.innerHTML = "Admin Login Successful";

        setTimeout(() => {
            window.location.href = "admin.html";
        }, 1000);

    } else if (
        role === "teacher" &&
        username === "teacher" &&
        password === "Teacher@2026"
    ) {
        message.innerHTML = "Teacher Login Successful";

        setTimeout(() => {
            window.location.href = "teacher.html";
        }, 1000);

    } else {
        message.innerHTML = "Wrong username, password, or role";
    }
});