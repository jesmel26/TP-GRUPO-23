function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var excursion = document.getElementById("excursion").value;
    var fecha = document.getElementById("fecha").value;
    var personas = document.getElementById("personas").value;

    // Validación del nombre (no debe estar vacío)
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    // Validación del correo electrónico
    var emailExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailExpresion)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validación del teléfono (debe ser numérico)
    if (isNaN(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        return false;
    }

    // Validación de la selección de excursión (no debe estar vacía)
    if (excursion === "") {
        alert("Por favor, selecciona una excursión.");
        return false;
    }

    // Validación de la fecha (debe ser una fecha futura)
    var today = new Date();
    if (new Date(fecha) <= today) {
        alert("Por favor, selecciona una fecha futura.");
        return false;
    }

    // Validación del número de personas (debe ser mayor que cero)
    if (personas <= 0) {
        alert("Por favor, ingresa un número válido de personas.");
        return false;
    }

    // Si todas las validaciones pasan, el formulario se envía
    alert("¡Tu reserva ha sido exitosa! Gracias por elegirnos para tu próxima experiencia.")
    return true;
}

