const form = document.querySelector('.registroForm');
const first_name = form.first_name;
const last_name = form.last_name;
const email = form.email;
const password = form.password;
const img = form.img;

const isEmpty = (field) => {
    return field.value.trim().length === 0;
}
const shortName = (name) => {
    return name.value.length<2
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

form.addEventListener('submit', function(e){
    e.preventDefault();
        
        if (isEmpty(first_name)) {
            generateError(first_name, 'Debes completar tu <b>Nombre</b>')
        }
        if (isEmpty(last_name)) {
            generateError(last_name, 'Debes completar tu <b>Apellido</b>')
        }
        if (isEmpty(email)) {
            generateError(email, 'Debes completar tu <b>E-mail</b>')
        }
        if (isEmpty(password)) {
            generateError(password, 'Debes completar tu <b>Password</b>')
        }
        if (isEmpty(img)) {
            generateError(img, 'Debes subir una <b>Imagen</b>')
        }

            let sePuedeEnviar = 0
            if (!isEmpty(first_name)){removeError(first_name)
                sePuedeEnviar++
            }
            if (!isEmpty(last_name)){removeError(last_name)
                sePuedeEnviar++
            }
            if (!isEmpty(email)){removeError(email)
                sePuedeEnviar++
            }
            if (!isEmpty(password)){removeError(password)
            sePuedeEnviar++
            }
            if (!isEmpty(img)){removeError(img)
            sePuedeEnviar++
            }

        if (!isEmpty(first_name) && shortName(first_name)){
            generateError(first_name, 'Tu <b>Nombre</b> debe tener tener un mínimo de 2 caracteres')
        }
        if(!isEmpty(first_name) && !shortName(first_name)){
            removeError(first_name)
        sePuedeEnviar++
        }
        if (!isEmpty(last_name) && shortName(last_name)){
            generateError(last_name, 'Tu <b>Apellido</b> debe tener tener un mínimo de 2 caracteres')
        }
        if(!isEmpty(last_name) && !shortName(last_name)){
            removeError(last_name)
        sePuedeEnviar++
        }

        if (!isEmpty(password) && shortPass(password)){
            generateError(password, 'Tu <b>Contraseña</b> debe tener un mínimo de 6 caracteres')
        }
        if(!isEmpty(password) && !shortPass(password)){
            removeError(password)
        sePuedeEnviar++
        }
    sePuedeEnviar === 8 ? e.target.submit() : "";
})