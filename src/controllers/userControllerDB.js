const db = require('../database/models');
const sequelize = db.sequelize;

const Users = db.User;

const usersController={
    'list': (req, res) => {
        Users.findAll()
            .then(users => {
                res.render('users/users.ejs', {users})
            })
    },
    'detail': (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                res.render('users/profile.ejs', {user});
            });
    },
    // Crear un usuario
    create: function (req, res) {
        db.User.findAll()
        .then(function(User){
            return res.render ("users", {User:User});
        })
    }
}

module.exports = usersController;