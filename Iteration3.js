"use strict"

const numbers = [1, 2, 3, 5, 45, 37, 58];

// let total = 0;
// for (var i = 0; i < numbers.length; i++) total += numbers[i];
// console.log(total);

let suma = 0;

function sumAll(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    return suma;
}

console.log(sumAll(numbers));