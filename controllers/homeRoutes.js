const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const { route } = require("./api");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("intro", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// router.get("/workout", async (req, res) => {
//   res.render("workoutpage");
// });

router.get("//:id", async (req,res) => {
    try {
        //search db for exercise(or mgroup?) with id that matches params
        const musclegroupdata = await MuscleGroups.findByPk(req.params.id)
        console.log(musclegroupdata);
        //serialize to only include data we need
        const exercise = musclegroupdata.get({ plain: true });
        res.render("workoutpage", exercise);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/test", (req,res)=>{
  res.render("optionpg")
});

// router.get("/previousWorkout", (req,res)=>{
//   res.render("previous-workout")
// });

module.exports = router;
