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

    edit: (req,res) => {
        res.render('./products/edit')}
}
module.exports = controller;