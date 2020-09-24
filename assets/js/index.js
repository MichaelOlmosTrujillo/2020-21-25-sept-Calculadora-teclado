// pantallas
const letrasPantalla = document.getElementById("letras");
const numerosPantalla = document.getElementById("numeros");
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
const reset = document.getElementById("reset");

// console.log(a1);
// console.log(numerosPantalla);

let arregloNumeros = [];
let arregloLetras = [];
let objetoNumLetras = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
};
// console.log(objetoNumLetras[1]);
let objetoLetrasNum = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
};
// console.log(objetoLetrasNum["b"]);
//Contador de clicks
let contador = 0;

//Números anteriores que faltan en el arreglo: "arregloNumeros"
let letAnteriores = [];
let numAnteriores = [];
function verificarNumAnteriores(numero) {
  numAnteriores = [];
  let faltanAnteriores = false;
  if (numero == 1 && arregloNumeros.length != 0) {
    console.log("No faltan anteriores");
  } else if (numero != 1 && numero != 0) {
    if (arregloNumeros.length != 0) {
      const anterioresOrd = arregloNumeros.sort();
      const tamano = anterioresOrd.length;
      const maxValue = anterioresOrd[tamano - 1];
      for (let i = 1; i < numero - maxValue; i++) {
        numAnteriores.push(maxValue + i);
      }
      if (numAnteriores.length != 0) {
        faltanAnteriores = true;
      }
    } else {
      for (let i = 1; i < numero; i++) {
        numAnteriores.push(i);
      }
    }
  } else if (numero == 0) {
    if (arregloNumeros.length != 0) {
      const anterioresOrd = arregloNumeros.sort();
      const tamano = anterioresOrd.length;
      const maxValue = anterioresOrd[tamano - 1];
      for (let i = 1; i < 10 - maxValue; i++) {
        numAnteriores.push(maxValue + i);
      }
      if (numAnteriores.length != 0) {
        faltanAnteriores = true;
      }
    } else {
      for (let i = 1; i < 10; i++) {
        numAnteriores.push(i);
      }
      faltanAnteriores = true;
    }
  }
  return faltanAnteriores;
}

// arregloNumeros = [1, 2, 3];
// verificarNumAnteriores(6);
// console.log(numAnteriores + " " + verificarNumAnteriores(5));

function verificarletrasAnteriores(letra) {
  let faltanAnteriores = false;
  if (arregloLetras.length == 0 && letra == "a") {
  } else if (arregloLetras.length != 0) {
    const anterioresOrd = arregloLetras.sort();
    const tamano = anterioresOrd.length;
    const maxValue = anterioresOrd[tamano - 1];
    for (
      let i = 0;
      i < objetoLetrasNum[letra] - objetoLetrasNum[maxValue];
      i++
    ) {
      letAnteriores.push(objetoNumLetras[objetoLetrasNum[maxValue] + i + 1]);
    }
    if (letAnteriores.length != 0) {
      faltanAnteriores = true;
    }
  } else {
    for (let i = 1; i < objetoLetrasNum[letra]; i++) {
      letAnteriores.push(objetoNumLetras[i]);
    }
    faltanAnteriores = true;
  }

  return faltanAnteriores;
}
// arregloLetras = [];
// console.log(verificarletrasAnteriores("a"));
// arregloLetras = ["a", "b", "c"];
// console.log(letAnteriores, verificarletrasAnteriores("e"));

function agregarNumero(numero) {
  let yaExiste = false;
  //verificar anteriores
  let anteriores = verificarNumAnteriores(numero);
  // console.log(numAnteriores);
  // console.log(numAnteriores);
  // console.log(numAnteriores.length);
  if (!anteriores) {
    if (arregloNumeros.length == 0 && numero == 1) {
      arregloNumeros.push(numero);
    } else if (arregloNumeros.length != 0 && numero == 1) {
      yaExiste = true;
    } else if (arregloNumeros.length != 0 && numero != 1) {
      for (let i = 0; i < arregloNumeros.length; i++) {
        if (arregloNumeros[i] == numero) {
          yaExiste = true;
          // swal(arregloNumeros[i] + " Ya está registrado escribe otro");
        }
      }
      // console.log(!yaExiste);

      if (!yaExiste && numAnteriores.length == 0) {
        arregloNumeros.push(numero);
      }

      /* En el listener se considera el caso  en que el número no exista y la diferencia "numero - numAnteriores.length != 1". Como es diferente de 1 indica que hay número anteriores a él que no se han registrado, entonces toca lanzar un sweet alert
       */
    } else if (arregloNumeros.length == 10) {
      // swal('Todos los números están registrados');
      yaExiste = true;
    }
  } else {
    console.log("Falta agregar los números " + numAnteriores);
  }

  return yaExiste;
}

// arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8];
// // console.log(verificarNumAnteriores(5));
// // console.log(numAnteriores);
// // console.log(agregarNumero(1));
// // console.log(agregarNumero(1));
// // console.log(agregarNumero(2));
// // console.log(agregarNumero(4));
// // console.log(agregarNumero(9));
// console.log(agregarNumero(0));

// console.log(arregloNumeros);

function agregarLetra(letra) {
  let yaExiste = false;
  //verificar anteriores
  let faltanAnteriores = verificarletrasAnteriores(letra);
  // console.log(numAnteriores);
  // console.log(numAnteriores);
  // console.log(numAnteriores.length);
  if (!faltanAnteriores) {
    if (arregloLetras.length == 0 && letra == "a") {
      arregloLetras.push(letra);
    } else if (arregloLetras.length != 0 && letra == "a") {
      yaExiste = true;
    } else if (arregloLetras.length != 0 && letra != "a") {
      for (let i = 0; i < arregloLetras.length; i++) {
        if (arregloLetras[i] == letra) {
          yaExiste = true;
          // swal(arregloLetras[i] + " Ya está registrado escribe otro");
        }
      }
      // console.log(!yaExiste);

      if (!yaExiste && letAnteriores.length == 0) {
        arregloLetras.push(letra);
      }

      /* En el listener se considera el caso  en que el número no exista y la diferencia "numero - numAnteriores.length != 1". Como es diferente de 1 indica que hay número anteriores a él que no se han registrado, entonces toca lanzar un sweet alert
       */
    } else if (arregloLetras.length == 10) {
      // swal('Todos los números están registrados');
      yaExiste = true;
    }
  } else {
    console.log("Falta agregar las letras " + letAnteriores);
  }

  return yaExiste;
}
// arregloLetras = [];
// // agregarLetra("a");
// // console.log(arregloLetras);
// console.log(verificarletrasAnteriores("a"));
// console.log(agregarLetra("a"));
// console.log(arregloLetras);
// arregloLetras = ["a", "b", "c"];
// verificarletrasAnteriores("d");
// console.log(letAnteriores);
// console.log(arregloLetras);
// console.log(agregarLetra("f"));
// console.log(letAnteriores);
// console.log(arregloLetras);

// console.log(letAnteriores, verificarletrasAnteriores("e"));

function llenarEspacio(numero, letra) {
  const existeNumero = agregarNumero(numero);
  const esLetra = "letra";
  const esNumero = "numero";
  if (!existeNumero) {
    return esNumero;
  } else if (existeNumero) {
    agregarLetra(letra);
    console.log(agregarLetra(letra));
    console.log(arregloLetras);
    return esLetra;
  } else if (agregarLetra(letra)) {
    swal("Ya está registrada la letra " + letra);
    return esLetra;
  }
}

a1.addEventListener("click", () => {
  contador += 1;
  if (arregloNumeros.length < 10) {
    if (numAnteriores.length == 0) {
      agregarNumero(1);
    } else {
      swal('Ya está registrado el "1!');
    }
  } else if (arregloNumeros.length == 10) {
    swal("Ya están registrados todos los números");
  }
  // const espacio = llenarEspacio(1, "a");
  // if (espacio == "numero") {
  //   numerosPantalla.innerHTML += 1 + ", ";
  //   //Falta poner que hace falta los números anteriores
  // } else if (espacio == "letra" && contador == 2) {
  //   letrasPantalla.innerHTML += "a" + ", ";
  //   // contador = 0;
  //   //Falta poner que hace falta las letras anteriores
  // } else if (espacio == "letra" && contador >= 3) {
  //   swal('Ya está registrada la letra "a"');
  // } else if (arregloLetras.length == 10) {
  //   swal("Todos los números y letras ya están registrados");
  // }
});

b2.addEventListener("click", () => {
  contador += 1;
  const espacio = llenarEspacio(2, "b");
  if (espacio == "numero") {
    numerosPantalla.innerHTML += 2 + ", ";
    //Falta poner que hace falta los números anteriores
  } else if (espacio == "letra" && contador == 2) {
    letrasPantalla.innerHTML += "b" + ", ";
    // contador = 0;
    //Falta poner que hace falta las letras anteriores
  } else if (espacio == "letra" && contador >= 3) {
    swal('Ya está registrada la letra "b"');
  } else if (arregloLetras.length == 10) {
    swal("Todos los números y letras ya están registrados");
  }
});
// letrasPantalla.innerHTML += 'a' + ', ';

// const letras = ["b", "a", "c", "f", "d"];
// console.log(letras.sort());
