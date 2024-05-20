let cantidadNumeros = parseInt(prompt("Cuántos números desea ingresar?"));

let numeros = [];
let minNum = '';
let maxNum = '';

for (let i = 0; i < cantidadNumeros; i++) {
    let numero = parseInt(prompt("Ingrese número: " + (i + 1)));
    numeros.push(numero);
}

for (let j = 0; j < cantidadNumeros; j++) {
    if (j === 0) {
        minNum = numeros[j];
        maxNum = numeros[j];        

    } else {
         if (numeros[j] < minNum) {
             minNum = numeros[j];
         } else if (numeros[j] > maxNum) {
             maxNum = numeros[j];
        }        
    }
}

alert("el mínimo es: " + minNum);
alert("el máximo es: " + maxNum);