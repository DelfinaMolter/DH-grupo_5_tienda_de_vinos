// VALIDACIONES DEL FRONT
    
    const form = document.querySelector ('form');
    const nameField = form.name;
    const description = form.description;
    const winery = form.winery;
    const grapes_id = form.grapes_id;
    const wineries_id = form.wineries_id
    const grapes = form.grapes;
    const bottles = form.bottles;
    const style_wines = form.style_wines;
    const style_wines_id = form.style_wines_id;
    const price = form.price;
    const img = form.img;
    
    const isEmpty = (field) => {
        return field.value.trim().length === 0;
    }
    const shortName = (name) => {
        return name.value.length<2
    }
    const generateError = (field) => {
        const span = field.nextElementSibling;
        span.innerHTML = message;
        field.classList.add('is-invalid');
    }
    const removeError = (field) => {
        const span = field.nextElementSibling;
        span.innerHTML = ""
        field.classList.remove('is-invalid')
    }
    form.addEventListener('submit', function(e){
        e.preventDefault();

        if(
            isEmpty(nameField) != '' /
            
            isEmpty(description) != '' /
            
            isEmpty(winery) != '' /
    
            isEmpty(grapes) != '' /
    
            isEmpty(bottles) != '' /
    
            isEmpty(style_wines) != '' /
    
            isEmpty(style_wines_id) != '' /
            
            isEmpty(price) != '' /
            
            isEmpty(img) != ''
        ) {
            generateError(nameField, 'El campo Name debe contener al menos un <b>nombre</b>');
            generateError(winery, 'El campo Winery debe contener al menos una <b>bodega</b>');
            generateError(grapes, 'Por favor, selecciona el <b>tipo de uva</b>');
            generateError(bottles, 'Por favor, selecciona la cantidad de <b>botellas</b>');
            generateError(price, 'Por favor, ingrese un <b>importe</b>');
            generateError(img, 'Debes subir una <b>Imagen</b>')
        }

        if (!isEmpty(nameField)){removeError(nameField)}
        if (!isEmpty(winery)){removeError(winery)}
        if (!isEmpty(grapes)){removeError(grapes)}
        if (!isEmpty(bottles)){removeError(bottles)}
        if (!isEmpty(price)){removeError(price)}
        if (!isEmpty(img)){removeError(img)}
    })
