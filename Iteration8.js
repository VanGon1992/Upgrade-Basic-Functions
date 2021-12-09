"use strict"

const palabras = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


// --------------  1ª Solucion -----------------------

// function repeatCounter(palabra) {
//     let contador = 0;
//     for (let i = 0; i < palabras.length; i++) {
//         if (palabra == palabras[i]) {
//             contador += 1;
//         }
//     }
//     console.log('La palabra ' + palabra + ' se repite ' + contador)
// }
// repeatCounter('sleep');


// --------------  2ª Solucion -----------------------


function repeatCounter(param) {

    let repetidos = []
    let palabraRepe
    let contador = 0
    let existe = 0


    for (let i = 0; i < param.length; i++) {
        for (let j = i + 1; j < param.length; j++) {
            if (param[j] == param[i]) {
                contador += 1;
                palabraRepe = param[i]
            }
        }
        if (contador > 0) {
            contador += 1
            for (let x = 0; x < repetidos.length; x++) {
                if (param[i] == repetidos[x]) {
                    existe = 1
                }
            }
            if (existe == 0) {
                console.log('La palabra: ' + palabraRepe + ' se repite: ' + contador + ' veces')
            }
            repetidos.push(param[i])
        }
        contador = 0
        existe = 0
    }
}
repeatCounter(palabras);

// --------------  3ª Solucion -----------------------

// function repeatCounter(param) {
//     let contador = 0

//     for (let i = 0; i < param.length; i++) {
//         for (let j = i + 1; j < param.length; j++) {
//             if (param[i] === param[j]) {
//                 contador += 1
//             }
//         }
//     }
//     return contador
// }

// console.log(repeatCounter(palabras))