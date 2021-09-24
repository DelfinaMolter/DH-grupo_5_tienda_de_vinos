import React from "react";
import {useState, useEffect} from 'react';

function ProductsCategories() {

  let [totalsP, setTotalsP] = useState([]);


  useEffect(()=>{
      fetch('http://localhost:3001/api/productos')
      .then(response => response.json())
      .then(data => {
          setTotalsP(data)
      })
      .catch(err => console.error(err))
  },[]
  )
  //contadores para Style Wine
  let contadorTinto = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.VinoTinto :'cargando...'
  let contadorBlanco = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.VinoBlanco :'cargando...'
  let contadorEspumante = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.VinoEspumante :'cargando...'
  //Contadores para Wineries
  let contadorTrapiche = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.Trapiche :'cargando...'
  let contadorNavarroCorrea = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.NavarroCorrea :'cargando...'
  let contadorFincaLasMoras = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.FincaLasMoras :'cargando...'
  let contadorElEsteco = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.ElEsteco :'cargando...'
  let contadorCostaYPampa = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.CostaYPampa :'cargando...'
  
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Total de productos por categoría:
          </h5>
        </div>
        <div className="card-body">
          <div className="row">

            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-success text-white shadow">
                <div className="card-body">Tintos: {contadorTinto}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-success text-white shadow">
                <div className="card-body">Blancos:{contadorBlanco}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-success text-white shadow">
                <div className="card-body">Espumantes:{contadorEspumante}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-warning text-white shadow">
                <div className="card-body">Trapiche:{contadorTrapiche}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-warning text-white shadow">
                <div className="card-body">Finca las Moras: {contadorFincaLasMoras}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-warning text-white shadow">
                <div className="card-body">Navarro Correa: {contadorNavarroCorrea}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-warning text-white shadow">
                <div className="card-body">El Esteco: {contadorElEsteco}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark border-left-warning text-white shadow">
                <div className="card-body">Costa y Pampa: {contadorCostaYPampa}</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark  text-white shadow">
                <div className="card-body">Infantiles</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">Musical</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsCategories;
