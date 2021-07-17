const { validationResult } = require('express-validator');
const User = require('../models/User') //todavia no esta creadooouu!
const bcryptjs = require('bcryptjs');



const controller = {
    login: (req,res) => {res.render('users/login')},

    register: (req,res)=>{res.render('users/registro')},

    processRegister: (req, res) => {
        const resultValidations = validationResult(req);
//Acá si hay errores los enviamos a la vista
        if (resultValidations.error.length > 0 ) {
            return res.render('usuarios/registro', {
                errors: resultValidations.mapped(),
                oldData: req.body
            })
        }
//Esto es por mi el email ya está registrado:
        let userInDB = User.findByField(email, req.body,email); // Hacer este modeloooou!!!
        if(userInDB){
            return res.render('usuarios/registro',{
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
            avatar:req.file.filename
        }
        let userCreated = User.create(userToCreate);
        return res.redirect('usuarios/login')
    },
    edit: (req,res)=>{res.render('products/edit')}
}
module.exports = controller;