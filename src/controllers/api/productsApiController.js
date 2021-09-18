const db = require ('../../database/models');
//const sequelize = require("sequelize");
//const Op = db.Sequelize.Op;
const express = require ('express');
const app = express(); 
app.set("port", process.env.PORT || 3000);

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
    list: (req,res) => {
        db.Product
        .findAll( {include: ['wineries', 'style_wines', 'grapes', ]})
        .then (async products => {
            let allProducts= await products.map(e=>{
                return {id:e.id,
                    name:e.name,
                    description:e.description,
                    img:e.image,
                    stock:e.stock,
                    in_sale:e.in_sale,
                    wineries: e.wineries.name,
                    style_wines: e.style_wines.name,
                    grapes: e.grapes.name,
                    url: `http://localhost:${app.get("port")}/api/detail/${e.id}`
                }})
            let find_style_winesTinto= allProducts.filter(e=>{
                return e.style_wines== 'Vino Tinto'
            })
            let find_style_winesBlanco= allProducts.filter(e=>{
                return e.style_wines== 'Vino Blanco'
            })
            let find_style_winesEspumante= allProducts.filter(e=>{
                return e.style_wines== 'Espumantes'
            })
            // let grape= await db.Grape.findAll()
            // let coundAndFind = (lista, valor)=> allProducts.filter(e=>{
            //     return e.lista== valor
            // })
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
                        contadorWineries:[],
                        contadorGrapes:{
                            SauvignonBlanc:[],
                            Malbec:[]
                        }
                    },
                    detalleProductos: allProducts
                }
                )
            })
    }
}
