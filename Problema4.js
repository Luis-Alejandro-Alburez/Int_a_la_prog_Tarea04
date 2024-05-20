let usuario = prompt("Ingrese Usuario");

if (usuario == 'Admin') {
    let password = prompt("Ingrese Contraseña");

    if (password == 'Jedi'){
        console.log('¡Que la fuerza te acompañe!');
    } else if(password == '' || password === null) {
        console.log('Cancelado');
    } else {
        console.log('No te conozco');
    }
} else if (usuario == '' || usuario === null){
    console.log('Cancelado')
} else {
    console.log("No te conozco")
}