const form = document.querySelector('.login-form');
const user = form.user;
const password = form.password;

const isEmpty = (field) => {
    return field.value.trim().length === 0;
}
const shortPass = (pass) => {
    return pass.value.length<6
}
const generateError = (field, msg) => {
    const span = field.nextElementSibling;
    span.innerHTML = msg
    field.classList.add('is-invalid')
}
const removeError = (field) => {
    const span = field.nextElementSibling;
    span.innerHTML = ""
    field.classList.remove('is-invalid')
}

form.addEventListener('submit', function(event){
event.preventDefault();

    if (isEmpty(user)) {
        generateError(user, 'Debes completar tu <b>Usuario</b>')
    }

    if (!isEmpty(user)){removeError(user)}

    if (isEmpty(password)) {
        generateError(password, 'Debes completar tu <b>Contraseña</b>')
    }

    if (!isEmpty(password) && shortPass(password)){
        generateError(password, 'Tu <b>Contraseña</b> debe tener un mínimo de 6 caracteres')
    }

    if(!isEmpty(password) && !shortPass(password)){
        removeError(password)
    }

//agregar funcionamiento del botón
})
