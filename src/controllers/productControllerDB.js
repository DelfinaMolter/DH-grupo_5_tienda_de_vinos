let db = require('../database/models');
const sequelize = require("sequelize")
const {Product, Winery} = db;
const {Op} = sequelize;
const {like,between} = Op;

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

    save: async function(req, res) {
        try{
            const newProduct =  await db.Product.create({                
                    name: data.name,
                    winery: parseInt(data.winery),
                    styleWine: parseInt(data.styleWine),
                    grapes:parseInt(data.grapes),
                    bottles: parseInt(data.bottles),
                    description: data.description,
                    img: file.filename,
                    price: data.price
            });
            const created = await db.Product.findByPk(newProduct.id);
            res.send(created);
            return res.redirect('/')

        } catch (err) {return res.send(err)};

            
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