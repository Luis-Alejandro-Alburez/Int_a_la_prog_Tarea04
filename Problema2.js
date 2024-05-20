let userInput = prompt("ingrese un número:");
numero = parseInt(userInput)

if (numero === 0) {
    console.log("0");
}else if(numero < 0) {
    console.log("-1");
}else{
    console.log("1");
}