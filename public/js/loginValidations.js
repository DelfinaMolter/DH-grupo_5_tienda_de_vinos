const form = document.querySelector('.login-form');
const user = form.user;
const password = form.password;

const isEmpty = (field) => {
    return field.value.trim().length === 0;
}
const shortPass = (pass) => {
    return pass.value.length<6
}
const shortUser = (user) => {
    return user.value.length<2
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


password.addEventListener('blur', (event) => {
    if(isEmpty(password)){
        event.target.style.background = 'pink';
        generateError(password, 'Debes escribir una <b>Contraseña</b>')
    }
    else if(!isEmpty(password) && shortPass(password)) {
        event.target.style.background = 'pink';
        generateError(password, 'Tu <b>Contraseña</b> debe tener un mínimo de 6 caracteres')
    }
    else {
        event.target.style.background = '';
        removeError(password)
    }
    ;})

    user.addEventListener('blur', (event) => {
        if(isEmpty(user)){
            event.target.style.background = 'pink';
            generateError(user, 'Debes escribir un <b>Usuario</b>')
        }
        else if(!isEmpty(user) && shortUser(user)) {
            event.target.style.background = 'pink';
            generateError(user, 'Tu <b>Usuario</b> debe tener un mínimo de 2 caracteres')
        }
        else {
            event.target.style.background = '';
            removeError(user)
        }
        ;})



        // VALIDATION ON SUBMIT
frmo.addEventListener('submit', function(event){
event.preventDefault();

    if (isEmpty(user)) {
        generateError(user, 'Debes completar tu <b>Usuario</b>')
    };

    if (!isEmpty(user) && shortUser(user)){
        generateError(user, 'Tu <b>Usuario</b> debe tener un mínimo de 2 caracteres')
    };

    if (!isEmpty(user) && !shortUser(user)){
        removeError(user)};

    if (isEmpty(password)) {
        generateError(password, 'Debes completar tu <b>Contraseña</b>')
    };

    if (!isEmpty(password) && shortPass(password)){
        generateError(password, 'Tu <b>Contraseña</b> debe tener un mínimo de 6 caracteres')
    };

    if(!isEmpty(password) && !shortPass(password)){
        removeError(password)
    }
    if(!isEmpty(password) && !shortPass(password) && !isEmpty(password) && !shortPass(password))
    {event.currentTarget.submit()};
})
