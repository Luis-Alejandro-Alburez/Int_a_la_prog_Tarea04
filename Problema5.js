let precio1 = parseFloat(prompt("Ingrese el precio del primer plato:"));
let precio2 = parseFloat(prompt("Ingrese el precio del segundo plato:"));
let precio3 = parseFloat(prompt("Ingrese el precio del tercer plato:"));
let impuesto = parseFloat(prompt("Ingrese el porcentaje de impuestos a pagar:"));

let totalPago = function (p1, p2, p3, imp) {
    return parseFloat((p1 + p2 + p3) * (1 + imp));
}

alert("el total a pagar es " + totalPago(precio1, precio2, precio3, impuesto));