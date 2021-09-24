import React from 'react';
import {useState, useEffect} from 'react'

function LastProductInDb(){

    /* Api's requests */
        let [apiProducts, setApiProducts] = useState([]);
        
        
        useEffect(()=>{
            fetch('http://localhost:3001/api/productos')
            .then(response => response.json())
            .then(data => {
                setApiProducts(data)
            })
            .catch(err => console.error(err))
        },[]
        )
        let products = apiProducts.detalleProductos
        let lastProduct = products && products[products.length -1]
        //let contadorProductos = totalsP.length !== 0 ? totalsP.contador.productosTotales :'cargando...'
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la Base de Datos:</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <h3>{lastProduct?lastProduct.name : 'cargando...'}</h3> 
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 15 +'rem'}} src={lastProduct && lastProduct.img} alt="wine"/>
                    </div>
                    <p>{lastProduct?lastProduct.description : 'cargando...'}</p>
                    <a className="btn btn-danger" target="_blank" rel='noopener noreferrer' href={lastProduct && lastProduct.url}>View product detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
