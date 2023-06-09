const router = require("express").Router();
const { MuscleGroup, Exercises, Quotes } = require("../../models");
const MuscleGroups = require("../../models/musclegroup");

router.get("/", (req, res) => {
  MuscleGroup.findAll({ include: Exercises }).then((MuscleGroupData) => {
    res.json(MuscleGroupData);
  });
});

// get one muscle group
router.get("/:id", (req, res) => {
  // find a single musclegroup by its `id`
  // included its Exercises
  Exercises.findAll({
    where: {
      musclegroup_id: req.params.id,
    },
    // attributes: ['muscle_name', 'description']
  }).then((musclegroupData) => {
    res.json(musclegroupData);
  });
});


module.exports = router;


