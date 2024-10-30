// Accedemos al contenedor donde se mostrarán los estudiantes
const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

// Accedemos a cada botón por medio de la API DOM
const btnPromedio = document.querySelector("#idBtnPromedio");

// Agregamos el evento click al botón generar, adicionalmente se le asigna la función que realizará la operación
btnPromedio.addEventListener("click", generarEstudiantes);

function generarEstudiantes() {
    // Utilizaremos un arreglo para guardar la información del estudiante
    let arrayEstudiantes = new Array();

    let totalEstudiantes = document.querySelector(
        "#inputNumeroEstudiantes"
    ).value;
    let contador = 1;

    // Utilizaremos un while para recorrer el total de estudiantes
    let estudiante, 
      calificacion,
      convertir = 0;
      
    while (contador <= totalEstudiantes) {
        estudiante = prompt(`Ingrese el nombre del estudiante ${contador}`);

        // Verificando que sea un valor entero positivo y que se encuentre en el rango de 0-10
        do {
            calificacion = prompt(
                `Ingrese la calificación del estudiante ${contador}`
            );

            convertir = parseFloat(calificacion);
        } while (isNaN(convertir) || convertir < 0 || convertir > 10);

        // Asignando los valores al arreglo
        arrayEstudiantes[contador - 1] = new Array(
            estudiante,
            parseFloat(calificacion).toFixed(2)
        );
        contador++;
    }

    // Recorriendo el arreglo con for..of
    // Verificaremos cual es el promedio de las calificaciones
    // y cual de los estudiantes posee la calificación más alta
    let calificacionAlta = 0,
      promedio = 0;
    let nombreConCalificacionAlta = ''; // Para guardar el nombre del estudiante con la calificación más alta
    
    let listado = "<h3>Listado de estudiantes registrados</h3>";
    listado += "<ol>";
    for (let indice of arrayEstudiantes) {
        let nombre = indice[0];
        let nota = indice[1];
        
        // imprimiendo lista de estudiantes
        listado += `<li><b>Nombre:</b> ${nombre} - <b>Calificación:</b> ${nota}</li>`;
          
        // Verificación de calificación más alta
        if (parseFloat(nota) > calificacionAlta) {
            calificacionAlta = parseFloat(nota);
            nombreConCalificacionAlta = nombre; // Guardar el nombre
        }

        // Calculando el promedio
        promedio += parseFloat(nota);
    }
    listado += "</ol>"; // Cerrar la lista
    promedio = parseFloat(promedio / arrayEstudiantes.length).toFixed(2);
    
    // Cambiamos <p> por <span> para evitar márgenes
    listado += `<span><b>Promedio de calificaciones:</b> ${promedio}</span><br>`;
    listado += `<span><b>Estudiante con mejor calificación:</b> ${nombreConCalificacionAlta}</span>`; // Mostrar solo el nombre

    // Imprimiendo resultado
    containerEstudiantes.innerHTML = listado;
}
