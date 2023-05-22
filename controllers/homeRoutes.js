const router = require('express').Router();
const { User, MuscleGroup, Exercises, Quotes } = require("../models");
const { route } = require("./api");
const withAuth = require('../utils/auth');



// !!!!!!!!!!!!!!!!!!LOGIN ROUTES !!!!!!!!!!!!!!!! //
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    const imageList = [
      { src: "/images/GetFitLogo.png", name: "logo" },
      // Add more image objects to the array if needed
    ];

    res.render("intro", {
      users,
      imageList,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    console.log("logged-in User:", req.session.user);
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/optionpg", (req, res) => {
  res.render("optionpg", { logged_in: req.session.logged_in });
});

// !!!!!!!!!!!!!!!!!!COOL DOWN ROUTES !!!!!!!!!!!!!!!! //
router.get("/cooldown", withAuth, async (req, res) => {
  res.render("cooldown", {logged_in: req.session.logged_in});
});

router.get("/cooldown/:id", async (req, res) => {
  try {
    //search db for exercise(or mgroup?) with id that matches params
    const cooldowngroupdata = await MuscleGroup.findByPk(req.params.id);
    console.log(cooldowngroupdata);
    console.log(req.params.id);
    //serialize to only include data we need
    const exercise = cooldowngroupdata.get({ plain: true });
    res.render("cooldown", {exercise, logged_in: req.session.logged_in,});
  } catch (err) {
    res.status(500).json(err);
  }
});

// !!!!!!!!!!!!!!!!!!WARM UP ROUTES !!!!!!!!!!!!!!!! //

router.get('/warmup', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Quotes.findAll();
    const exercisesData= await Exercises.findAll()
    // Serialize data so the template can read it
    const quotes = projectData.map((project) => project.get({ plain: true }));
    const exercises = exercisesData.map((exercise) => exercise.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('warmup', { 
     quotes,
     exercises,
     logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/warmup/:id", async (req, res) => {
  try {
    //search db for exercise(or mgroup?) with id that matches params
    const warmupgroupdata = await MuscleGroup.findByPk(req.params.id);
    console.log(warmupgroupdata);
    console.log(req.params.id);
    //serialize to only include data we need
    const exercise = warmupgroupdata.get({ plain: true });
    res.render("warmuppage", exercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

// !!!!!!!!!!!!!!!!!!WORKOUTPAGE ROUTES !!!!!!!!!!!!!!!! //

router.get("/workoutpage", withAuth, async (req, res) => {
  res.render("workoutpage", {logged_in: req.session.logged_in,});
});



router.get("/workoutpage/:id", async (req, res) => {
  try {
    //search db for exercise(or mgroup?) with id that matches params
    const musclegroupdata = await MuscleGroup.findByPk(req.params.id, {include: Exercises, });
    console.log(musclegroupdata);
    console.log(req.params.id);
    //serialize to only include data we need
    const exercise = musclegroupdata.get({ plain: true });
    res.render("workoutpage", {exercise, logged_in: req.session.logged_in,});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/test", (req, res) => {
  res.render("optionpg");
});

// router.get("/previousWorkout", (req,res)=>{
//   res.render("previous-workout")
// });

router;
module.exports = router;

