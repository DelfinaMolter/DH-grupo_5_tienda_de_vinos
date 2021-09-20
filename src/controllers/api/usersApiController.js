/*const db = require ('../../database/models');


usersApis: async (req, res) => {

    try{
        let users = await db.users.findAll({
            atributes: [
                'id',
                'name',
                'email',
                [fn('concat', 'http://localhost:3000/api/')]
            ]
        })

        let = await db.User.findAll({
            include:[{
                association: 'users',
                atributes: [[fn('count', col('name')), 'counts']]
            }]
        })
    }
}


/*

module.exports = {
    list: (req, res) => {
        DB.tienda_de_vinos_db
        .findAll()
        .then(users => {
            return res.json ({
                total: users.length,
                data: users,
                status: 10
            })
        })
    }
}

module.exports = {
    show: (req, res) => {
        db.User
        .findByPk(req.params.id)
        .then(users => {
            return res.status(200).json({
                
            })
        })
    }
}*/