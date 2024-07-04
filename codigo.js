document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const estadoCivil = document.querySelector('input[name="estadoCivil"]:checked').value;
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const ciudad = document.getElementById('ciudad').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;

    if (!validarCedula(cedula)) {
        alert('La cédula no es válida.');
        return;
    }

    if (!validarCorreo(correo)) {
        alert('El correo electrónico no es válido.');
        return;
    }

    const cliente = {
        cedula,
        apellidos,
        nombres,
        estadoCivil,
        sexo,
        ciudad,
        direccion,
        telefono,
        correo
    };

    localStorage.setItem('cliente', JSON.stringify(cliente));
    alert('Datos guardados exitosamente');
});

function validarCedula(cedula) {
    const regex = /^\d{10}$/;
    return regex.test(cedula);
}

function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
