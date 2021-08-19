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

    register: (req,res)=> {res.render('users/registro')
    },

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
                res.send(console.log(err))
            })
    },
    login: function (req, res) {
        return res.render('users/login');
    },
    loginProcess: function (req, res) {
        let userToLogin = User.findByField('user', req.body.user);

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
    },
    logout: function (req, res) {
        res.clearCookie('user'); 
        req.session.destroy();
        return res.redirect('/');
        }
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