/*const db = require ('../../database/models');
const express = require ('express');
const app = express(); 
app.set("port", process.env.PORT || 3000);

module.exports = {
        list: (req,res) => {
        db.User
        .findAll( {include: ['wineries', 'style_wines', 'grapes', ]})
        .then (async users => {
            let allUsers= await users.map(e=>{
                return {id:e.id,
                    first_name:e.first_name,
                    last_name:e.last_name,
                    email:e.email,
                    img:e.image,
                    birthDate:e.birthDate,
                    dni:e.dni,
                    url: `http://localhost:${app.get("port")}/api/detail/${e.id}`
                }})
            let find_style_winesTinto= allUsers.filter(e=>{
                return e.style_wines== 'Vino Tinto'
            })
            let find_style_winesBlanco= allUsers.filter(e=>{
                return e.style_wines== 'Vino Blanco'
            })
            let find_style_winesEspumante= allUsers.filter(e=>{
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
                        productosTotales:allUsers.length,
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
                    detalleProductos: allUsers
                }
                )
            })
    },
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
    }
} */

