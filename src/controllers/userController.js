const controller = {
    login: (req,res) => {res.render('users/login')},
    register: (req,res)=>{res.render('users/registro')},
    edit: (req,res)=>{res.render('products/edit')},
    users: (req,res)=>{res.render('users/users')},
    profile: (req,res)=>{res.render('users/profile')}
}
module.exports = controller;