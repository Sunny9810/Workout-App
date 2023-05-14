const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Exercises extends Model {}

Exercises.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    musclegroup_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "musclegroup",
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
    modelName: "exercises",
  }
);

module.exports = Exercises;
