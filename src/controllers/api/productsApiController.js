const db = require ('../../database/models');
//const sequelize = require("sequelize");
//const Op = db.Sequelize.Op;

module.exports = {
    show: (req, res) => {
        db.Product
        .findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                id:product.id,
                name:product.name,
                description:product.description,
                img:product.image,
                stock:product.stock,
                in_sale:product.in_sale,
                wineriesId:product.wineries_id,
                wineries: product.getWineries(), /*no funciona, trae un objeto vacio*/
                status: 200,
            })
        })
    }
}
