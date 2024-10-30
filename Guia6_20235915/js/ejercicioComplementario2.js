document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const carnet = document.getElementById("carnet").value;
    const nombre = document.getElementById("nombre").value;
    const dui = document.getElementById("dui").value;
    const nit = document.getElementById("nit").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;

    // Expresiones regulares
    const regexCarnet = /^[A-Z]{2}\d{3}$/;
    const regexNombre = /^[a-zA-Z\s]+$/;
    const regexDUI = /^\d{8}-\d$/;
    const regexNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
    const regexFechaNacimiento = /^\d{2}\/\d{2}\/\d{4}$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexEdad = /^\d+$/;

    // Validaciones
    if (!regexCarnet.test(carnet)) {
        alert("Carnet no válido. Debe tener el formato AB001 (dos letras seguidas de tres números).");
        return;
    }
    if (!regexNombre.test(nombre)) {
        alert("Nombre no válido. No debe contener números ni caracteres especiales.");
        return;
    }
    if (!regexDUI.test(dui)) {
        alert("DUI no válido. Debe tener el formato ########-# (ocho números seguidos de un guion y un número).");
        return;
    }
    if (!regexNIT.test(nit)) {
        alert("NIT no válido. Debe tener el formato ####-######-###-# (cuatro números, un guion, seis números, un guion, tres números y un guion y un número).");
        return;
    }
    if (!regexFechaNacimiento.test(fechaNacimiento)) {
        alert("Fecha de nacimiento no válida. Debe estar en el formato DD/MM/YYYY.");
        return;
    }
    if (!regexCorreo.test(correo)) {
        alert("Correo electrónico no válido.");
        return;
    }
    if (!regexEdad.test(edad)) {
        alert("Edad no válida. Debe ser un número.");
        return;
    }

    // Si todas las validaciones pasan
    alert("Formulario enviado correctamente.");
});
