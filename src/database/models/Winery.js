module.exports = (sequelize, dataTypes) => {
    let alias = 'Winery'; 
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
        tableName:'wineries',
        timestamps: false
    }
    
    let Winery = sequelize.define(alias, cols, config);
    Winery.associate = function(models){
        Winery.hasMany(models.Product,{
            as:"products",
            foreignKey: "wineries_id"
        })
    }
    return Winery;
    
    }