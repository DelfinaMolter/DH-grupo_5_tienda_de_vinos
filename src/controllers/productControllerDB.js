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
        db.Product.findAll({
            where:{}
        })
    },
    
    // Crear un Producto
    
    create: function (req, res) {
        db.Product.findAll()
        .then(function(Product){
            return res.render ("./products/create", {Product:Product});
        })
    },
    update:function (req, res) {
        db.Product.create({
            name: req.body.name,
            bottles: req.body.bottles,
            description: req.body.description,
            price: req.body.price,
            //stock: req.body.stock,
            //in_sale: req.body.in_sale,
            //wineries_id: req.body.wineries_id,
            //style_wines_id: req.body.style_wines_id,
            //grapes_id: req.body.grapes_id
            });
            res.redirect('./products');
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