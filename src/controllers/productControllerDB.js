let db = require('../database/models');

let productControllerDB = {
    list: async (req, res) => {
        res.render('./products/products', {list: await db.Product.findAll()})
    },

    detalle: async (req, res) => {
        res.render('./products/detail', {product: await db.Product.findByPk(req.params.id)})
    },

    destroy: (req, res) => {
        try{
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/productos')
    }
    catch(error){
        res.send(error)
    }
    },

    search: (req, res) => {
        db.Product.findAll({})
    },


}

module.exports = productControllerDB