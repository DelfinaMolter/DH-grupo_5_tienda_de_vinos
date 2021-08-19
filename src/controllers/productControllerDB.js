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
    },
    
    // Crear un Producto
    
    create: function (req, res) {
        db.Product.findAll()
        .then(function(Product){
            return res.render ("/products/create", {Product:Product});
        })
    },
    update:function (req, res) {
        db.Product.create({
            name: req.body.name,
            bottles: req.body.bottles,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            in_sale: req.body.in_sale,
            wineries_id: req.body.wineries_id,
            style_wines_id: req.body.style_wines_id,
            grapes_id: req.body.grapes_id
            });
            res.redirect('/product');
    },
    edit: function (req, res) {
        let pedidoProduct = db.Product.findByPk(req.params.id);

        Promise.all([pedidoProduct])
        .then(function([Product]){
            res.render('products/edit', {Product:Product})
        })
    }
}

module.exports = productControllerDB