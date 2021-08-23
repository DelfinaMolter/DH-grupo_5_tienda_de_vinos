let db = require('../database/models');
const sequelize = require("sequelize")


let productControllerDB = {
    list: async (req, res) => {
            try{
        const products = await db.Product.findAll({include:["wineries"]});
        //res.send(products)
        res.render('./products/products', {products})
            }
        catch(error){res.send(error)}
    },

    detail: async (req, res) => {
        try{
        const product = await db.Product.findByPk(req.params.id);
        const winery = await product.getWineries();
        
        //res.send({products, wineries})
        res.render('./products/detail', {product, winery})
        } catch(error){res.send(error)}

        //res.render('./products/detail', {product: await db.Product.findByPk()})
    },

    create: async (req, res) => {
        const winery = await db.Winery.findAll();
        const grape = await db.Grape.findAll();
        const styleWine = await db.StyleWine.findAll();
        res.render('./products/create', {winery, grape, styleWine})
    },

    store: async (req, res) => {
        try{
            let newProduct =  await db.Product.create({                
                    name: req.body.name,
                    wineries_id: parseInt(req.body.winery),
                    style_wines_id: parseInt(req.body.style_wines),
                    grapes_id:parseInt(req.body.grapes),
                    bottles: parseInt(req.body.bottles),
                    description: req.body.description,
                    img: img.filename,
                    price: req.body.price,
                    stock: 4,

            });
            const created = await db.Product.findByPk(newProduct.id);
            res.send(created);
            return res.redirect('/')

        } catch (err){res.send(err)};     
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
        
    
    update:function (req, res) {
        db.Product.update({
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