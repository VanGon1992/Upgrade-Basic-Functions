"use strict"

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// let avenger = avengers.reduce((a, b) => a.length > b.length ? a : b, '');
// console.log(avenger);


let longitud = 0;
let superheroe;

function findLongestWord(param) {
    for (let i = 0; i < avengers.length; i++) {
        if (param[i].length > longitud) {
            longitud = param[i].length;
            superheroe = param[i];
        }
    }
    return superheroe;
}

console.log(findLongestWord(avengers));