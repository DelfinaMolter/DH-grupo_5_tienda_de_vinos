const controller = {
    login: (req,res) => {res.render('./users/login')},
    register: (req,res)=>{res.render('./users/registro')},
    edit: (req,res)=>{res.render('./products/edit')}
}
module.exports = controller;