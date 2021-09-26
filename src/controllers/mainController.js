const productModels = require('../models/product')

const controller = {
    home: (req,res) => {res.render('home', {list: productModels.allWithExtra() })},
    
}
    
    module.exports = controller;