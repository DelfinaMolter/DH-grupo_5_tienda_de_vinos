const controller = {
    login: (req,res) => {res.render('./users/login')},
    register: (req,res)=>{res.render('./users/registro')}
}
module.exports = controller;