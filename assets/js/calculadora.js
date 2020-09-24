//Botones
const a1 = document.getElementById("a1");
const b2 = document.getElementById("b2");
const c3 = document.getElementById("c3");
const d4 = document.getElementById("d4");
const e5 = document.getElementById("e5");
const c6 = document.getElementById("c6");
const g7 = document.getElementById("g7");
const h8 = document.getElementById("h8");
const i9 = document.getElementById("i9");
const cal = document.getElementById("cal");
const j0 = document.getElementById("j0");
//Pantalla donde se registran los números y el resultado de las operaciones
const pantalla = document.getElementById('numeros');

// Operaciones
const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const division = document.getElementById('division');
const igual = document.getElementById('igual');


/* 
Arreglo que guarda los dos números separados por un punto '.'
*/
let arreglo = [];
/* Un string que representa la operación a realizar*/
let operacion = "";
/*Un contador de las veces que se presiona el botón de una operación. Esto se hace con el fin de que solo se registre un punto en el vector "arreglo" para separar los puntos.*/
let contador = 0;
/*Arreglo que guarda el número antes que se da click en el signo de la operación*/
let arregloNum1 = [];
/*Arreglo que guarda el número que va despues de dar click en la operación*/
let arregloNum2 = [];
/*Función que guarda cada número presionado en el vector "arreglo" y además guarda los números separados por la operación en dos vectors que son mostrados en la pantalla*/
function numero(numero) {
    if (operacion == '') {
        arreglo.push(numero);
        arregloNum1.push(numero);
        pantalla.innerHTML = arregloNum1.join('');
    } else {
        arreglo.push(numero);
        arregloNum2.push(numero);
        pantalla.innerHTML = arregloNum2.join('');
    }

    // console.log(arreglo);
}
//Esta operación me permite separar los números por un "." en el vector "arreglo"
// Así cuando el usuario da click en el botón "igual" se transforma el vector
// "arreglo" a string y luego se separa con la función split
function operacionPrevia(op) {
    if (arreglo[0] != '.' && arreglo != []) {
        operacion = op;
        contador += 1;
        if (contador == 1) {
            arreglo.push('.');
        }
    }
}
/*Esta función realiza todas las operaciones de la calculadora. Recibe como 
parametros la operacion "operacion", el número (num1) que va antes del signo de la operación "operacion", luego va el siguiente número que va después del signo 
de la operación (num2)
*/
function operacionRealizar(operacion, num1, num2) {
    if (operacion == 'suma') {
        pantalla.innerHTML = num1 + num2
    } else if (operacion == 'resta') {
        pantalla.innerHTML = num1 - num2;
    } else if (operacion == 'producto') {
        pantalla.innerHTML = num1 * num2;
    } else if (operacion == 'division') {
        if (num2 != 0) {
            pantalla.innerHTML = num1 / num2;

        } else {
            swal('No puedes dividir por cero');
        }
    }
}

/*
Botones que son mostradoes en la pantalla y guardados en los respectivos vectores
*/
a1.addEventListener('click', () => {
    numero(1);
})

b2.addEventListener('click', () => {
    numero(2);
})
c3.addEventListener('click', () => {
    numero(3);
})
d4.addEventListener('click', () => {
    numero(4);
})
e5.addEventListener('click', () => {
    numero(5);
})
c6.addEventListener('click', () => {
    numero(6);
})
g7.addEventListener('click', () => {
    numero(7);
})
h8.addEventListener('click', () => {
    numero(8);
})
i9.addEventListener('click', () => {
    numero(9);
})
j0.addEventListener('click', () => {
    numero(0);
})

/*Operaciones que permiten separar los números en el vector "arreglo" por un punto ('.')*/
suma.addEventListener('click', () => {
    operacionPrevia('suma')
})
resta.addEventListener('click', () => {
    operacionPrevia('resta')
})
multiplicacion.addEventListener('click', () => {
    operacionPrevia('producto')
})
division.addEventListener('click', () => {
    operacionPrevia('division')
})

/*Boton que ejecuta las operaciones entre los números e reinicia las variables para una nueva operación*/
igual.addEventListener('click', () => {
    arreglo = arreglo.join('');
    arreglo = arreglo.split('.');
    let num1 = arreglo[0];
    let num2 = arreglo[1];
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    operacionRealizar(operacion, num1, num2);
    contador = 0;
    arreglo = [];
    arregloNum1 = [];
    arregloNum2 = [];
    operacion = '';
})