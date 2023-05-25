const router = require("express").Router();
const { MuscleGroup, Exercises, Quotes } = require("../../models");

router.get("/", (req, res) => {
  Exercises.findAll({ include: MuscleGroup }).then((ExercisesData) => {
    res.json(ExercisesData);
  });
});

// router.get("/", (req, res) => {
//     Exercises.findAll({
//       attributes: ['exercise_name', 'description']
//     }).then((ExercisesData) => {
//       res.json(ExercisesData);
//     });

// get one exercise group
// router.get("/:id", (req, res) => {
//   // find a single Exercise by its `id`
//   // included its muscle group
//   Exercises.findOne({
//     where: {
//       id: req.params.id,
//     },
//     include: MuscleGroup,
//   }).then((ExercisesData) => {
//     res.json(ExercisesData);
//   });
// });

router.get("/:id", (req, res) => {
    Exercises.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['exercise_name', 'description']
    }).then((ExercisesData) => {
      res.json(ExercisesData);
    });
  });
module.exports = router;
