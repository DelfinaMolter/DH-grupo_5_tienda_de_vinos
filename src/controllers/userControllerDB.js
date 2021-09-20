const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

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

    register: (req,res)=> {res.render('users/registro')
    },
    processRegister: async (req, res) => {
            try {
                 //Acá si hay errores los enviamos a la vista
                const resultValidations = validationResult(req);
                if (resultValidations.errors.length > 0 ) {
                    return res.render('users/registro', {
                        errors: resultValidations.mapped(),
                        oldData: req.body
                    })
                }
        // Esto es por si el email ya está registrado:
                // let userInDB = await Users.findAll({where: {'email': req.body.email}}); 
                // if(userInDB){
                //     return res.render('users/registro',{
                //         errors:{
                //             email: {
                //                 msg:'Este email ya esta registrado'
                //             }
                //         },
                //         oldData: req.body
                // });
                // }
                let userToCreate = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    user: req.body.user,
                    email: req.body.email, 
                    admin: req.body.admin,
                    dni: req.body.dni,
                    birth_date: req.body.birth_date,
                    created_at: req.body.created_at,
                    updated_at: req.body.update_at,
                    condiciones: req.body.condiciones,
                    password: bcryptjs.hashSync(req.body.password, 10),
                    img: req.file.filename
                }
                let userCreated = await Users.create(userToCreate);
                return res.redirect('/')}
            catch (err){
                    res.send(console.log(err))
                }
            },

    create: (req, res)=>{
        let user = Users.create({
                first_name: req.body.first_name,
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
                res.send({error: err})
            })
    },
    login: function (req, res) {
        return res.render('users/login');
    },
    loginProcess: async function (req, res) {
        try {
        let userToLogin = db.User.findAll({where: {
            'user': req.body.user
        }});

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.user) {
                    res.cookie('user', req.body.user, { maxAge: (1000 * 60) * 2 })
                }
                return res.redirect('/usuarios/perfil')
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Las credenciales son incorrectas'
                    }
                }
            });
        }
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'No se encuentra este usuario en nuestra base de datos'
                }
            }
        });
    }
    catch(err){
        res.send({error: err})
    }
    },
    logoutProcess: function (req, res) {
        res.clearCookie('user'); 
        req.session.destroy();
        return res.redirect('/');
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