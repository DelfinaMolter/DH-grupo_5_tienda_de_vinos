const path = require('path');
const fs = require('fs');
const grapesModel = require('./grapes');
const styleWineModel= require('./styleWine');
const wineryModel = require('./winery');
//const { parse } = require('path');

const model = {
    directory: path.resolve(__dirname, '../data', 'products.json'),

    all: function() {    // 1. Leer la data; 2. Parsearla; 3. retornarla
        const file = fs.readFileSync(this.directory, 'utf-8');
        const fileParsed = JSON.parse(file);
        return fileParsed;
    },

    allWithExtra: function() {
        allProducts = this.all();
        allProducts.map(element => {
            element.grapes = grapesModel.one(element.grapes);
            return element;
            }).map(element =>{
                element.styleWine = styleWineModel.one(element.styleWine);
                return element;
                }).map(element =>{
                    element.winery = wineryModel.one(element.winery);
                    return element;
                })
        return allProducts;
        
    },

    one: function(id) {
        let allProducts = this.allWithExtra();
        let TheProduct = allProducts.find(element => element.id == id);
        return TheProduct;
    },

    new: function(data, file) {
        let allProducts = this.all();
        let newProduct = {
            id: allProducts.length > 0 ? allProducts[allProducts.length - 1].id + 1 : 1,
            name: data.name,
            winery: parseInt(data.winery),
            styleWine: parseInt(data.styleWine),
            grapes:parseInt(data.grapes),
            bottles: parseInt(data.bottles),
            description: data.description,
            //img: file.filename,
            price: data.price,
            stock: data.stock
        };
        allProducts.push(newProduct);
        fs.writeFileSync(this.directory, JSON.stringify(allProducts, null, 4));
        return true;
    }


}

//console.log(model.new({name:'probando', grapes:[2], winery:[1], styleWine:[3]},{filename:'nombredelarchivito.jpeg'}));

module.exports = model;