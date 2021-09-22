import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react';



function ContentRowProducts(){

/* Api's requests */
let [totalsP, setTotalsP] = useState([]);
let [totalsU, setTotalsU] = useState([]);


useEffect(()=>{
    fetch('http://localhost:3001/api/productos')
    .then(response => response.json())
    .then(data => {
        setTotalsP(data)
    })
    .catch(err => console.error(err))
},[]
)
let contadorProductos = totalsP.length !== 0 ? totalsP.contador.productosTotales :'cargando...'

useEffect(()=>{
    fetch('http://localhost:3001/api/usuarios')
    .then(response => response.json())
    .then(data => {
        setTotalsU(data)
    })
    .catch(err => console.error(err))
},[]
)
let contadorUsuarios = totalsU.length !== 0 ? totalsU.contador.usuariosTotales :'cargando...'

// Porducts in DB
let productsInDb = {
    title: 'Productos en la Base de Datos',
    color: 'primary', 
    cuantity: contadorProductos,
    icon: 'fa-wine-glass-alt'
}

/*  Users in DB */

let usersInDb = {
    title:' Total de Usuarios registrados', 
    color:'success', 
    cuantity: contadorUsuarios,
    icon:'fa-user-check'
}

/*  Categories in DB */

let categoriesInDb = {
    title:'Categorias' ,
    color:'warning',
    cuantity:'3',
    icon:'fa-chart-pie'
}

let cartProps = [productsInDb, usersInDb, categoriesInDb];

    return (
    
        <div className="row">
            
            {cartProps.map( (card, i) => {

                return <SmallCard {...card} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;