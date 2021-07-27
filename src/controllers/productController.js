const productModels = require('../models/product');
const grapeModel = require('../models/grape');
const styleWineModel= require('../models/styleWine');
const wineryModel = require('../models/winery');

const controller = {
    products: (req,res) => {    
        res.render('./products/products',{list:productModels.allWithExtra() })},

    detalle: (req,res) => {
        res.render('./products/detail', {product: productModels.one(req.params.id) })}, 

    create: (req,res) => {
        res.render('./products/create', {
            winery:wineryModel.all(),styleWine: styleWineModel.all(),grape:grapeModel.all()})},

    save: (req, res) => {
        let result = productModels.new(req.body, req.file);
        return result = true ? res.redirect('/') : res.send ("Error al cargar el producto");
    },

    edit: (req, res) => {
        res.render('./products/edit', {winery:wineryModel.all(),styleWine: styleWineModel.all(),grape:grapeModel.all()})
    },

    update: (req,res) =>{
        let result = product.edit(req.body,req.file,req.params.id)
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },
    
    delete:(req, res) => {
        let result = productModels.delete(req.params.id);
        return result == true ? res.redirect('/') : res.send('Error al eliminar el producto')
    }
}
module.exports = controller;