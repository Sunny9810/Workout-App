const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MuscleGroups extends Model {}

MuscleGroups.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exercises_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "exercises",
        key: "id",
      },
    },
    // images_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "images",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "musclegroup",
  }
);

module.exports = MuscleGroups;
