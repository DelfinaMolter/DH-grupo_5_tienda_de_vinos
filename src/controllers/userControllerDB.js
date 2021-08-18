const db = require('../database/models');
const sequelize = db.sequelize;

const Users = db.User;

const usersController={
    list: (req, res) => {
        Users.findAll()
            .then(users => {
                res.render('users/users.ejs', {users})
            })
    },
    detail: (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                res.render('users/profile.ejs', {user});
            });
    },
    register: (req,res)=> {res.render('registro')},
    create: async (req, res)=>{
        let user = Users.create({
                firsts_name: req.body.first_name,
                last_name: req.body.last_name,
                user: req.body.user,
                email: req.body.email,
                password: req.body.password, 
                admin: req.body.admin,
                img: req.body.img,
                dni: req.body.dni,
                birth_date: req.body.birth_date,
                created_at: req.body.created_at,
                updated_at: req.body.update_at,
                condiciones: req.body.condiciones
            })
            .then((users)=>{
                res.redirect('/detalle/'+ user.id , {users})
            })
            .catch(err=>{
                res.send(consol.log(err))
            })
    },
    login: function (req, res) {

    },
    loginProcess: function (req, res) {

    },
    logout: function (req, res) {

    },
    logoutProcess: function (req, res) {

    },
    edit: async (req, res)=>res.render('edit.ejs',{
        user: await Users.findByPk(req.params.id)
    }),
    update: async (req,res)=>{
        try{
            let user = Users.update({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                user: req.body.user,
                email: req.body.email,
                password: req.body.password, 
                admin: req.body.admin,
                img: req.body.img,
                dni: req.body.dni,
                birth_date: req.body.birth_date,
                baja: req.body.baja
            },
            {
                where: {id: req.params.id}
            })
            return res.redirect('/detalle/'+ user.id)
        }
        catch(err){
            res.send({error: err})
        }
    },
}

module.exports = usersController;