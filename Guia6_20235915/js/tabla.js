// Genera una fila
const generarFila = (tipo, fila, columnas) => {
    let tr = "<tr>";
    for (let c = 0; c < columnas; c++) {
        // Imprimiendo encabezados
        if (tipo === 1) {
            if (c === 0) {
                tr += '<th scope="col" class="text-center">#</th>';
            } else {
                tr += `<th scope="col" class="text-center">Titulo ${c}</th>`;
            }
        } else {
            if (c === 0) {
                tr += `<td scope="row" class="text-center fw-bold text-success">Fila ${fila}</td>`;
            } else {
                tr += `<td class="text-center">Celda ${fila},${c}</td>`;
            }
        }
    }
    return tr + "</tr>";
};

// Diseñando tabla
const generarTabla = (filas, columnas) => {
    let tabla = `
        <div class="table-responsive">
            <table class="table table-striped table-hover table-bordered">
    `;
    // Recorriendo el número de filas
    for (let i = 0; i < filas; i++) {
        // Para imprimir los títulos de la tabla
        if (i === 0) {
            tabla += generarFila(1, i, columnas);
        } else {
            // Generando encabezados y cuerpo de la tabla
            tabla += generarFila(2, i, columnas);
        }
    }
    tabla += '</table></div>';
    return tabla;
};

// Las funciones que se utilizarán serán llamadas desde HTML
// Por medio del evento onclick en el botón con ID "btnCrearTabla"
const crearTabla = function () {
    // Capturamos los valores de los campos
    let columnas = parseInt(document.getElementById("numColumnas").value); // Cambiar "idNumColumnas" a "numColumnas"
    let filas = parseInt(document.getElementById("numFilas").value); // Cambiar "idNumFila" a "numFilas"

    // Validamos que la información sea correcta
    if (!isNaN(columnas) && !isNaN(filas) && columnas > 0 && filas > 0) {
        const contenedor = document.getElementById("divResultado"); // Cambiar "idDivResultado" a "divResultado"
        contenedor.innerHTML = generarTabla(filas, columnas);
        console.log(generarTabla(filas, columnas));
    } else {
        alert("No se pudo crear la tabla, no se completaron los datos correctamente");
    }
};