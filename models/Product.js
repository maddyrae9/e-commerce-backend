// import important parts of sequelize library 
const {Model, DataTypes} = require('sequelize')
//import database connection
const sequelize = require('../config/connection');
const Category = require('./Category');
//Initializing table by extending sequelizes model class
class Product extends Model {}
//set up fields and rules
Product.init(
    {
        //define columns
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                isNumeric: true
            },
            category_id: {
                type: DataTypes.INTEGER,
                references: {
                    modelName: "category",
                    key: "id"
                }
            }
        },
            sequelize,
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            modelName: "product",
        
        }
        );
        module.exports = Product;