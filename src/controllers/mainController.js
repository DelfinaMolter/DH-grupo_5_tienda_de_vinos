const productModels = require('../models/product')

const controller = {
    home: (req,res) => {res.render('home', {list: productModels.allWithExtra() })},
    carrito: (req,res) => {res.render('carrito')},
}
    
    module.exports = controller;