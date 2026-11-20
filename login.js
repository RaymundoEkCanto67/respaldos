const formularioLogin = document.getElementById("loginForm");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const control = document.getElementById("control").value.trim();
    const password = document.getElementById("password").value;

    // Obtener usuarios registrados
    const usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]"
    );

    // Buscar usuario
    const usuarioEncontrado = usuarios.find(usuario =>
        usuario.control === control &&
        usuario.password === password
    );

    if (usuarioEncontrado) {
        alert("¡Inicio de sesión exitoso!");

        window.location.href = "inicio.html";
    } else {
        alert("Número de control o contraseña incorrectos.");
    }
});