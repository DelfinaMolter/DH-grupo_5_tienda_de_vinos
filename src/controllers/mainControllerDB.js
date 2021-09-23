// const productModels = require('../models/product')

// const controller = {
//     home: (req,res) => {res.render('home', {list: productModels.allWithExtra() })},
//     carrito: (req,res) => {res.render('carrito')},
// }
    


let db = require('../database/models');
const sequelize = require("sequelize");

let mainControllerDB = {
    list: async (req, res) => {
            try{
        const products = await db.Product.findAll({include:["wineries", "grapes", "style_wines"]});
        //res.send(products)
        res.render('./home', {products})
            }
        catch(error){res.send(error)}
    },
}
    module.exports = mainControllerDB;