module.exports = (sequelize, dataTypes) => {
    let alias = 'StyleWine'; 
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
        tableName:'style_wines',
        timestamps: false
    }
    
    let StyleWine = sequelize.define(alias, cols, config);
    StyleWine.associate = function(models){
        StyleWine.hasMany(models.Product,{
            as:"products",
            foreignKey: "style_wines_id"
        })
    }
    return StyleWine;
    
    }