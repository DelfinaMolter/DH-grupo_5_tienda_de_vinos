let db = require('../database/models');

let productControllerDB = {
    list: async (req, res) => {
        res.render('./products/products', {list: await db.Product.findAll()})
    },

    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/products')
    },

    search: (req, res) => {
        db.Product.findAll({})
    }

}

module.exports = productControllerDB