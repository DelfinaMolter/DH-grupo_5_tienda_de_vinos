import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let productsInDb = {
    title: 'Productos en la Base de Datos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-wine-glass-alt'
}

/* <!-- Total awards --> */

let usersInDb = {
    title:' Usuarios en la Base de Datos', 
    color:'success', 
    cuantity: '79',
    icon:'fa-user-check'
}

/* <!-- Actors quantity --> */

let categoriesInDb = {
    title:'Categorias?' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-chart-pie'
}

let cartProps = [productsInDb, usersInDb, categoriesInDb];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (products, i) => {

                return <SmallCard {...products} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;