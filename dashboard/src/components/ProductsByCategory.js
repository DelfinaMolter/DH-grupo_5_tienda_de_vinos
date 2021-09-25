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
  let contadorSauvignonBlanc = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.SauvignonBlanc :'cargando...'
  let contadorMalbec = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.Malbec :'cargando...'
  let contadorMalbec_CabernetSauvignon = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.Malbec_CabernetSauvignon :'cargando...'
  let contadorChardonnay = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.Chardonnay :'cargando...'
  let contadorCabernetSauvignon = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.CabernetSauvignon :'cargando...'
  let contadorBrutNature = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.BrutNature :'cargando...'
  let contadorExtraBrut = totalsP.length !== 0 ? totalsP.contador.contadorGrapes.ExtraBrut :'cargando...'
  let grapesCounts = [{total:contadorSauvignonBlanc, title:'Sauvignon Blanc'}, {total:contadorMalbec, title:'Malbec'}, {total:contadorMalbec_CabernetSauvignon, title: 'Malbec-Carbenet Sauvignon'}, {total:contadorChardonnay, title:'Chardonay'}, {total: contadorCabernetSauvignon, title:'Cabernet Sauvignon'}, {total: contadorBrutNature, title:'Brut Nature'}, {total: contadorExtraBrut, title:'Extra Brut'}]
  
    return (
        <div className='productsByCategory-div'>
            <section className="contadorSection contadorStyleWine">
                <h3 className='soft-black section-title'>Totales de Tipo de vino</h3>
                {styleWineCounts.map( (card, i) => {
                return <LittleCard {...card} key={i + 'styleWineCard'}/>
                })}
            </section>

            <section className='contadorSection contadorWineries'>
                <h3 className='soft-black section-title'>Totales de Bodega</h3>
                {wineriesCounts.map( (card, i) => {
                return <LittleCard {...card} key={i + 'wineriesCard'}/>
                })}
            </section>

            <section className='contadorSection contadorGrapes'>
                <h3 className='soft-black section-title'>Totales de tipo de uva</h3>
                {grapesCounts.map( (card, i) => {
                return <LittleCard {...card} key={i + 'grapeCard'}/>
                })}
            </section>
        </div>
    );
}

export default ProductsByCategories;
