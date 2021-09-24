const db = require ('../../database/models');
//const sequelize = require("sequelize");
//const Op = db.Sequelize.Op;
const express = require ('express');
const app = express(); 
app.set("port", process.env.PORT || 3001);

module.exports = {
    show: (req, res) => {
        db.Product
        .findByPk(req.params.id)
        .then (async product => {
            return res.status(200).json({
                id:product.id,
                name:product.name,
                description:product.description,
                img:product.image,
                stock:product.stock,
                in_sale:product.in_sale,
                wineriesId:product.wineries_id,
                wineries: await product.getWineries(), 
                status: 200,
            })
        })
    },
    list: (req, res) => {
        db.Product
        .findAll( {include: ['wineries', 'style_wines', 'grapes' ]})
        .then (async products => {
            let allProducts= await products.map(e=>{
                return {id:e.id,
                    name:e.name,
                    description:e.description,
                    img:'http://localhost:3001/img/products/'+e.img,
                    stock:e.stock,
                    in_sale:e.in_sale,
                    wineries: e.wineries.name,
                    style_wines: e.style_wines.name,
                    grapes: e.grapes.name,
                    url: `http://localhost:${app.get("port")}/api/detail/${e.id}`
                }})
                //Filtro de STYLE WINES
            let find_style_winesTinto= allProducts.filter(e=>{
                return e.style_wines== 'Vino Tinto'
            })
            let find_style_winesBlanco= allProducts.filter(e=>{
                return e.style_wines== 'Vino Blanco'
            })
            let find_style_winesEspumante= allProducts.filter(e=>{
                return e.style_wines== 'Espumantes'
            })
                // filtro de WINERIES
            let find_wineries_Trapiche= allProducts.filter(e=>{
                return e.wineries== 'Trapiche'
            })
            let find_wineries_NavarroCorreas= allProducts.filter(e=>{
                return e.wineries== 'Navarro Correas'
            })
            let find_wineries_FincaLasMoras= allProducts.filter(e=>{
                return e.wineries== 'Finca las Moras'
            })
            let find_wineries_ElEsteco= allProducts.filter(e=>{
                return e.wineries== 'El Esteco'
            })
            let find_wineries_CostaYPampa= allProducts.filter(e=>{
                return e.wineries== 'Costa & Pampa'
            })
                // filtro de GRAPES
            // let grape= await db.Grape.findAll()
            // let coundAndFind = (lista, valor)=> allProducts.filter(e=>{
            //     return e.lista== valor
            // })
            let find_grapes_SauvignonBlanc= allProducts.filter(e=>{
                return e.grapes== 'Sauvignon Blanc'
            })
            let find_grapes_Malbec= allProducts.filter(e=>{
                return e.grapes== 'Malbec'
            })
            let find_grapes_Malbec_CabernetSauvignon= allProducts.filter(e=>{
                return e.grapes== 'Malbec - Cabernet Sauvignon'
            })
            let find_grapes_Chardonnay= allProducts.filter(e=>{
                return e.grapes== 'Chardonnay'
            })
            let find_grapes_CabernetSauvignon= allProducts.filter(e=>{
                return e.grapes== 'Cabernet Sauvignon'
            })
            let find_grapes_BrutNature= allProducts.filter(e=>{
                return e.grapes== 'Brut Nature'
            })
            let find_grapes_ExtraBrut= allProducts.filter(e=>{
                return e.grapes== 'Extra Brut'
            })
            return res.status(200).json( await
                {   
                    status:200,
                    contador: {
                        productosTotales:allProducts.length,
                        contadorDeStyle_wines:{
                            VinoTinto: find_style_winesTinto.length,
                            VinoBlanco: find_style_winesBlanco.length,
                            VinoEspumante: find_style_winesEspumante.length
                        },
                        contadorWineries:{
                            Trapiche:find_wineries_Trapiche.length,
                            NavarroCorreas:find_wineries_NavarroCorreas.length,
                            FincaLasMoras:find_wineries_FincaLasMoras.length,
                            ElEsteco:find_wineries_ElEsteco.length,
                            CostaYPampa:find_wineries_CostaYPampa.length
                        },
                        contadorGrapes:{
                            SauvignonBlanc:find_grapes_SauvignonBlanc.length,
                            Malbec:find_grapes_Malbec.length,
                            Malbec_CabernetSauvignon:find_grapes_Malbec_CabernetSauvignon.length,
                            Chardonnay:find_grapes_Chardonnay.length,
                            CabernetSauvignon:find_grapes_CabernetSauvignon.length,
                            BrutNature:find_grapes_BrutNature.length,
                            ExtraBrut:find_grapes_ExtraBrut.length
                        }
                    },
                    detalleProductos: allProducts
                }
                )
            })
    }
}
