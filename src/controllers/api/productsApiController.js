const db = require ('../../database/models');
//const sequelize = require("sequelize");
//const Op = db.Sequelize.Op;

module.exports = {
    show: (req, res) => {
        db.Product
        .findByPk(req.params.id)
        .then (async product => {
            return res.status(200).json({
                id:product.id,
                name:product.name,
                description:product.description,
                img:product.image,
                stock:product.stock,
                in_sale:product.in_sale,
                wineriesId:product.wineries_id,
                wineries: await product.getWineries(), 
                status: 200,
            })
        })
    },
    list: (req,res) => {
        db.Product
        .findAll( {include: ['wineries', 'style_wines', 'grapes', ]})
        .then (async products => {
            //res.products.length
            return res.status(200).json( await products.map(e=>{
                return {id:e.id,
                    name:e.name,
                    description:e.description,
                    img:e.image,
                    stock:e.stock,
                    in_sale:e.in_sale,
                    wineries: e.wineries.name,
                    style_wines: e.style_wines.name,
                    grapes: e.grapes.name,
                    status: 200
                }
                }))
            })
    }
}
