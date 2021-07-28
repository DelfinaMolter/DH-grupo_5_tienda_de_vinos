const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
//const userLoginValidations = require('../middlewares/userLoginValidations');



const controller = {
    login: (req,res) => {res.render('users/login')},

    users: (req, res) => {res.render('users/users')},

    profile: (req, res) => {res.render('users/profile')},

    register: (req,res)=> {res.render('users/registro')},

    

    processRegister: (req, res) => {
        const resultValidations = validationResult(req);
//Acá si hay errores los enviamos a la vista
        if (resultValidations.errors.length > 0 ) {
            return res.render('users/registro', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })
        }
// Esto es por si el email ya está registrado:
        let userInDB = User.findByField('email', req.body.email); 
        if(userInDB){
            return res.render('users/registro',{
                errors:{
                    email: {
                        msg:'Este email ya esta registrado'
                    }
                },
                oldData: req.body
        });
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            // avatar:req.file.filename
        }
        let userCreated = User.create(userToCreate);
        return res.redirect('/usuarios/login')
    },

// Formulario de Login

    login: (req,res) => {
        return res.render('users/login');
    },

    loginProcess: (req,res) => {
        //return res.send(req.body);
        let userToLogin = User.findByField('email', req.body.email);
        //return res.send(userToLogin);

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.Nombre_de_Usuario) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
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
    },
    

    profile: (req,res) => {
        console.log(req.cookies.userEmail);
        return res.render('users/profile',{
            user: req.session.userLogged

        });
    },
}   

//Cuando el usuario se desloguea del sitio 

    /*logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }*/

module.exports = controller

