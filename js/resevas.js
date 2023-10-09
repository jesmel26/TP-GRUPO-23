function validarFormulario() {
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");
    var excursion = document.getElementById("excursion");
    var fecha = document.getElementById("fecha");
    var personas = document.getElementById("personas");

    // Validación del nombre (no debe estar vacío)
    if (nombre.value === "") {
        alert("Por favor, ingresa tu nombre.");
        document.nombre.focus()
        return false;
    }

    // Validación del correo electrónico
    var emailExpresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.value.match(emailExpresion)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        document.email.focus()
        return false;
    }

    // Validación del teléfono (debe ser numérico)
    if (telefono.value == "" || isNaN(telefono.value)) {
        alert("Por favor, ingresa un número de teléfono válido.");
        document.telefono.focus()
        return false;
    }

    // Validación de la selección de excursión (no debe estar vacía)
    if (excursion.value === "") {
        alert("Por favor, selecciona una excursión.");
        document.excursion.focus()
        return false;
    }

    // Validación de la fecha (debe ser una fecha futura)
    var today = new Date();
    if (new Date(fecha.value) <= today || fecha.value == "") {
        alert("Por favor, selecciona una fecha futura.");
        document.fecha.focus()        
        return false;
    }

    // Validación del número de personas (debe ser mayor que cero)
    if (personas.value <= 0) {
        alert("Por favor, ingresa un número válido de personas.");
        document.personas.focus() 
        return false;
    }

    // Si todas las validaciones pasan, el formulario se envía junto con un msj de confirmación
    alert("¡Tu reserva ha sido exitosa! Gracias por elegirnos para tu próxima experiencia.")
    return true;
}

