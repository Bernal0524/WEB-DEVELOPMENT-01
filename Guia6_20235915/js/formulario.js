// Accediendo a los elementos HTML
const inputNombre = document.getElementById("idTxtNombre");
const inputApellido = document.getElementById("idTxtApellido");
const inputFechaNacimiento = document.getElementById("idTxtFechaNacimiento");
const inputRdMasculino = document.getElementById("idRdMasculino");
const inputRdFemenino = document.getElementById("idRdFemenino");
const cmbPais = document.getElementById("idCmbPaís");
const inputDireccion = document.getElementById("idTxtDireccion");
const inputNombrePais = document.getElementById("idNombrePais");

const buttonAgregarPaciente = document.getElementById("idBtnAgregar");
const buttonLimpiarPaciente = document.getElementById("idBtnLimpiar");
const buttonMostrarPaciente = document.getElementById("idBtnMostrar");
const buttonAgregarPais = document.getElementById("idBtnAgregarPais");

const notificacion = document.getElementById("idNotificacion");
const toast = new bootstrap.Toast(notificacion);
const mensaje = document.getElementById("idMensaje");

let arrayPaciente = [];
let editingIndex = null; // Variable para saber si estamos editando

const limpiarFormulario = () => {
    inputNombre.value = "";
    inputApellido.value = "";
    inputFechaNacimiento.value = "";
    inputRdMasculino.checked = false;
    inputRdFemenino.checked = false;
    cmbPais.value = 0;
    inputDireccion.value = "";
    inputNombrePais.value = "";

    inputNombre.focus();
    editingIndex = null; // Reiniciar índice al limpiar
};

const addPaciente = function () {
    let nombre = inputNombre.value;
    let apellido = inputApellido.value;
    let fechaNacimiento = inputFechaNacimiento.value;
    let sexo = inputRdMasculino.checked ? "Hombre" : inputRdFemenino.checked ? "Mujer" : "";
    let pais = cmbPais.value;
    let labelPais = cmbPais.options[cmbPais.selectedIndex].text;
    let direccion = inputDireccion.value;

    if (nombre && apellido && fechaNacimiento && sexo && pais && direccion) {
        const pacienteData = [nombre, apellido, fechaNacimiento, sexo, labelPais, direccion];
        
        if (editingIndex !== null) {
            // Si estamos editando, actualizamos el paciente
            arrayPaciente[editingIndex] = pacienteData;
            mensaje.innerHTML = "Paciente editado correctamente";
        } else {
            // Si no, agregamos un nuevo paciente
            arrayPaciente.push(pacienteData);
            mensaje.innerHTML = "Se ha registrado un nuevo paciente";
        }

        toast.show();
        limpiarFormulario();
        imprimirPacientes(); // Actualizar tabla
    } else {
        mensaje.innerHTML = "Faltan campos por completar";
        toast.show();
    }
};

function imprimirFilas() {
    let $fila = "";
    arrayPaciente.forEach((element, index) => {
        $fila += `<tr>
                    <td scope="row" class="text-center fw-bold">${index + 1}</td>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td>${element[2]}</td>
                    <td>${element[3]}</td>
                    <td>${element[4]}</td>
                    <td>${element[5]}</td>
                    <td>
                        <button type="button" class="btn btn-primary" onclick="editarPaciente(${index})">
                            <i class="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" class="btn btn-danger" onclick="eliminarPaciente(${index})">
                            <i class="bi bi-trash3-fill"></i>
                        </button>
                    </td>
                </tr>`;
    });
    return $fila;
}

const imprimirPacientes = () => {
    let $table = `<div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
                <tr>
                    <th scope="col" class="text-center" style="width:5%">#</th>
                    <th scope="col" class="text-center" style="width:15%">Nombre</th>
                    <th scope="col" class="text-center" style="width:15%">Apellido</th>
                    <th scope="col" class="text-center" style="width:10%">Fecha nacimiento</th>
                    <th scope="col" class="text-center" style="width:10%">Sexo</th>
                    <th scope="col" class="text-center" style="width:10%">País</th>
                    <th scope="col" class="text-center" style="width:25%">Dirección</th>
                    <th scope="col" class="text-center" style="width:10%">Opciones</th>
                </tr>
                ${imprimirFilas()}
            </table>
        </div>`;
    document.getElementById("idTablaPacientes").innerHTML = $table;
};

// Función para editar paciente
const editarPaciente = (index) => {
    // Cargar datos del paciente seleccionado en el formulario
    const [nombre, apellido, fechaNacimiento, sexo, , direccion] = arrayPaciente[index];
    inputNombre.value = nombre;
    inputApellido.value = apellido;
    inputFechaNacimiento.value = fechaNacimiento;
    inputRdMasculino.checked = sexo === "Hombre";
    inputRdFemenino.checked = sexo === "Mujer";
    inputDireccion.value = direccion;

    editingIndex = index; // Guardar el índice del paciente en edición
    mensaje.innerHTML = "Editando paciente seleccionado";
    toast.show();
};

// Función para eliminar paciente
const eliminarPaciente = (index) => {
    arrayPaciente.splice(index, 1); // Eliminar paciente
    imprimirPacientes(); // Actualizar tabla
    mensaje.innerHTML = "Paciente eliminado correctamente";
    toast.show();
};

// Función para agregar un país a la lista desplegable
const addPais = () => {
    const nuevoPais = inputNombrePais.value.trim(); // Obtener el valor ingresado y eliminar espacios
    if (nuevoPais) {
        const option = document.createElement("option"); // Crear un nuevo elemento option
        option.text = nuevoPais; // Establecer el texto visible del país
        option.value = nuevoPais; // Establecer el valor del país
        cmbPais.add(option); // Agregar el nuevo país al combo
        cmbPais.value = nuevoPais; // Seleccionar el país recién agregado
        mensaje.innerHTML = "País agregado correctamente"; // Mensaje de éxito
        toast.show(); // Mostrar notificación
        inputNombrePais.value = ""; // Limpiar el campo de entrada
    } else {
        mensaje.innerHTML = "Por favor, ingrese un nombre de país válido"; // Mensaje de error
        toast.show(); // Mostrar notificación de error
    }
};

// Asignar eventos a los botones
buttonLimpiarPaciente.onclick = () => limpiarFormulario();
buttonAgregarPaciente.onclick = () => addPaciente();
buttonMostrarPaciente.onclick = () => imprimirPacientes();
buttonAgregarPais.onclick = () => addPais();

idModal.addEventListener("shown.bs.modal", () => {
    inputNombrePais.value = ""; // Limpiar el campo de entrada del modal
    inputNombrePais.focus(); // Enfocar el campo de entrada
});

limpiarFormulario(); // Limpiar el formulario al inicio
