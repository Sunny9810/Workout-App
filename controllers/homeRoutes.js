const router = require("express").Router();
const { User, MuscleGroup, Exercises, Quotes } = require("../models");
const withAuth = require("../utils/auth");

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

router.get("/workoutpage", async (req, res) => {
  res.render("workoutpage");
});

// router.get("/test", async (req, res) => {
//   res.render("test");
// });

router.get("/workoutpage/:id", async (req, res) => {
  try {
    //search db for exercise(or mgroup?) with id that matches params
    const musclegroupdata = await MuscleGroup.findByPk(req.params.id, {include: Exercises, });
    console.log(musclegroupdata);
    console.log(req.params.id);
    //serialize to only include data we need
    const exercise = musclegroupdata.get({ plain: true });
    res.render("workoutpage", exercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
