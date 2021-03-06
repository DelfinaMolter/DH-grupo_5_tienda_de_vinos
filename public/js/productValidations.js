// VALIDACIONES DEL FRONT
console.log ("esto es una prueba");
    const form = document.querySelector('.form_edit');
    console.log(form);
    const nameField = form.name;
    const description = form.description;
    const winery = form.winery;
    const grapes = form.grapes;
    const bottles = form.bottles;
    const style_wines = form.style_wines;
    const price = form.price;
    const img = form.img;
    

    const isEmpty = (field) => {
        return field.value.trim().length === 0;
    }

    const shortName = (name) => {
        return name.value.length<2
    }
    const generateError = (field, message) => {
        const span = field.nextElementSibling;
        span.innerHTML = message;
        field.classList.add('is-invalid');
    }
    const removeError = (field) => {
        const span = field.nextElementSibling;
        span.innerHTML = ""
        field.classList.remove('is-invalid')
    }
    //-------------------------------
    form.addEventListener('submit', function(e){
        e.preventDefault();

            generateError(nameField, 'El producto debe contener al menos un <b>nombre</b>.');
            generateError(description, 'Por favor, introduzca un breve comentario.');
            generateError(img, 'Debes subir una <b>Imagen</b>.');
            generateError(winery, 'El campo Winery debe contener al menos una <b>bodega</b>.');
            generateError(style_wines, 'El campo Winery debe contener al menos un <b>tipo de vino</b>.');
            generateError(grapes, 'Por favor, selecciona el <b>tipo de uva</b>.');
            generateError(bottles, 'Por favor, selecciona la cantidad de <b>botellas</b>.');
            generateError(price, 'Por favor, ingrese un <b>importe</b>.');
            
        let sePuedeEnviar = false
            
        if (!isEmpty(nameField)){
            removeError(nameField)
            sePuedeEnviar++
        }
        if (!isEmpty(description)){removeError(description)
            sePuedeEnviar++
        }
        if (!isEmpty(winery)){removeError(winery)
            sePuedeEnviar++
        }
        if (!isEmpty(grapes)){removeError(grapes)
            sePuedeEnviar++
        }
        if (!isEmpty(bottles)){removeError(bottles)
            sePuedeEnviar++
        }
        if (!isEmpty(price)){removeError(price)
            sePuedeEnviar++
        }
        if (!isEmpty(img)){removeError(img)
            sePuedeEnviar++
        }
        if (!isEmpty(style_wines)){removeError(style_wines)
            sePuedeEnviar++
        }

        sePuedeEnviar === 8 ? e.target.submit():""
        
    })

    //////////////////////////////////////////////////////////////////////////7777

    nameField.addEventListener('input', (event) => {
        if(isEmpty(nameField)){
            event.target.style.background = 'pink';
            generateError(nameField, 'El producto debe contener al menos un <b>nombre</b>.')
        }
        else {
            event.target.style.background = '';
            removeError(nameField)
        }
        })

    description.addEventListener('input', (event) => {
        if(isEmpty(description)){
            event.target.style.background = 'pink';
            generateError(description, 'Por favor, introduzca un breve comentario.')
        }
        else {
            event.target.style.background = '';
            removeError(description)
        }
        })

        img.addEventListener('input', (event) => {
            if(isEmpty(img)){
                event.target.style.background = 'pink';
                generateError(img, 'Debes subir una <b>Imagen</b>.')
            }
            else {
                event.target.style.background = '';
                removeError(img)
            }
            })

        winery.addEventListener('input', (event) => {
        if(isEmpty(winery)){
            event.target.style.background = 'pink';
            generateError(winery, 'El campo Winery debe contener al menos una <b>bodega</b>.')
        }
        else {
            event.target.style.background = '';
            removeError(winery)
        }
        })

        style_wines.addEventListener('input', (event) => {
            if(isEmpty(style_wines)){
                event.target.style.background = 'pink';
                generateError(style_wines, 'El campo Winery debe contener al menos un <b>tipo de vino</b>.')
            }
            else {
                event.target.style.background = '';
                removeError(style_wines)
            }
            })

        grapes.addEventListener('input', (event) => {
            if(isEmpty(grapes)){
                event.target.style.background = 'pink';
                generateError(grapes, 'Por favor, selecciona el <b>tipo de uva</b>.')
            }
            else {
                event.target.style.background = '';
                removeError(grapes)
            }
            })

        bottles.addEventListener('input', (event) => {
        if(isEmpty(bottles)){
            event.target.style.background = 'pink';
            generateError(bottles, 'Por favor, selecciona la cantidad de <b>botellas</b>.')
        }
        else {
            event.target.style.background = '';
            removeError(bottles)
        }
        })

        price.addEventListener('input', (event) => {
            if(isEmpty(price)){
                event.target.style.background = 'pink';
                generateError(price, 'Por favor, ingrese un <b>importe</b>.')
            }
            else {
                event.target.style.background = '';
                removeError(price)
            }
            })
    

