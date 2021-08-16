module.exports = (sequelize, dataTypes) => {
    let alias = 'Grape'; 
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING
        }
    }
    
    let config = {
        tableName:'grapes',
        timestamps: false
    }
    
    let Grape = sequelize.define(alias, cols, config);
    Grape.associate = function(models){
        Grape.hasMany(models.Product,{
            as:"products",
            foreignKey: "grapes_id"
        })
    }
    return Grape;
    
    }