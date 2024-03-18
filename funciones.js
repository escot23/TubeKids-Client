function InicioSesion() {
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.addEventListener("load", function () {
        if (ajaxRequest.status === 200) {
            const response = JSON.parse(ajaxRequest.responseText);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            alert('Has iniciado sesión correctamente');
            window.location.href = "pantallaPrincipal.html";
        } else {
            console.error('Error en la solicitud:', ajaxRequest.responseText);
            alert("Credenciales incorrectas");
        }
    });
    ajaxRequest.addEventListener("error", function () {
        console.error('Error en la solicitud:', ajaxRequest.responseText);
        alert("Hubo un error al intentar iniciar sesión del usuario");
    });
    ajaxRequest.open("POST", "http://localhost:3000/login");
    ajaxRequest.setRequestHeader("Content-Type", "application/json");

    const data = {
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value
    };

    ajaxRequest.send(JSON.stringify(data));
}