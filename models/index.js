const User = require("./User");
const MuscleGroup = require("./musclegroup");
const Exercises = require("./exercises");
const Quotes = require('./quotes');

Exercises.belongsTo(MuscleGroup,{
    foreignKey: "musclegroup_id"
});

MuscleGroup.hasMany(Exercises,{
    foreignKey: "musclegroup_id"
});

//We have to set up our One Too Many to connect our tables 

module.exports = { User, MuscleGroup, Exercises, Quotes};

