module.exports = function (sequelize, dataTypes)  {
    let alias = 'user'; 
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        user: {
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        admin: {
            type: dataTypes.BOOLEAN,
            defaultValue: 0
        },
        img: {
            type: dataTypes.STRING
        },
        dni: {
            type: dataTypes.INTEGER
        },
        birth_date: {
            type: dataTypes.DATE
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW
        },
        condiciones: {
            type: dataTypes.BOOLEAN
        }
    }
    
    let config = {
        tableName:'users',
        timestamps: true,
        underscored:true
    }
    
    let User = sequelize.define(alias, cols, config);
    
    return User;
    
    }