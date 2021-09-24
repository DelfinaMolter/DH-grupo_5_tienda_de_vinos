import React from "react";
import {useState, useEffect} from 'react';
import LittleCard from './LittleCards'

function ProductsByCategories() {

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
  let styleWineCounts = [{total:contadorTinto, title:'Vino Tinto'}, {total:contadorBlanco, title:'Vino Blanco'}, {total:contadorEspumante,title:'Vino Espumante'}]
 
  //Contadores para Wineries
  let contadorTrapiche = totalsP.length !== 0 ? totalsP.contador.contadorWineries.Trapiche :'cargando...'
  let contadorNavarroCorreas = totalsP.length !== 0 ? totalsP.contador.contadorWineries.NavarroCorreas :'cargando...'
  let contadorFincaLasMoras = totalsP.length !== 0 ? totalsP.contador.contadorWineries.FincaLasMoras :'cargando...'
  let contadorElEsteco = totalsP.length !== 0 ? totalsP.contador.contadorWineries.ElEsteco :'cargando...'
  let contadorCostaYPampa = totalsP.length !== 0 ? totalsP.contador.contadorWineries.CostaYPampa :'cargando...'
  let wineriesCounts = [{total:contadorTrapiche, title:'Trapiche'}, {total:contadorNavarroCorreas, title: 'Navarro Correa'}, {total:contadorFincaLasMoras, title:'Finca Las Moras'}, {total:contadorElEsteco, title:'El Esteco'}, {total: contadorCostaYPampa, title:'Costa y Pampa'}];
  //Contadores para Grapes
  let contadorSauvignonBlanc = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.SauvignonBlanc :'cargando...'
  let contadorMalbec = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.Malbec :'cargando...'
  let contadorMalbec_CabernetSauvignon = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.Malbec_CabernetSauvignon :'cargando...'
  let contadorChardonnay = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.Chardonnay :'cargando...'
  let contadorCabernetSauvignon = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.CabernetSauvignon :'cargando...'
  let contadorBrutNature = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.BrutNature :'cargando...'
  let contadorExtraBrut = totalsP.length !== 0 ? totalsP.contador.contadorDeStyle_wines.ExtraBrut :'cargando...'
  let contadorgrapesCounts = [contadorSauvignonBlanc, contadorMalbec, contadorMalbec_CabernetSauvignon, contadorChardonnay, contadorCabernetSauvignon, contadorBrutNature, contadorExtraBrut]
  
    return (
        <>
            <section className="contadorSection contadorStyleWine">
                <h3 className='soft-black'>Totales de Tipo de vino</h3>
                {styleWineCounts.map( (card, i) => {
                return <LittleCard {...card} key={i + 'styleWineCard'}/>
                })}
            </section>

            <section className='contadorSection contadorWineries'>
                <h3 className='soft-black'>Totales de Bodega</h3>
                {wineriesCounts.map( (card, i) => {
                return <LittleCard {...card} key={i + 'wineriesCard'}/>
                })}
            </section>
        </>
    );
}

export default ProductsByCategories;
