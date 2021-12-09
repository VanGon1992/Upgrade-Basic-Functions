const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(value) {

    let numerosTotal = 0
    let palabrasTotal = 0


    for (let i = 0; i < value.length; i++) {
        if (typeof value[i] === 'number') {
            numerosTotal += value[i]
        }
        if (typeof value[i] === 'string')
            palabrasTotal += value[i].length
    }

    console.log('La suma de todos los numeros es: ' + numerosTotal)
    console.log('La suma de todos los caracteres es: ' + palabrasTotal)

    let totalFinal = numerosTotal + palabrasTotal
    console.log('La suma total de numeros y caracteres es: ' + totalFinal)

}



averageWord(mixedElements)