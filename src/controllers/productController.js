const productModels = require('../models/products');
const grapesModel = require('../models/grapes');
const styleWineModel= require('../models/styleWine');
const wineryModel = require('../models/winery');

const controller = {
    products: (req,res) => {    
        res.render('./products/products',{list:productModels.allWithExtra() })},

    detalle: (req,res) => {
        res.render('./products/detail', {product: productModels.one(req.params.id) })}, 

    create: (req,res) => {
        res.render('./products/create', {
            winery:wineryModel.all(),styleWine: styleWineModel.all(),grapes:grapesModel.all()})},

    save: (req, res) => {
        let result = productModels.new(req.body, req.file);
        return result = true ? res.redirect('/') : res.send ("Error al cargar el producto");
    },

    edit: (req, res) => {
        res.render('./product/edit')},
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