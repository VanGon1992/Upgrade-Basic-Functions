"use strict"

const numbers = [12, 21, 38, 5, 45, 37, 6];

// let sum = numbers.reduce((acc, item) => acc += item);
// let avg = sum / numbers.length;

// console.log(avg);

let suma = 0;
let avg;

function average(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
        avg = suma / numbers.length;
    }
    return avg;

    // insert code
}

console.log(average(numbers));