// Traemos los id necesarios y los guardamos en variables
const nick = document.getElementById('nick');
const pass = document.getElementById('pass');

const form = document.getElementById('form');

const alert = document.getElementById('alert');

let val = 0;

// Guardamos a los usuarios en el "Local Storage"
let users = JSON.parse(localStorage.getItem('users'));

// Se realiza un evento con el usuario haga click en "ingresar"
form.addEventListener('submit', function (e) {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) { // Recorremos el arreglo y validamos los valores dentro del "If"
        if (nick.value == users[i].nick && pass.value == users[i].pass) {
            val += 1;
            localStorage.setItem('userIndex', i);
        }
    }

    if (val === 1) { // Si se cumple la condicion de ingreso, el usuario accede satisfactoriamente al sistema
        val = 0;
        window.location = "perfil.html";
    } else { // De lo contrario se preparan las siguientes alertas para validar los valores de los inputs
        form.reset();
        val = 0;
        alert.className = 'alert alert-warning';
        alert.style.display = 'block';
        alert.innerText = 'Nombre de usuario o contraseña incorrectos';
        setTimeout(function () { alert.style.display = 'none'; alert.className = ''; }, 2500);
    }
})