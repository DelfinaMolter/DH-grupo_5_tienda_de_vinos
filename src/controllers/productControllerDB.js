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
            id: req.body.identificador,
            name: req.body.nombre,
            bottles: req.body.botellas,
            description: req.body.descripcion,
            price: req.body.precio,
            stock: req.body.stock,
            inSale: req.body.enOferta,
            wineries_id: req.body.identificadorVinos,
            style_wines_id: req.body.identificador_vinos,
            grapes_id: req.body.indentificador_uva
            });
            res.redirect('/product');
    },
    edit: function (req, res) {
        let pedidoProduct = db.Product.findByPk(requ.params.id);

        Promise.all([pedidoProduct])
        .then(function([Product]){
            res.render('products/edit', {Product:Product})
        })
    }
}

module.exports = productControllerDB