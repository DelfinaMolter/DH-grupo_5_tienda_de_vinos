const controller = {
    detalle: (req,res) => {res.render('./products/detalle')},
    create: (req,res) => {res.render('./products/create')},
    edit: (req,res) => {res.render('./products/edit')}
}
module.exports = controller;