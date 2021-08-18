module.exports = (sequelize, dataTypes) => {
    let alias = 'Shopping'; 
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW
        },
        updated_at: {
            type: dataTypes.DATE,
            defaultValue: dataTypes.NOW
        },
        date_shopp: {
            type: dataTypes.DATE
        },
        actual_price: {
            type: dataTypes.FLOAT
        },
        active: {
            type: dataTypes.BOOLEAN
        },
        quantity: {
            type: dataTypes.SMALLINT
        },
    }
    
    let config = {
        tableName:'shopping_card',
        timestamps: true,
        underscored: true
    }
    
    let Shopping = sequelize.define(alias, cols, config);
    Shopping.associate = function(models){
        Shopping.belongsTo(models.Product,{
            as:"products",
            foreignKey: "product_id"
        })
    }

    return Shopping;

    
    }