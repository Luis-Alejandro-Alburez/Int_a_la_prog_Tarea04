let login = prompt('login:');

let message = (login === 'Trabajador') ? 'Hola' :
              (login === 'Dueño') ? 'Felicidades' :
              (login === '') ? 'Sin sesión' : 
              '';

console.log(message);
