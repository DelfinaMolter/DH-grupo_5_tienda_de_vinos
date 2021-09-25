let db = require('../database/models');
const sequelize = require("sequelize");
const {Op} = sequelize;
const {like,between} = Op;
const { validationResult } = require('express-validator');


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
        const grape = await product.getGrapes();
        
        //res.send({products, wineries})
        res.render('./products/detail', {product, winery})
        } catch(error){res.send(error)}

        //res.render('./products/detail', {product: await db.Product.findByPk()})
    },

    create: async (req, res) => {
        try{
        const winery = await db.Winery.findAll();
        const grape = await db.Grape.findAll();
        const styleWine = await db.StyleWine.findAll();
        res.render('./products/create', {winery, grape, styleWine})
    }catch (err){res.send(err)};
    },

    store: async (req, res) => { 
        try{
            //Acá si hay errores los enviamos a la vista
            const resultValidations = validationResult(req);
            if (resultValidations.errors.length > 0 ) {
                const winery = await db.Winery.findAll();
                const grape = await db.Grape.findAll();
                const styleWine = await db.StyleWine.findAll();
                return res.render('products/create',{
                    errors: resultValidations.mapped(),
                    oldData: req.body,
                    winery, styleWine, grape
                })
            }
            let newProduct =  await db.Product.create({                
                    name: req.body.name,
                    bottles: parseInt(req.body.bottles),
                    description: req.body.description,
                    img: req.file.filename,
                    price: req.body.price,
                    stock: 4,
                    grapes_id: parseInt(req.body.grapes),
                    wineries_id: parseInt(req.body.winery),
                    style_wines_id: parseInt(req.body.style_wines)
            });
            // const addWinery = await newProduct.setWineries_id(parseInt(req.body.winery))
            // const addStyleWines = await newProduct.setStyle_wines(parseInt(req.body.style_wines))
            // const addGrape = await newProduct.setGrape(parseInt(req.body.grapes))

            const created = await db.Product.findByPk(newProduct.id);
            res.redirect('/productos')

        } catch (err){res.send(err)};     
    },

    update: async function (req, res) {
    try{
          //Acá si hay errores los enviamos a la vista
          const resultValidations = validationResult(req);
          if (resultValidations.errors.length > 0 ) {
              const winery = await db.Winery.findAll();
              const grapes = await db.Grape.findAll();
              const styleWine = await db.StyleWine.findAll();
              const product = await db.Product.findByPk(req.params.id);
              return res.render('products/edit',{
                  errors: resultValidations.mapped(),
                  product:product,
                  oldData: req.body,
                  winery, styleWine, grapes
              })
          }
        const product = await db.Product.findByPk(req.params.id);
        const updated = await product.update({
            name: req.body.name,
            description: req.body.description,
            img: req.file.filename,
            price: req.body.price,
            grapes_id: parseInt(req.body.grapes),
            wineries_id: parseInt(req.body.winery),
            style_wines_id: parseInt(req.body.style_wines),
            bottles: parseInt(req.body.bottles)
        }
        );
            // Otra forma de hacer lo mismo podria ser:
            // const updateWinery = await product.setWinery(req.body.wineries_id);
            // const updateStyle_wines = await product.setStyle_wines(req.body.style_wines_id);
            // const updateGrapes = await product.setGrapes(req.body.grapes_id);    
            return res.redirect('/productos/detalle/'+ req.params.id);
    }
    catch(error){return res.send(error);}
    },

    edit: async (req, res) => {
        const winery = await db.Winery.findAll();
        const grapes = await db.Grape.findAll();
        const styleWine = await db.StyleWine.findAll();
        const product = await db.Product.findByPk(req.params.id)
        res.render('./products/edit', {winery, grapes, styleWine, product})
    },


//-----------------------------------------------------

        search: async (req, res) => {
        try{
            let busqueda = await db.Product.findAll({
            where: {
                name: {
                    [Op.like]: '%' + req.query.search + '%'
                }
            },
            // offset: 10,
            // limit: 2
        })
        //res.render('/products/search', {busqueda})
        res.send(busqueda)
    }
        catch(err) {res.send(err)}
    },

    destroy: (req, res) => {
        try{
        db.Product.destroy({
            where: {
                id: req.params.id
            }
            //filesistem unlink
        });
        res.redirect('/productos')
    }
    catch(error){
        res.send(error)
    }
    }
}

module.exports = productControllerDB

