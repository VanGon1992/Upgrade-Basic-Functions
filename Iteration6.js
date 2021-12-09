"use strict"

const comidas = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'sushi',
    'onion rings',
    'pasta',
    'soda'
];


let existe = true;

function removeDuplicates(comidas) {
    for (let i = 0; i < comidas.length; i++) {
        existe = false;
        for (let j = i + 1; j < comidas.length; j++) {
            if (comidas[i] == comidas[j]) {
                existe = true;
            }
        }
        if (!existe) {
            console.log(comidas[i])
        }
    }
}
removeDuplicates(comidas);


// let existe = true;

// function removeDuplicates(comidas) {
//     for (let i = 0; i < comidas.length; i++) {
//         existe = false;
//         console.log(i);
//         for (let j = i + 1; j < comidas.length; j++) {
//             console.log(j);
//         }
//         console.log('--------');
//     }
// }
// removeDuplicates(comidas);