const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quotes extends Model {}

Quotes.init(
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        quotes: {
            type:DataTypes.VARCHAR(30),
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