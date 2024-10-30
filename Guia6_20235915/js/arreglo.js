// Accedemos a los contenedores donde se mostrarán los números
const containerArreglo = document.querySelector("#idContainerArreglo");
const containerArregloOrdenado = document.querySelector("#idContainerArregloOrdenado");

// Accedemos a cada botón mediante la API DOM
const btnAgregar = document.querySelector("#idBtnAgregar");
const btnOrdenar = document.querySelector("#idBtnOrdenar");

// Agregamos el evento click a los botones y les asignamos las funciones correspondientes
btnAgregar.addEventListener("click", agregarElemento);
btnOrdenar.addEventListener("click", ordenarElementos);

let arreglo = []; // Inicializamos un arreglo vacío

// Función para agregar elementos al arreglo
function agregarElemento() {
    const numero = parseInt(document.querySelector("#inputNumero").value); // Convertimos el valor ingresado a un número
    if (isNaN(numero)) {
        alert("Debe ingresar un número válido"); // Validación en caso de que el valor no sea un número
    } else {
        arreglo.push(numero); // Agregamos el número al arreglo
        
        // Creamos un nuevo div para mostrar el número agregado en el contenedor de valores ingresados
        let caja = document.createElement("div");
        caja.className = "col-md-1 column"; // Clase para el estilo
        let valor = document.createElement("h3");
        valor.textContent = numero; // Asignamos el número al contenido del div
        caja.appendChild(valor);
        containerArreglo.appendChild(caja); // Agregamos el div al contenedor de valores ingresados
    }
}

// Función para ordenar y mostrar los elementos del arreglo sin modificar el original
function ordenarElementos() {
    // Limpiamos solo los elementos numéricos, manteniendo el título en el contenedor de ordenados
    const elementosOrdenados = containerArregloOrdenado.querySelectorAll("div.col-md-1.column-green");
    elementosOrdenados.forEach(element => element.remove());

    // Creamos una copia del arreglo original y la ordenamos
    let arregloOrdenado = [...arreglo].sort((a, b) => a - b);
    
    // Creamos y mostramos cada elemento ordenado en el contenedor de valores ordenados
    for (let i of arregloOrdenado) {
        let caja = document.createElement("div");
        caja.className = "col-md-1 column-green"; // Clase para el estilo del contenedor ordenado
        let valor = document.createElement("h3");
        valor.textContent = i; // Asignamos el valor del número ordenado
        caja.appendChild(valor);
        containerArregloOrdenado.appendChild(caja); // Agregamos el div al contenedor de ordenados
    }
}
