// Otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM
const campo = document.getElementById("idTxtNumero");

// Definimos una función anónima que permita validar en tiempo real el ingreso de un número
const validarNumero = function (e) {
    let valida = /[0-9]/g;
    let tecla = e.key;
    if (!valida.test(tecla)) e.preventDefault();
};

// Definiendo el evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

// Trabajando con el botón calcular
const boton = document.getElementById("idBtnCalcular");

// Definiendo una función anónima para calcular el factorial de un número
const botonCalcular = (numero) => {
    return numero < 2 ? 1 : numero * botonCalcular(numero - 1);
};

// Definimos una función de tipo flecha para imprimir el resultado del factorial
const calcular = () => {
    const contenedor = document.getElementById("idDivResultado");
    let numero = parseInt(campo.value);

    // Definiendo una función tradicional
    function factorial(numero) {
        let resultado; // Declaramos la variable resultado localmente
        if (numero < 1) {
            contenedor.innerHTML = "El factorial de 0 es: 1";
        } else if (numero > 170) {
            contenedor.innerHTML = "Número fuera de rango";
        } else if (numero < 0) {
            contenedor.innerHTML = "Ingrese un número positivo";
        } else {
            resultado = botonCalcular(numero); // Asignamos el valor a la variable resultado
            contenedor.innerHTML = `El factorial de ${numero} es: ${resultado}`;
        }
    }

    // Evaluamos el valor ingresado para que calcule el factorial
    if (isNaN(numero)) {
        alert("Debe ingresar un número válido");
    } else {
        factorial(numero);
    }
};

// Añadir el evento click para el botón
boton.addEventListener("click", calcular);
