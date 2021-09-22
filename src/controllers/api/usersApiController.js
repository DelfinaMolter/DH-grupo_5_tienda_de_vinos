const db = require ('../../database/models');
const express = require ('express');
const app = express(); 
app.set("port", process.env.PORT || 3001);



module.exports = {
    show: (req, res) => {
        db.User
        .findByPk(req.params.id)
        .then (user => {
            return res.status(200).json({
                id:user.id,
                Nombre:user.first_name,
                Apellido:user.last_name,
                email:user.email,
                img:user.image,
                DNI:user.dni,
                status: 200,
            })
        })
    },
        list: (req, res) => {
        db.User
        .findAll()
        .then (async user => {
            let allUsers= await user.map(e=>{
                return {id:e.id,
                    Nombre:e.first_name,
                    Apellido:e.last_name,
                    email:e.email,
                    Img:e.image,
                    birthDate:e.birthDate,
                    DNI:e.dni,
                    url: `http://localhost:${app.get("port")}/api/detail/${e.id}`
                }})
                return res.status(200).json( await
                    {   
                        status:200,
                        contador: {
                            usuariosTotales:allUsers.length,
            
                        },
                        detalleUsuarios: allUsers
                    }
                    )
                })
        }
    }

