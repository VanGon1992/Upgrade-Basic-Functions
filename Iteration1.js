"use strict"

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberOne < numberTwo) {
        console.log(numberTwo);
    } else {
        console.log('Son iguales');
    }
}

console.log(sum(10, 30));