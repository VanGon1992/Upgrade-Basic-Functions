"use strict"

const nombres = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];



// function finderName(name) {

//     for (let i = 0; i < nombres.length; i++) {
//         if (name === nombres[i]) {
//             console.log('Este nombre existe = ' + true)
//             console.log(nombres.indexOf('Peggy'))

//         } else {
//             console.log('Este nombre no existe = ' + false)
//         }

//     }
// }

// finderName('Peggy')

function finderName(name) {

    for (let i = 0; i < nombres.length; i++) {
        name === nombres[i] ? true : false
    }
    console.log(name + ' ' + true + ' ' + nombres.indexOf(name))

}

finderName('Peggy')