module.exports = (sequelize, dataTypes) => {
let alias = 'user'; 
let cols = {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: datatypes.STRING
    },
    last_name: {
        type: datatypes.STRING
    },
    user: {
        type: datatypes.STRING
    },
    email:{
        type: datatypes.STRING
    },
    password: {
        type: datatypes.STRING
    },
    admin: {
        type: datatypes.BOOLEAN
    },
    img: {
        type: datatypes.STRING
    },
    dni: {
        type: datatypes.STRING
    },
    birth_date: {
        type: datatypes.DATE
    },
    created_at: {
        type: datatypes.NOW
    },
    updated_at: {
        type: datatypes.NOW
    },
    condiciones: {
        type: datatypes.BOOLEAN
    }
}

let config = {
    tableName:'users'
}

let User = sequelize.define(alias, cols, config);

return User;

}

