const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quotes extends Model {}

Quotes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        quotes: {
            type:DataTypes.STRING,
            allowNull:false,
         },
        },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'quotes',
        }
);

module.exports = Quotes;