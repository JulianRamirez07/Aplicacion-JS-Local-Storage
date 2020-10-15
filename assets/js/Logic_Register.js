// Traemos los id necesarios y los guardamos en variables
const name = document.getElementById('name');
const nick = document.getElementById('nick');
const pass = document.getElementById('pass');
const form = document.getElementById('form');

const alert = document.getElementById('alert');

let val = 0;

let userList = []; // Creamos una variable "userList" de tipo "Array"

if (!localStorage.getItem('users')) { 
    localStorage.setItem('users', JSON.stringify(userList)); // Guardamos en el "Local Storage" los valores de "userList" con la llave 'users'
} else {
    userList = JSON.parse(localStorage.getItem('users')); //analizamos la cadena de texto y la convertimos al formato JSON
}

function addUser(name, nick, pass) {
    userList.push({ 'name': name, 'nick': nick, 'pass': pass }); // Añadimos un nuevo usuario al array con el metodo push
}

// Se realiza un evento con el usuario haga click en "Registrar"
form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let i = 0; i < JSON.parse(localStorage.getItem('users')).length; i++) {
        if (JSON.parse(localStorage.getItem('users'))[i].nick == nick.value) {
            val += 1;
        } 
    }

    if (val > 0) { // Si no se cumple la condicion de registro, se preparan las siguientes alertas
        val = 0;
        alert.className = 'alert alert-warning';
        alert.style.display = 'block';
        alert.innerText = 'Ya existe un registro con este nombre de usuario';
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    } else { // De lo contrario se muestra un breve mensaje de registro satisfactorio
        val = 0;
        addUser(name.value, nick.value, pass.value)
        localStorage.setItem('users', JSON.stringify(userList));
        alert.className = 'alert alert-success';
        alert.style.display = 'block';
        alert.innerText = 'Te has registrado correctamente, ya puedes ingresar';
        form.reset();
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    }
})