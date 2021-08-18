module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        name: {
            type: dataTypes.STRING
        },
        bottles: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.TEXT
        },
        img: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.FLOAT
        },
        stock: {
            type: dataTypes.INTEGER
        },
        inSale: {
            type: dataTypes.BOOLEAN,
        },
        wineries_id:{
            type: dataTypes.INTEGER
        },
        style_wines_id: {
            type: dataTypes.INTEGER
        },
        grapes_id: {
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
    }
    
    let config = {
        tableName:'products',
        timestamps: true,
        underscored: true
    }
    
    let Product = sequelize.define(alias, cols, config);
    Product.associate = function(models){
        Product.belongsTo(models.Grape,{
            as:"grapes",
            foreignKey: "grapes_id"
        })
        Product.belongsTo(models.Winery,{
            as:"wineries",
            foreignKey: "wineries_id"
        })
        Product.belongsTo(models.StyleWine,{
            as:"style_wines",
            foreignKey: "style_wines_id"
        })
    }

    return Product;

    
    }